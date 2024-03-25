import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', { replace: true });
    }
    return (
        <div className='logoutButton'>
            <button className="dropdown-button" onClick={onLogout} >
                Cerrar Sesión
            </button>
        </div>
    )
}
