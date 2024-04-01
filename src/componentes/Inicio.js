import React from 'react'
import CardList from './body/CardList';
import Header from './header/Header'
import Footer from './footer/Footer';
import Carrusel from './Carrusel/Carrusel';

function Inicio() {
    return (
        <div>
            <Header />
            <Carrusel/>
            <CardList />
            <Footer />
        </div>
    )
}

export default Inicio