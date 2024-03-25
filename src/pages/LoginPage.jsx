import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert(`Bienvenido ${username}`)
        navigate('/MainPage', { replace: true });
        return;
    }

    return (
        <form onSubmit={handleSubmit} className='container2'>
            <div className="title">Iniciar Sesión</div>
            <br />
            <label className="label" htmlFor='user'>Usuario:</label>
            <input
                type="text" id='user' placeholder="Usuario" className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="label" htmlFor='password'>Contraseña:</label>
            <input
                type="password" id='password' placeholder="Contraseña" className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" />
            <br />
        </form>
    )
}
