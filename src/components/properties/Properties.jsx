import React from 'react'
import './Properties.css'

export default function Properties() {
    return (
        <div className="fluid">
            <div className="cont">
                <div className="cont__img">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartamento-mini-25-metros-espacio-1605185899.jpg?crop=1.00xw:0.892xh;0,0.0583xh&resize=480:*" className="rounded"  alt="Apartamentos"/>
                    <button type="button" className="btn btn-light bton">Ver mas</button>
                </div>
                <div className="cont__img">
                    <img src="https://media.istockphoto.com/photos/alpine-mountian-lake-and-meadow-picture-id157646374?k=20&m=157646374&s=612x612&w=0&h=Hj8OYPoVxFzlGzoySmuUUTUsjrsVUZUOBDzR5GntDE8=" className="rounded"  alt="Lotes"/>
                    <button type="button" className="btn btn-light bton">Ver mas</button>
                </div>
                <div className="cont__img">
                    <img src="https://ideasimagenes.com/wp-content/uploads/2017/08/Fachadas90.jpg" className="rounded"  alt="Casas"/>
                    <button type="button" className="btn btn-light bton">Ver mas</button>
                </div>
            </div>
            
        </div>
    )
}
