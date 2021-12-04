import React from 'react'
import './Attention.css'

export default function Attention() {
    return (
        <div className="container__attention">
            <h1 className="title__attention">PUNTOS DE ATENCION</h1>
            <div className="attention">
                <div className="attention__point">
                    <h2>Cali</h2>
                    <img src="https://live.staticflickr.com/3355/3565906316_860c307bd4_b.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Medellín</h2>
                    <img src="https://st2.depositphotos.com/6922808/9719/i/600/depositphotos_97197562-stock-photo-medellin-colombia-july-28-2015.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Miami</h2>
                    <img src="https://p4.wallpaperbetter.com/wallpaper/149/909/260/aerial-view-of-miami-beach-wallpaper-preview.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Bogotá</h2>
                    <img src="https://vistapointe.net/images/bogot%C3%A1-7.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Villavicencio</h2>
                    <img src="https://thumbs4.properati.com/0/Eeh5zakC1nyM2JMbzvDJ1OBJqYM=/trim/fit-in/0x0/smart/filters:strip_icc()/https://properati-s3-co.s3-us-west-2.amazonaws.com/temp-developments-editor-60b33bde-daa9-459b-a3a2-6ba08779dfa7-b0e82bb3c0f6fecbbb5d3ebef46701ad.jpg" alt="" class="rounded-circle"/>
                </div>
            </div>
        </div>
    )
}
