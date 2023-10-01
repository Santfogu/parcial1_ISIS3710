import { useEffect, useState } from "react";
import DetalleCafe from "../detalleCafe/detalleCafe";
import "./listaCafes.css"
import { useIntl } from "react-intl";

function ListaCafes(props) {

  const intl = useIntl();

  const [cafes, setCafes] = useState([])
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);


  useEffect(()=>{
    fetch("http://localhost:3001/cafes")
    .then(response => response.json())
    .then(data => setCafes(data));
  },[])


  const mostrarDetalleCafe = (cafe) => {
    fetch("http://localhost:3001/cafes/"+cafe.id)
      .then((response) => response.json())
      .then((data) => setCafeSeleccionado(data))
      .catch((error) => {
        console.error("Error al obtener la lista de cafés:", error);
      });
  };

  
  return (
    <div className="contenido">    
      <div className="tablita">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">{intl.formatMessage({ id: "Nombre" })}</th>
                <th scope="col">{intl.formatMessage({ id: "Tipo" })}</th>
                <th scope="col">{intl.formatMessage({ id: "Región" })}</th>
              </tr>
            </thead>
            <tbody>
              {cafes.map(cafe => <tr key={cafe.id} onClick={() => mostrarDetalleCafe(cafe)}>
                <th scope="row">{cafe.id}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
                </tr>)}
            </tbody>
          </table>
          </div>
          {cafeSeleccionado && (
          <div className="detalle">
            <DetalleCafe cafe={cafeSeleccionado} />
          </div>
          )}
      </div>
        

  );

   
}

export default ListaCafes;