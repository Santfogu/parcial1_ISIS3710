import './detalleCafe.css'
import { FormattedDate, useIntl } from "react-intl";


function DetalleCafe(props) {

    const intl = useIntl();

    return (
        <div className={'card tarjeta'}>
            <p className="titulo">{props.cafe.nombre}</p>
            <p>
                <FormattedDate
                value={new Date(props.cafe.fecha_cultivo)}
                year='numeric'
                month='long'
                day='numeric'
                weekday='long'
                />
            </p>
            <img src={props.cafe.imagen} alt="Img" className="imagen"/>
            <p>{intl.formatMessage({ id: "Notas" })}</p>
            <p>{props.cafe.notas}</p>
            <p><strong>{intl.formatMessage({ id: "Cultivado a una altura de " })}{props.cafe.altura} {intl.formatMessage({ id: "msnm" })}</strong></p>
        </div>
    );
}

export default DetalleCafe;