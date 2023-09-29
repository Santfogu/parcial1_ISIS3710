import { useState } from "react";
import './detalleCafe.css'


function DetalleCafe(props) {

    const [detallado, setDetallado] = useState(false);

    const handleMouseOver = () => {
        setDetallado(true);
    };

    const handleMouseOut = () => {
        setDetallado(false);
    };

    

    return (
        <div className={`card tarjeta detallado`}>
            <div className="portada">
                <img src="" alt="Logo de la compañía" />
            <h3 className="nombreComp">{props.cafe.nombre}</h3>
            <p>{props.cafe.id}</p>
            <p>{props.cafe.tipo}</p>
            <p>{props.cafe.region}</p>
            </div>
        </div>
    );
}

export default DetalleCafe;