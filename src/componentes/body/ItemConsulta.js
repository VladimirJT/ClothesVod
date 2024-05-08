import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data';
import './Consulta.css'; // Asegúrate de tener la ruta correcta al archivo de estilos
import Header from '../header/Header';


function ItemConsulta() {
  const { id } = useParams();
  const prenda = data.find(item => item.id === parseInt(id));

  useEffect(() => {
    // En cada cambio de id, desplaza la ventana hacia arriba para mostrar los detalles
    window.scrollTo(0, 0);
  }, [id]);

  if (!prenda) {
    return <div>La prenda no se encontró</div>;
  }

  // Filtra las imágenes de la misma categoría (puedes ajustar la lógica según tus necesidades)
  const imagenesRelacionadas = data.filter(item => item.id !== prenda.id && item.categoria === prenda.categoria);

  // Selecciona aleatoriamente 4 imágenes relacionadas
  const imagenesRelacionadasAleatorias = imagenesRelacionadas.sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div>
      <Header /> {/* Renderizar tu componente de encabezado */}
      <div>
        <div className="item-container">
          {/* Imagen a la izquierda */}
          <div className="img-container">
            <img src={prenda.image} alt={prenda.title} />
          </div>
          {/* Detalles a la derecha */}
          <div className="details-container">
            <h2>{prenda.title}</h2>
            <p>Marca: {prenda.Marca}</p>
            <p>Precio: {prenda.precio}</p>
          </div>
        </div>
        {/* Sección de imágenes relacionadas */}
        <div className="related-images">
          {imagenesRelacionadasAleatorias.map(imagen => (
            <Link to={`/detalle/${imagen.id}`} key={imagen.id}>
              <img src={imagen.image} alt={imagen.title} className="related-image" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemConsulta;
