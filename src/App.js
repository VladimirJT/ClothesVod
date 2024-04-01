
import './App.css';
import Inicio from './componentes/Inicio';
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';
import UsuariosRegistrados from './componentes/UsuariosRegistrados'
import Login from './componentes/Login';
import Carrusel from './componentes/Carrusel/Carrusel';
import InicioSesionIniciada from './componentes/InicioSesionIniciada';


function App() {

  return (
    // El HasRouter es para que cargue correctamente las vista según la ruta https://www.youtube.com/watch?v=bv2pdxqVqBc
    <HashRouter>
      <Routes>
        <Route exact path='/'         element={<Inicio />} />
        <Route exact path='/registro' element={<Registro />} />
        <Route path="*"               element={<NotFound />} />
        <Route exact path='/usuarios-registrados' element={<UsuariosRegistrados/>}/>
        <Route exact path ='/login' element={<Login/>}/>
        <Route exact path ='/slider' element={<Carrusel/>}/>
        <Route exact path = '/sesion' element={<InicioSesionIniciada/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
