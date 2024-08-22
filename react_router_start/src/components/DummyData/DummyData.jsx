import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DummyData() {
  const [resource, setResource] = useState('users');
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  // Get the query parameter from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCount = parseInt(queryParams.get('initialCount'), 10) || 1;

  useEffect(() => {
    const maxUsers = 10; // Maximum number of users available

    if (resource === 'users' && count > maxUsers) {
      setMessage(`We only have ${maxUsers} users available.`);
      setCount(count); 
    
    } else {
      setMessage(''); 
    }

    // Construct the URL based on selected resource and count
    const url = `https://jsonplaceholder.typicode.com/${resource}?_limit=${count}`;

    // Fetch data
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error('Error fetching data:', err));
  }, [resource, count]);

  useEffect(() => {
    // Set the initial count from query parameter when component mounts
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Number of Records:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            min="1"
            className="ml-2 p-2 border border-gray-300 rounded-md"
          />
        </label>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setResource('users')}
          className={`px-4 py-2 mr-2 font-semibold text-white rounded-md ${resource === 'users' ? 'bg-blue-500' : 'bg-gray-500 hover:bg-gray-600'}`}
        >
          Users
        </button>
        <button
          onClick={() => setResource('posts')}
          className={`px-4 py-2 font-semibold text-white rounded-md ${resource === 'posts' ? 'bg-blue-500' : 'bg-gray-500 hover:bg-gray-600'}`}
        >
          Posts
        </button>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{resource.toUpperCase()}</h1>
      {message && (
        <p className="mb-4 text-red-600 font-medium">{message}</p>
      )}
      <ul className="list-disc pl-5 space-y-2">
        {data.map(item => (
          <li key={item.id} className="p-2 border border-gray-300 rounded-md">
            {resource === 'users' ? `${item.name} (${item.email})` : item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DummyData;
