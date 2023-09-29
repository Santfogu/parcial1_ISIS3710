import { useEffect, useState } from "react";
import DetalleCafe from "../detalleCafe/detalleCafe";
import "./listaCafes.css"
import { Col, Row } from "react-bootstrap";

function ListaCafes(props) {


  const cafes =[
    {
        "id": 1,
        "nombre": "Café Especial para tí",
        "tipo": "Blend",
        "region": "Angelópolis, Antioquia"
    },
    {
        "id": 2,
        "nombre": "Café Especial Navegante",
        "tipo": "Café de Origen",
        "region": "Guatapé, Antioquia"
    },
    {
        "id": 3,
        "nombre": "Café Especial El Poeta",
        "tipo": "Blend",
        "region": "Gómez Plata, Antioquia"
    },
    {
        "id": 4,
        "nombre": "Café Especial Valentina",
        "tipo": "Café de Origen",
        "region": "Fredonia, Antioquia"
    },
    {
        "id": 5,
        "nombre": "Café Especial Sombrero Vueltiao",
        "tipo": "Café de Origen",
        "region": "Amagá, Antioquia"
    },
    {
        "id": 6,
        "nombre": "Café Especial La Guacamaya",
        "tipo": "Café de Origen",
        "region": "Amagá, Antioquia"
    }
]



  
    return (
      <div className="App">
        <header className="App-header">
          
        <textarea value={cafes}></textarea>
          <div className="container">
            <h1>Listado de cafés</h1>              
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Región</th>
                </tr>
              </thead>
              <tbody>
                {cafes.map(cafe => <tr>
                  <th scope="row">{cafe.id}</th>
                  <td>{cafe.nombre}</td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                  </tr>)}
              </tbody>
            </table>
          
        </div>
        </header>
      </div>
    );

   
}

export default ListaCafes;