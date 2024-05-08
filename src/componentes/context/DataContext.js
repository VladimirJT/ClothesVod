//The React context provides data to components no matter how deep they are in the components hierarchy.

import { createContext, useState } from "react";



export const dataContext = createContext();

const DataProvider = ({ children }) => {
   
    const [librosDelCarrito, setLibrosDelCarrito] = useState([]) 
    const [cantidadElementos, setCantidadElementos] = useState(0)
    
    return (

        /* Todos los valores que estén dentro de este componente se van a repartir en toda la aplicación */
        <dataContext.Provider value={{ librosDelCarrito, setLibrosDelCarrito,cantidadElementos,setCantidadElementos }}>{children}</dataContext.Provider>  //Ya podemos usar los datos ({libros}) en cualquier componente
    )
}

export default DataProvider;
