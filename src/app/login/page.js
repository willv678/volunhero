// pages/login.js
'use client'
import { useState } from 'react';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Check if the provided username and password combination exists in the local SQL database
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Login successful, redirect to dashboard or home page
                window.location.href = '/dashboard';
            } else {
                // Login failed, display error message
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setError('An error occurred, please try again later');
        }
    };

    return (
        <main>
        <div className="min-h-screen flex items-center justify-center bg-comic-gradient bg-cover">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                <div>
                    <h1 className="text-center text-4xl font-extrabold text-comic-red mb-4">Welcome Back</h1>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4"
                    />
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-comic-red hover:bg-comic-darkred focus:outline-none focus:ring-2 bg-red-600 text-white focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        Submit
                    </button>
                    <button
                        ahref="/register"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-comic-red hover:bg-comic-darkred focus:outline-none focus:ring-2 bg-red-600 text-white focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        New? Register Here
                    </button>
                </form>
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>
        </div>
        </main>
    );
};

export default LoginPage;
