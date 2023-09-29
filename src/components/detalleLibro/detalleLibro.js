import { useState } from "react";
import './detalleLibro.css'


function DetalleLibro(props) {

    const [detallado, setDetallado] = useState(false);

    const handleMouseOver = () => {
        setDetallado(true);
    };

    const handleMouseOut = () => {
        setDetallado(false);
    };

    const renderTarjeta = () => {
        if (!detallado) 
        return (<div className="portada">
                    <img src={props.imagen} alt="Logo de la compañía" />
                    <h3 className="nombreComp">{props.empresa}</h3>
                </div>);
        else return (<div className="detalle">
                        <p><strong>Correo:</strong> {props.correo}</p>
                        <p><strong>Dirección:</strong> {props.direccion}</p>
                        <p><strong>Teléfono:</strong> {props.telefono}</p>
                        <p><strong>Categoría:</strong> {props.categoria}</p>
                    </div>)
    }

    return (
        <div className={`card tarjeta ${detallado ? 'detallado' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            {renderTarjeta()}  
        </div>
    );
}

export default DetalleLibro;