import React from 'react'
//import { useState, useEffect } from 'react';
//import usuarios from './usuariosRegistrados.json'
import usuarios from './usuariosRegistrados.json'


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
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(user => {
                        return (
                            <tr key={user.nombres}>
                                <td>{user.nombres}</td>
                                <td>{user.apellidos}</td>
                                <td>{user.email}</td>
                                <td>{user.direccion}</td>
                                <td>{user.telefono}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );


}

export default UsuariosRegistrados