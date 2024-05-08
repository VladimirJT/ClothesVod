import './App.css';
import Inicio from './componentes/Inicio';
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';
import UsuariosRegistrados from './componentes/UsuariosRegistrados';
import Login from './componentes/Login';
import InicioSesionIniciada from './componentes/InicioSesionIniciada';
import ItemConsulta from './componentes/body/ItemConsulta'; // Asegúrate de que esta ruta sea correcta
import CarritoContents from "./componentes/carrito/CarritoContents";
import CarritoVacio from "./componentes/carrito/CarritoVacio";
import DataProvider from "./componentes/context/DataContext";



function App() {
  return (
    <DataProvider>
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/registro' element={<Registro />} />
        <Route exact path='/usuarios-registrados' element={<UsuariosRegistrados />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/sesion' element={<InicioSesionIniciada />} />
        <Route exact path='/detalle/:id' element={<ItemConsulta />} /> {/* Ajusta la ruta para incluir un parámetro id */}
        <Route exact path="/carrito" element={<CarritoContents />} />
        <Route exact path="/carrito-vacio" element={<CarritoVacio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
    </DataProvider>
  );
}

export default App;
