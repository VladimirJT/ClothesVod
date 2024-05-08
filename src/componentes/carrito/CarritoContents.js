import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CarritoElements from './CarritoElements'
import { dataContext } from '../context/DataContext'
import Swal from 'sweetalert2'
import CarritoVacio from './CarritoVacio';


export default function CarritoContents() {

    const { librosDelCarrito, setLibrosDelCarrito } = useContext(dataContext)

    if (librosDelCarrito.length === 0) {
        return <CarritoVacio />
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
                    setLibrosDelCarrito([])
                    return
                }
            })
    }

    //Esta función da formato a los números o cantidades
    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    //Esta línea suma los valores parciales de cada producto y arroja un total.
    const precioTotalCarrito = librosDelCarrito.reduce((a, b) => a + b.precioCarrito, 0)


    return (
        <div className="h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            <button type="button" class="btn btn-warning btn-lg" onClick={vaciarCarrito}>Vaciar carrito  <i class="bi bi-cart-x"></i></button>
                            <div>
                                <Link to='/' ><h4 className="mb-0"><span className="text-muted">Seguir comprando</span></h4></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <CarritoElements />

                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <div className='col-3'><h4><span>Total a pagar : </span></h4></div>
                                        <div className='col-3'><h4> $ {formatoNumero(precioTotalCarrito)}</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="row d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-warning btn-block btn-lg ">Proceed to Pay</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
