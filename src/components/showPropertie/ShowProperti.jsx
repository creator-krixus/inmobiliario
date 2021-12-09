import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../card/Card'
import axios from 'axios';
import './ShowProperti.css'
import ContactForm from '../contactForm/ContactForm';

export default function ShowProperti(props) {
    /* Toda estas constantes se usan para capturar la ruta
    y luego pasarla en el filter para mostrar solo los 
    inmuebles de una clase */
    const location = useLocation();
    const ruta = location.pathname
    const idRuta = ruta.substring(1,20)
    
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/estate')
        .then((res) => {
            const respuesta = res.data
            setDatos(respuesta)
        })
        .catch(error => console.log(error))
    },[]);

    return (
        <>
        <div className="properti">
            {datos.filter(item => (item.clase === idRuta)).map(item => 
                <Card 
                key={item._id}
                imagenes={item.imagenes}
                clase={item.clase} 
                estado={item.estado}
                precio={item.precio} 
                area={item.area}
                habitaciones={item.habitaciones}
                baños={item.baños}  
                parqueaderos={item.parqueaderos}
                estrato={item.estrato}
                />
            )}
        </div>
        <ContactForm />
        </>
    )
}
