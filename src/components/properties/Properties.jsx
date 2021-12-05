import React from 'react'
import { Link } from 'react-router-dom'
import './Properties.css'

export default function Properties() {
    return (
        <div className="fluid">
            <div className="cont">
                <div className="cont__img">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartamento-mini-25-metros-espacio-1605185899.jpg?crop=1.00xw:0.892xh;0,0.0583xh&resize=480:*" className="rounded"  alt="Apartamentos"/>
                    <Link type="button" className="btn btn-light bton" to="apartamento">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src="https://media.istockphoto.com/photos/alpine-mountian-lake-and-meadow-picture-id157646374?k=20&m=157646374&s=612x612&w=0&h=Hj8OYPoVxFzlGzoySmuUUTUsjrsVUZUOBDzR5GntDE8=" className="rounded"  alt="Lotes"/>
                    <Link type="button" className="btn btn-light bton" to="lote">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src="https://ideasimagenes.com/wp-content/uploads/2017/08/Fachadas90.jpg" className="rounded"  alt="Casas"/>
                    <Link type="button" className="btn btn-light bton" to="casa">Ver mas</Link>
                </div>
            </div>
            
        </div>
    )
}
