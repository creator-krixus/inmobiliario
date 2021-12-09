import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div>
            <div className="card mt-2" style={{width: '23rem'}}>
                <img src={props.imagenes} className="card-img-top" alt={props.clase} height="200"/>
                <div className="card-body">
                    <h5 className="card-title">{props.clase}</h5>
                    <p className="card-text">Estado {props.estado}</p>
                    <p className="card-text">Valor <strong>{props.precio}</strong></p>
                    <p className="card-text">Area {props.area} metros</p>
                    <p className="card-text">Habitaciones {props.habitaciones}</p>
                    <p className="card-text">Baños {props.baños}</p>
                    <p className="card-text">Parqueaderos {props.parqueaderos}</p>
                    <p className="card-text">Estrato {props.estrato}</p>
                    <p className="card-text">{props.descripcion}</p>
                    <Link to="#" className="btn btn-primary">Ver detalles</Link>
                </div>
            </div>
        </div>
    )
}
