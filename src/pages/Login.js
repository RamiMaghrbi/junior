import React, { useState } from 'react';
import styles from '../Login.module.css';
import loginImage from '../Assets/Images/Aiu.jpg';
import logoImage from '../Assets/Images/aiu-building.jpg';

function LoginForm() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = () => {

    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginImage}>
                <img src={loginImage} alt="Login background" />
            </div>
            <div className={styles.loginForm}>
                <img src={logoImage} alt="Logo" className={styles.logo} />
                <h2>Log In</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" value={id} onChange={e => setId(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <label>
                        <input type="checkbox" checked={rememberPassword} onChange={e => setRememberPassword(e.target.checked)} />
                        &nbsp;
                        Remember password
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
