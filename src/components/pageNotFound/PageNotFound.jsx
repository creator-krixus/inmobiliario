import React from 'react'
import notFound from '../../images/404.jpg'

export default function PageNotFound() {
    return (
        <div class="d-flex justify-content-center" style={{background:'#FF5733 '}}>
            <img src={notFound} alt="not found" width="50%"/>
        </div>  
    )
}
