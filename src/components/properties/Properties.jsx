import React from 'react'
import './Properties.css'

export default function Properties() {
    return (
        <div className="fluid mb-3 mt-3">
            <div className="row align-items-center d-flex flex-wrap flex-fill">
                <div className="col mt-1 mb-1">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartamento-mini-25-metros-espacio-1605185899.jpg?crop=1.00xw:0.892xh;0,0.0583xh&resize=480:*" className="rounded" width="350px" height="570" alt="Apartamentos"/>
                    <button type="button" className="btn btn-light btno">Apartamentos</button>
                </div>
                <div className="col mt-1 mb-1">
                    <img src="https://media.istockphoto.com/photos/alpine-mountian-lake-and-meadow-picture-id157646374?k=20&m=157646374&s=612x612&w=0&h=Hj8OYPoVxFzlGzoySmuUUTUsjrsVUZUOBDzR5GntDE8=" className="rounded" width="350px" height="570" alt="Lotes"/>
                    <button type="button" className="btn btn-light btno">Lotes</button>
                </div>
                <div className="col mt-1 mb-1">
                    <img src="https://ideasimagenes.com/wp-content/uploads/2017/08/Fachadas90.jpg" className="rounded" width="350px" height="570" alt="Casas"/>
                    <button type="button" className="btn btn-light btno">Casas</button>
                </div>
            </div>
            
        </div>
    )
}
