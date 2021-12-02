import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
export default function About() {
    return (
        <div class="contenedorAbout" >
            <h1 className="Qsomos">QUÍENES SOMOS</h1>
            <p className="PqSomos">Somos una compañía que nace del trabajo colectivo de un equipo comprometido con la sociedad y de la necesidad de  brindar a través de un espació tecnológico un servicio diferenciador a inversionistas,  y propietarios que deseen comercializar su bien inmueble</p>
            <Link class="botonAbout" to="#">CONOCE MÁS</Link> 
        </div>
    )
}




