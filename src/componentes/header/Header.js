import React from 'react';
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotesIcon from '@mui/icons-material/Notes';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LoginIcon from '@mui/icons-material/Login';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='contenedor p-0 m-0'>
            <img src="logo.jpg" className="logo" alt="logo" />
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tutoriales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Referencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/registro' className="nav-link">
                                Registrarse
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/usuarios-registrados' className="nav-link">
                                Ver usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                        <LoginIcon/>
                            <Link to='/login' className="nav-link">
                                Iniciar sesión
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className='form-control me-2' type="search" placeholder="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;
