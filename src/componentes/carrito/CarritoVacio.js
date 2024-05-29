import React from 'react';
import './carritovacio.css';

export default function CarritoVacio() {
  return (
    <div className="container-fluid mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">El carro esta vacio</h2>
            </div>
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <a href="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">Continue Shopping</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
