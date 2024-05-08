import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header/header.css';
import logo from './logo.png';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';


function HeaderSession() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const userEmail = Cookie.get('email');
        if (userEmail) {
            setEmail(userEmail);
        }
    }, []);

    const cerrarSesion = () => {
        Swal.fire({
            title: "¿Está seguro que desea cerrar la sesión?",
            icon: "question",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Cookie.remove('email', { path: "/" });
                    window.location.hash = '/login';
                }
            });
    };

    return (
        <div className='contenedor p-0 m-0'>
            <div class='slide-track'>
            </div>
            <img src="logo.jpg" className="logo" alt="logo" />
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ropa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quienes somos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        {/* Mostrar el email del usuario si está disponible */}
                        {email && (
                            <li className="nav-item">
                                <span className="nav-link">Bienvenido {email}</span>
                            </li>
                        )}
                        {/* Agregar botón para cerrar sesión */}
                        {email && (
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={cerrarSesion}>Cerrar sesión</button>
                            </li>
                            
                        )}
                    </ul>
                </div>
            </nav>
    </div>
    );
}

export default HeaderSession;
