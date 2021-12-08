import React from 'react';
import { useForm } from "react-hook-form";


export default function AddForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
                  
        <legend>Agregar</legend>
        
        <form onSubmit={handleSubmit(onSubmit)}>

        {/* Tipo de inmueble */}
      <label for="fClass"> Tipo de inmueble </label><br/>
      <select id="fClass" {...register("Clase")}>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="lote">Lote</option>
      </select> <br/>
        {/* Precio */}
      <label for="fPrice"> Precio en dolares</label><br/>
      <input id="fPrice" min="5000" defaultValue="$" type="number" minLength="4" maxLength="10" prefix="$" placeholder="$" {...register("Precio", {required: true})} /> <br/>
      {/* Venta o alquiler */}
      <label for="fState"> Estado </label> <br/>
      <select id="fState" {...register("Estado")}>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
        </select><br />
        {/* Area en m2 */}
      <label for="fArea">Area en m2</label> <br />
      <input id="fArea" type="number" min="1" minLength="2" maxLength="5" {...register("Area", {required:true})} /> <br />
      {/* Numero de habitaciones */}
      <label for="fRooms">Habitaciones</label> <br />
      <input id="fRooms" type="number" min="1" minLength="2" maxLength="5" {...register("Habitaciones", {required:true})} /> <br />
      {/* Numero de parqueaderos */}
      <label for="fParking">Numero de parqueaderos</label> <br />
      <input id="fParking" type="number" min="1" minLength="1" maxLength="2" {...register("Parqueadero", {required:true})} /> <br />
      {/* Numero de baños */}
      <label for="fBath">Numero de baños</label> <br />
      <input id="fBath" type="number" min="1" minLength="1" maxLength="2" {...register("Baños", {required:true})} /> <br />
      {/* Estrato o calidad de la ubicacion */}
      <label for="fEstrato">Estrato</label> <br />
      {/* "Lo del estrato si dependera del pais" */}
      <input type="radio" id="fEstrato1" value="1" name="estrato" {...register("1")}/>
      <label for="fEstrato1">1</label>
      <input type="radio" id="fEstrato2" value="2" name="estrato" {...register("2")} />
      <label for="fEstrato2">2</label>
      <input type="radio" id="fEstrato3" value="3" name="estrato"{...register("3")}/>
      <label for="fEstrato3">3</label>
      <input type="radio" id="fEstrato4" value="4" name="estrato"{...register("4")}/>
      <label for="fEstrato4">4</label>
      <input type="radio" id="fEstrato5" value="5" name="estrato"{...register("5")}/>
      <label for="fEstrato5">5</label>
      <input type="radio" id="fEstrato6" value="6" name="estrato"{...register("6")}/>
      <label for="fEstrato6">6</label> <br />
      {/* Cantidad de plantas del inmueble */}
      <label for="fPisos">Numero de pisos</label> <br />
      <input id="fPisos" type="number" min="1" minLength="1" maxLength="2" {...register("Pisos", {required:true})} /> <br />
      {/* Text area */}
      <label for="fDescripcion"> Descripcion corta </label> <br />
      <textarea id="fDescripcion" type="textarea" height="12" placeholder="Propiedad bien ubicada..." {...register("Descripcion", {required:true})}/> <br/>
      

      <input type="submit" />
    </form>

        
        
        </div>
    )
}
