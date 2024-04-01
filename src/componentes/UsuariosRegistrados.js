import React from 'react'
//import { useState, useEffect } from 'react';
//import usuarios from './usuariosRegistrados.json'
import usuarios from './usuariosRegistrados.json'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';


function UsuariosRegistrados() {
    //const url = './usuariosRegistrados.json';
    //const [usuarios, setUsuarios] = useState([])

    /* useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((usuarios) => {setUsuarios(usuarios)})
            .catch(error => console.error('Error fetching data:', error));
    }, []) */
    //setUsuarios(usuarios)
    //console.log("Este es usuarios ",usuarios)

    /* 
        function fetchData() {
           const data = './usuariosRegistrados.json'
           setUsuarios(JSON.stringify(data))
           console.log(data.name);
         }
         fetchData() */

    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Usuarios Registrados</h2>
            <table className='table thead-dark mt-5 shadow-lg'>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Identificación</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Fecha de creación</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.identificacion}</td>
                                <td>{user.nombres}</td>
                                <td>{user.apellidos}</td>
                                <td>{user.email}</td>
                                <td>{user.direccion}</td>
                                <td>{user.telefono}</td>
                                <td>{user.fecha_creación}</td>
                                <td>{user.estado}</td>
                                <td><button className='btn btn-primary btn-sm'><BorderColorIcon/></button></td>
                                <td><button className='btn btn-danger btn-sm'><DeleteForeverIcon/></button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );


}

export default UsuariosRegistrados
{}