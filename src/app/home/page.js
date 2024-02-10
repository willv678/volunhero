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
            
        </div>
        </main>
    );
};

export default LoginPage;
