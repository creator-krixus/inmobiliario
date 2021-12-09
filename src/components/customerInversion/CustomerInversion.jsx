import React from 'react'
import './CustomerInversion.css'
import { Link } from 'react-router-dom'

export default function CustomerInversion() {
    return (
        <div className="CustomerInversion">
              <div className="ContenedorBtn">
                <img className="Customer" src="https://cdn.pixabay.com/photo/2019/10/02/14/23/house-keys-4521073_960_720.jpg" alt="" width="100%" /> <br />
                <Link class="btnInversion" to="#">CONOCE MÁS</Link>
              </div> 
              
              <div className="ContenedorBtn">
                <img className="Customer" src="https://blog.marivalresorts.com/media/uploads/2016/07/blog_Fe.jpg" alt="" width="100%" /> <br /> 
                <Link class="btnInversion" to="#">CONOCE MÁS</Link>
              </div>  
            
        </div>
    )
}



