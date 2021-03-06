
import { useState } from 'react'
import React from 'react'
import "./ContactForm.css"
export default function ContactForm() {
    const [datos, setDatos] = useState({
        nombre: "",
        email:"",
        phone:"",
        mensaje:""
    });

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
        })
        console.log(datos)
        }
    

    return (
        <div className="baseDiv">
            <h2 className="tituloFormData">CONTACTO</h2>
            <br/><br/>
            <div className="formulario">

                <div className="formData">
                    <p className="formData__parrafo">Bogota</p>
                    <p className="formData__parrafo">Cel: 3101235223</p>
                    <p className="formData__parrafo">Tel: 604453213</p>
                    <p className="formData__parrafo">Email: contacto@brexiu.com</p>
                    <p className="formData__parrafo">Direccion: Transversal 59 con diagonal 32</p>
                </div>
            
                <div className="formNombre">
                    <form>     
                        
                        
                        <input type="text" class="form-control" placeholder="Nombre" name="nombre" onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                        

                      
                        <input type="text" class="form-control" placeholder="Email" name="email" onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                        

                       
                        <input type="text" class="form-control" placeholder="Phone" name="phone" onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                        

                        
                        <textarea class="form-control" aria-label="With textarea" name="mensaje" onChange={handleChange} placeholder="Mensaje" style={{height:'120px'}}></textarea>
                        
                    </form>  
                </div>         
                    
            </div>
            <button className="botonFormulario" type="button">Enviar mensaje</button> 
        </div>
    )}
