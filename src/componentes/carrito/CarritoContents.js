import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CarritoElements from './CarritoElements';
import { dataContext } from '../context/DataContext';
import Swal from 'sweetalert2';
import CarritoVacio from './CarritoVacio';
import './carrito.css'; // Import the CSS file

export default function CarritoContents() {
    const { librosDelCarrito, setLibrosDelCarrito } = useContext(dataContext);

    if (librosDelCarrito.length === 0) {
        return <CarritoVacio />;
    }

    const vaciarCarrito = () => {
        Swal.fire({
            title: "¿Está seguro que desea vaciar el contenido del carrito de compras?",
            icon: "question",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    setLibrosDelCarrito([]);
                }
            });
    };

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    const precioTotalCarrito = librosDelCarrito.reduce((total, libro) => {
        const precio = parseFloat(libro.precio.toString().replace('$', ''));
        if (!isNaN(precio)) {
            return total + precio;
        } else {
            return total;
        }
    }, 0);

    return (
        <div className="h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                        <div className="header">
                            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            <button type="button" className="btn btn-warning btn-lg" onClick={vaciarCarrito}>Vaciar carrito <i className="bi bi-cart-x"></i></button>
                            <div>
                                <Link to='/'><h4 className="mb-0"><span className="text-muted">Seguir comprando</span></h4></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <CarritoElements className="cart-elements" />

                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="total-price">
                                <div className="d-flex justify-content-between">
                                    <div className='total-label'><h4>Total a pagar:</h4></div>
                                    <div className='total-amount'><h4>$ {formatoNumero(precioTotalCarrito)}</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="proceed-to-pay">
                                <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
