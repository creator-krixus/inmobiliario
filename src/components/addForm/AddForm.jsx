import React, { useState } from 'react';
import './AddForm.css'
import swal from 'sweetalert'
import axios from 'axios';

export default function AddForm() {
    const [state, setstate] = useState({
      clase: "",
      precio:"",
      estado:"",
      area:"",
      habitaciones:"",
      baños:"",
      parqueaderos:"",
      estrato:"",
      piso:"",
      imagenes:"",
      descripcion:""
    })

    const handleChange = (e) => {
      setstate({
        ...state,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,

    })
  }

  const sendData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v1/estate', state)
        .then(data => {
            console.log(data);
            swal({
                title: 'Maravilloso',
                text: 'Informacion enviada con exito',
                icon: 'success',
                button: 'Aceptar'
            })
        })
        .catch(error => console.log(error))
}


    return (
        <div className="register">
            <form className="register__propertie">
              <div>
                <label htmlFor="clase"> Tipo de inmueble </label>

                <select 
                  name='clase'
                  className='form-control'
                  onChange={handleChange}
                  placeholder='Select...'
                  >
                  <option selected disabled>Select...</option>
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="lote">Lote</option>
                </select>
              </div>

              <div>
                <label htmlFor="precio"> Precio en dolares</label><br/>
                <input 
                  name="precio"
                  type="Number" 
                  placeholder="Valor de l inmueble" 
                  onChange={handleChange} 
                  className='form-control'
                />
              </div>

              <div>
                <label htmlFor="estado"> Estado </label> <br/>
                <select 
                  name='estado'
                  onChange={handleChange}
                  placeholder='Select...'
                  className='form-control'
                >
                      <option selected disabled>Select...</option>
                      <option value="venta">Venta</option>
                      <option value="alquiler">Alquiler</option>
                  </select>
              </div>  

              <div>
                <label htmlFor="area">Area en m2</label>
                <input 
                  name='area'
                  type="Number"
                  onChange={handleChange}
                  className='form-control'
                />
              </div> 

              <div>
                <label htmlFor="habitaciones">Habitaciones</label> <br />
                <input 
                  name='habitaciones'
                  type="Number"
                  onChange={handleChange}
                  className='form-control'/>
              </div> 

              <div>
                <label htmlFor="parqueaderos">Numero de parqueaderos</label> <br />
                <input 
                name='parqueaderos'
                type="Number"
                onChange={handleChange}
                className='form-control'/>
              </div> 

              <div>
                <label htmlFor="baños">Numero de baños</label> <br />
                <input 
                name='baños'
                type="Number"
                onChange={handleChange}
                className='form-control'/>
              </div> 

              <div>
                <label htmlFor="estrato">Estrato</label>
                <input 
                name='estrato'
                type='Number'
                onChange={handleChange}
                className='form-control'>
                  </input>
              </div>

              <div>
                <label htmlFor="piso">Numero de pisos</label> <br />
                <input 
                name='piso'
                type="Number"
                onChange={handleChange}
                className='form-control'/>
              </div>

              <div>
                <label htmlFor="imagenes">Imagen de la propiedad</label> <br />
                <input 
                name='imagenes'
                type="text"
                onChange={handleChange}
                className='form-control'/>
              </div>

              <div>
                <label htmlFor="descripcion"> Descripcion corta </label> <br />
                <textarea 
                name='descripcion'
                type="text"
                onChange={handleChange}
                className='form-control'/>
              </div>  
            </form>
            <div>
              <input type="submit" onClick={sendData}/>
            </div>
        </div>
    )
}
