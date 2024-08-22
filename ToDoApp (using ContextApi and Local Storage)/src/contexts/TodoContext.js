import {createContext , useContext} from 'react'

export const TodoContext = createContext( {

    todos: [
        {
            id : 1,
            todo: 'Learn React',
            completed: false
        }
    ],

    addTodo: ( task ) => {},
    updateTodo: ( taskID, task ) => {},
    deleteTodo: ( taskID ) => {},
    toggleComplete: ( taskID ) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

/*
    functions used in TodoContext are defined in App.jsx
*/