
import { useState } from 'react'
import React from 'react'
import "./ContactForm.css"
export default function ContactForm() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleChange(evento){
        const {name,value} = evento.target;
        switch(name){
            case "nombre":
                setNombre(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default: 
        }
    }

    return (
        <div className="baseDiv">
            <h2 className="tituloFormData">CONTACTO</h2>
            <br/><br/>
        <div className="formulario">
            <div className="formData">
            
            <p>Bogota</p>
            <p>CEL: 310 123 52 23 </p>
            <p>TEL: 6.04453213</p>
            <p>EMAIL</p>
            <p>Direccion</p>
            </div>
           

            <div className="formNombre">
            <form>     
          
            <label > Nombre : </label>            
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange}/><br/>  <br/>         
            <label > Correo Electronico :  </label>
            <input type="text" id="email" name="email" value={email} onChange={handleChange}/>  <br/><br/>
            <label > Numero de telefono : </label>
            <input type="text" id="phone" name="phone" value={phone} onChange={handleChange} /> 
            </form >  
            </div>         
                  
        </div>
        
        <button className="botonFormulario" type="button">Enviar mensaje</button> 
        </div>
        
    )
}
