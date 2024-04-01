import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from './header/Header'
import Footer from './footer/Footer';
import Cookies from 'universal-cookie' //https://www.npmjs.com/package/universal-cookie
import Swal from 'sweetalert2';

const Login = () => {

    const cookies = new Cookies()
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    //const [userName, setUserName] = useState("")
    const [showPassword, setShowPassword] = useState(true)

    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    //Guarda en la variable newValues los valores ingresados en el formulario de sesión
    const handleChange = (e) => {        
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    

    const handleClickPassword = (e) => {
        setErrorPassword(false)
    }

    const handleClickEmail = (e) => {
        setErrorEmail(false)
    }

    const handleShowPassword = (e) => {
        setShowPassword(!showPassword)
    }

    const iniciarSesion = (e) => {
        e.preventDefault()
        console.log(values.email, values.password)
        
        if (values.password.length === 0 && values.email.length === 0) {
            setErrorEmail(true)
            setErrorPassword(true)
            return
        }
        if (values.password.length === 0) {
            setErrorPassword(true)
            return
        }
        if (values.email.length === 0) {
            setErrorEmail(true)
            return
        }
        fetch("http://localhost:3001/login",{
            method: 'POST',
            headers:{"Content-Type":"Application/json","Acept":"application/json"},
            body:JSON.stringify(values)
        })
        .then(response => {           
            if(response.status === 200) {
                cookies.set('email',values.email,{
                    secure:true,
                    sameSite:'None',
                    path:'/'
                })
                window.location.hash = '/sesion'
            }
            else{
                console.log("sdfd" ,response.status)
                Swal.fire({
                    title:"Las credenciales ingresadas no son correctas",
                    icon: "error"
                })
                window.location.hash = '/login'
            }
        })
        .catch(()=> Swal.fire({
            title:"No se puede iniciar sesión por un problema en el servidor",
            icon:"error"
        }),
        window.location.hash = '/login'
        )
    }

    //Si ya se inició sesión y escriben en la barra de direcciones '/login' entonces lo redirige al componente InicioSesionIniciada.
    useEffect(()=>{
        if(cookies.get('email')){
            window.location.hash = '/sesion'
        }
    })

    return (
        <div>
            <Header />
            <form onSubmit={iniciarSesion} >
                <section className="vh-100 bg-primary">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong rounded" >
                                    <div className="card-body p-5 text-center">

                                        <h3 className="mb-5">Sign in</h3>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="typeEmailX-2">Email</label>
                                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" name='email' onChange={handleChange} onClick={handleClickEmail}/>
                                            {errorEmail ? <p>Debe ingresar un email</p> : ""}
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="typePasswordX-2">Password</label>
                                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" name='password' onChange={handleChange} onClick={handleClickPassword}/>
                                            {errorPassword ? <p>Debe ingresar una contraseña</p> : ""}
                                        </div>

                                        {/*  <!-- Checkbox --> */}
                                        {/* <div className="form-check d-flex justify-content-start mb-4">
                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                            <label className="form-check-label" for="form1Example3"> Remember password </label>
                                        </div> */}

                                        <div class="d-grid gap-2 col-15 mx-auto">
                                            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                        </div>

                                        <hr className="my-20" /> {/* Crea una línea horizontal */}

                                        <div class="d-grid gap-2 col-15 mx-auto">
                                            <button className="btn btn-lg btn-block btn-primary bg-danger"
                                                type="submit"><GoogleIcon />  Sign in with google</button>
                                            <button className="btn btn-lg btn-block btn-primary mb-2 bg-primary"
                                                type="submit"><FacebookIcon /> Sign in with facebook</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <Footer />
        </div>
    );
}

export default Login;
