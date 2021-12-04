import React from 'react'
import './MisionVision.css'

export default function Misionvision() {
    return (
        <div className="contenedorMisionVision" >
            <h1 className="HMisionVision">MISION</h1>
            <p className="PMisionvision">
                Acompañamiento y asesoría al inversionista nacional y extranjero, en todo el ciclo de vida de la inversión, que involucra la asesoría legal, financiera, operativa y técnica, lo que le permitirá tanto al inversionista comprador como el vendedor satisfacción completa en el negocio inmobiliario, con valores agregados diferenciadores.
            </p>  
            <br />
            <h2 className="HMisionVision">NUESTRO EQUIPO</h2>
            <div className="Nuestroequipo">
                <div className="empleado1">
                    <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto1" />
                    <p className="PMisionvision">Cesar Abadia</p>
                </div>
                <div className="empleado1">
                     <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto2" />
                     <p className="PMisionvision">David Charif</p>
                </div>
                 <div className="empleado1">
                    <img className="imgEquipo" src="https://image.flaticon.com/icons/png/512/56/56863.png" alt="Foto3" />
                    <p className="PMisionvision">Jennifer Alarcon</p>
                </div>
                <div className="empleado1">
                    <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto4" />
                    <p className="PMisionvision">Wilson Rueda</p>
                 </div>
                 <div className="empleado1">
                    <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto5" />
                    <p className="PMisionvision">Jaime Valencia</p>
                 </div>   
            </div>
            <br />
            <h2 className="HMisionVision">VISION</h2>
            <p className="PMisionvision">
                Seremos la compañía líder en la región y en el país en la oferta de servicios y productos inmobiliarios, con respeto por el medio ambiente, con sentido social y de pertenencia por nuestra riqueza natural y cultural.
            </p>  

        </div>
    )
}