import React from 'react'
import './CustomerExperience.css'

export default function CustomerExperience() {
    return (
        <div className="contenedor mt-1">
            <div className="testimonio">
            <img src="https://us.123rf.com/450wm/milkos/milkos1707/milkos170700274/81379727-me-gusta-hombre-negro-feliz-que-muestra-el-pulgar-encima-del-gesto-y-que-sonr%C3%ADe-en-el-fondo-blanco-t.jpg?ver=6" className="imgCustomer" alt="person"/>
            <div className="testi">
                <h2>Michael Kane</h2>
                <p className="historia">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="testimonio">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxwEaiiIhtZPWJz8MamA-3sbwEHQZSM_yJw&usqp=CAU" className="imgCustomer" alt="person"/>
            <div className="testi">
                <h2>Katherin Woods</h2>
                <p className="historia">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="testimonio">
            <img src="https://png.pngitem.com/pimgs/s/240-2405642_persona-sonriendo-png-transparent-png.png" className="imgCustomer" alt="person"/>
                <div className="testi">
                    <h2>John Doe</h2>
                    <p className="historia">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>  
        </div>
    )
}
