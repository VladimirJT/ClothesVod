import React, { useEffect } from 'react';
import CardList from './body/CardList';
import HeaderSession from './HeaderSession';
import Footer from './footer/Footer';
import Carrusel from './Carrusel/Carrusel';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import logo from './logo.png';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

function InicioSesionIniciada() {
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

    // Si no se está logueado y en la barra de direcciones digitan /sesion entonces redirige al login
    useEffect(() => {
        if (!Cookie.get('email')) {
            window.location.hash = '/login';
        }
    });

    return (
        <div>
            <HeaderSession />
            <Carrusel />
            <CardList />
            <Footer />
        </div>
    );
}

export default InicioSesionIniciada;
