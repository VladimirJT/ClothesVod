
import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import './Registro.css'
import { Link } from 'react-router-dom';




export default function Registro() {
    let URL = process.env.REACT_APP_ENVIRONMENT

    const [identificacionError, setIdentificacionError] = useState(false)
    const [nomError, setNomError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailErrorVacio, setErrorEmailVacio] = useState(false)
    const [direccionError, setDireccionError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
    const [passComparacion, setPassComparacion] = useState(false)

    const form = useRef()

    function idError() { //Esta función setea a false la variable "identificacionError" para que el mensaje de error desaparezca cuando hacen click en el campo de la identificación.
        setIdentificacionError(false)
    }
    function nombreError() { //Esta función setea a false la variable "nomError" para que el mensaje de error desaparezca cuando hacen click en el campo del nombre.
        setNomError(false)
    }
    function apelliError() {
        setApellidoError(false)
    }
    function errorEmail() {
        setEmailError(false) //Para cuando no escriban una dirección de correo válida en su estructura.
        setErrorEmailVacio(false) //Para cuan do dejen vacío el campo email
    }
    function dirError() {
        setDireccionError(false)
    }
    function telError() {
        setTelefonoError(false)
    }
    function passError() {
        setPasswordError(false)
    }
    function passRepeat() {
        //setPasswordErrorRepeat(false)
        setPassComparacion(false)
        setPasswordErrorRepeat(false)
    }

    const [values, setValues] = useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        telefono: "",
        password: "",
        passRepeat: ""

    })
    const handleChange = (e) => { //cuando se cambie de Input entonces se guarda la información en la variables.

        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        let validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/  //Expersión regular para: Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial. https://uibakery.io/regex-library/password
        let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //Expresión regular para validar email, es decir, que el email ingresado tenga el formato correcto de una dirección de correo electrónico

        if (values.identificacion.length < 5 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true)
            return
        }
        else if (values.nombres.length < 3 || values.nombres.length === 0) { //El método trim( ) elimina los espacios en blanco en ambos extremos del string.        
            setNomError(true)
            return
        }
        else if (values.apellidos.length < 3 || values.apellidos.length === 0) {
            setApellidoError(true)
            return
        }
        else if (values.email.length === 0) {
            setErrorEmailVacio(true)
            return
        }

        else if (!validEmail.test(values.email)) {
            setEmailError(true)
            return
        }
        else if (values.direccion.length < 15) {
            setDireccionError(true)
            return
        }
        else if (values.telefono.length < 10 || values.telefono.length > 10) {
            setTelefonoError(true)
            return
        }
        else if (!validPassword.test(values.password)) {
            setPasswordError(true)
            return
        }
        else if (values.passRepeat.length === 0) {
            setPasswordErrorRepeat(true)
            return
        }
        else if (values.password !== values.passRepeat) {
            setPassComparacion(true)
            return
        }


        //para registrar localmente
        /*  fetch('http://localhost:3001/registro-usuario', {
            method: 'POST',
            headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            body: JSON.stringify(values)
        }) */
        console.log("URL---->>",URL)
    fetch(`${URL}/registro-usuario`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json", "Accept": "application/json"
    },
    body: JSON.stringify(values)
    })
            .then(response => {
                if (response.status === 200) {
                    // alert("Usuario creado con éxito")
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success"
                    })
                    form.current.reset()
                    window.location.hash = '/login'

                }
                if (response.status === 400) {
                    //alert(" + response.status)
                    Swal.fire({
                        title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                        icon: "warning"
                    })

                }
            })
            .catch((error) => {
                //alert("No fue posible finalizar el proceso de registro por un error " + error)
                Swal.fire({
                    title: "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                    icon: "error"
                })
            })



    }


    return (
        <div>
            <form onSubmit={handleSubmit} ref={form}>

                <section className="vh-100 bg-image" >

                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">

                            <div className="card" >
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Registro</h2>



                                    <div className="form-outline mb-3">

                                        <label className="form-label" htmlFor="form3Example1cg" >Identificación</label>
                                        <input type="number" id="form3Example0cg" className="form-control" name='identificacion' placeholder='Deber estar entre 5 y 10 dígitos' onChange={handleChange} onClick={idError} />
                                        {identificacionError ? <p>La identificación debe estar entre 5 y diez números</p> : ""}

                                    </div>

                                    <div className="form-outline mb-3">

                                        <label className="form-label" htmlFor="form3Example1cg" >Nombre</label>
                                        <input type="text" id="form3Example1cg" className="form-control" name='nombres' placeholder='Debe ser de mínimo tres caracteres' onChange={handleChange} onClick={nombreError} />
                                        {nomError ? <p>El nombre debe contener mínimo 3 caracteres</p> : ""}

                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example1cg">Apellido</label>
                                        <input type="text" id="form3Example2cg" className="form-control form-control-lg" name='apellidos' placeholder='Debe ser de mínimo tres caracteres' onChange={handleChange} onClick={apelliError} />
                                        {apellidoError ? <p>El apellido debe contener mínimo 3 caracteres</p> : ""}

                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                        <input type="text" id="form3Example3cg" className="form-control form-control-lg" name='email' placeholder='Debe ser un formato válido. Ejemplo: alguien@gmail.com' onChange={handleChange} onClick={errorEmail} />
                                        {emailError ? <p>El email debe tener la estructura de una dirección de correo electrónico. Verbigracia: alguien@gmail.com</p> : ""}
                                        {emailErrorVacio ? <p>Debe introducir una dirección de correo electrónico.</p> : ""}
                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example3cg">Dirección</label>
                                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='direccion' placeholder='Debe ser de mínimo quince caracteres' onChange={handleChange} onClick={dirError} />
                                        {direccionError ? <p>La dirección debe contener mínimo 15 caracteres</p> : ""}

                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example3cg">Teléfono</label>
                                        <input type="number" id="form3Example5cg" className="form-control form-control-lg" name='telefono' placeholder='Debe ser de diez números' onChange={handleChange} onClick={telError} />
                                        {telefonoError ? <p>El teléfono debe ser de 10 números</p> : ""}
                                    </div>


                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        <input type="password" id="form3Example6cg" className="form-control form-control-lg" name='password' onChange={handleChange} onClick={passError} />
                                        {passwordError ? <p>La contraseña no cumple con los requisitos mínimos solicitados(Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial).</p> : ""}
                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                        <input type="password" id="form3Example4cdg" className="form-control form-control-lg" name='passRepeat' onChange={handleChange} onClick={passRepeat} />
                                        {passComparacion ? <p>Las contraseñas ingresadas no coinciden</p> : ""}
                                        {passwordErrorRepeat ? <p>Este campo no puede quedar vacío.</p> : ""}

                                    </div>

                                    {/*  <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                        <label className="form-check-label" htmlFor="form2Example3g">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div> */}
                                    <div className="d-flex justify-content-center">
                                        <button type='submit' className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>
                                    
                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u><Link to='/login'>Login here </Link></u></a></p>




                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </form>

        </div>
    )
}
