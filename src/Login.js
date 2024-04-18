import React, { useState } from 'react';
import loginImage from './Assets/images/Aiu.jpg';
import logoImage from './Assets/images/aiu-building.jpg';

function LoginForm() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = () => { };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="flex-1 max-w-md w-3/4 bg-white rounded-lg shadow-md p-8 h-screen flex flex-col justify-center">
                <img src={logoImage} alt="Logo" className="block mx-auto mb-8 max-w-3/4" />
                <h1 className="text-5xl font-bold mb-8 text-center text-blue-500">Log In</h1>
                <form onSubmit={handleLogin} className="flex-1">
                    <div className="mb-4 flex flex-row-reverse items-center">
                        <label htmlFor="id" className="font-bold mr-2">ID</label>
                    </div>
                    <div className="mb-4">
                        <input type="text" id="id" value={id} onChange={e => setId(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4 flex flex-row-reverse items-center">
                        <label htmlFor="password" className="font-bold mr-2">Password</label>
                    </div>
                    <div className="mb-4">
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>

                    <label className="flex flex-row-reverse items-center mb-4">
                        <input type="checkbox" checked={rememberPassword} onChange={e => setRememberPassword(e.target.checked)} className="mr-2" />
                        <span>Remember password</span>
                    </label>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Log In</button>
                </form>
            </div>
            <div className="flex-1 h-full relative">
                <img src={loginImage} alt="Login background" className="absolute top-0 left-0 w-full h-full object-cover " style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }} />
            </div>
        </div>

    );
}

export default LoginForm;
