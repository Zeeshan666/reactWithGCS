import React, { useState, useEffect } from 'react';
import { TodoProvider } from './contexts'; // Import TodoProvider
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = useState([]);

    // Add a new todo
    function addTodo(todo) {
        setTodos((prevTodos) => [{ id: uuidv4(), ...todo }, ...prevTodos]);
    }

    // Update an existing todo
    function updateTodo(id, updatedTask) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? updatedTask : todo))
        );
    }

    // Delete a todo
    function deleteTodo(id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    // Toggle the completion status of a todo
    function toggleComplete(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    // Load todos from localStorage on component mount
    useEffect(() => {
        try {
            const storedTodos = JSON.parse(localStorage.getItem("todos"));
			console.log (storedTodos)
            if (storedTodos && storedTodos.length > 0) {
                setTodos(storedTodos);
            }
        } catch (error) {
            console.error('Failed to parse todos from localStorage:', error);
        }
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        try {
            localStorage.setItem("todos", JSON.stringify(todos))
			console.log(todos)
        } catch (error) {
            console.error('Failed to save todos to localStorage:', error);
        }
    }, [todos]);

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
					))}
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
