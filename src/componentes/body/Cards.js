import React, { useContext } from 'react'
import './card.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { dataContext } from "../context/DataContext";


export default function Cards(props) {
    const { setLibrosDelCarrito } = useContext(dataContext)
    
    function addToCart() {
        
        setLibrosDelCarrito((currentLibros) => {
            const isItemFound = currentLibros.find((item) => item.id === props.items.id);
            console.log("isItemFound--->>", isItemFound)
            if (isItemFound) {
                return currentLibros.map((item) => {
                    if (item.id === props.items.id) {
                        return { ...item, cantidad: Number(item.cantidad) + 1, precioCarrito: item.precioCarrito + item.precio }
                    }
                    else {
                        return item
                    }
                })
            }
            else {
                //return setLibros([...libros, props.items])
                return [...currentLibros, props.items]
            }
        })
    }
    return (
        <div className='card2'>
            
            <img src={props.items.image} alt='logo'/>
            <div>
                
                <center><h5>{props.items.title}</h5></center>
                
                <Link to={`/detalle/${props.items.id}`}>
            <button type="button" className="button">
            <ChevronRightIcon />
        </button>
        </Link>
        <button
        type="button"
        class="btn btn-outline-primary"
        onClick={addToCart}
        >
        Comprar
        </button>
    </div>
    </div>
    )
}
