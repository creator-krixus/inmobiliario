import React from 'react'
import './Vacations.css'
import playa from '../../images/playa1.png';
import risco from '../../images/casa1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faStopwatch, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../contactForm/ContactForm';

export default function Footer() {
    return (
        <>
        <div className="Header">
            <p className="Header__textos">Your next favorite<br />destination.</p>
            <p className="Header__textos-describe">Get the best out of a trip with BREXIU.</p>
        </div>

        <div className="Body">
            <section className="Body__info">
                <h1 className="Body__titulo">Top Reasons to for<br /> rent in Brexiu</h1>
                <p className="Body__parrafo">
                Lorem ipsum dolor sit, amet consectetur <br />
                adipisicing elit. Sunt nihil exercitationem <br />numquam aut optio? Ducimus <br />
                dolores quaerat soluta quam  quaerat<br /> similique voluptas temporibus unde quasi, <br />
                natus reiciendis quaerat adipisicing<br /> expedita laboriosam.
                Lorem ipsum dolor sit <br />consectetur, adipisicing elit. Soluta, <br />
                iure. Molestias quod porro molestiae<br /> quibusdam odit quaerat illo nihil.<br />
                quibusdam odit quaerat illo nihil
                </p>
            </section>
            <section className="Body__section">
                <img src={risco} alt="Risco" className="Body__section-img"/>
            </section>
        </div>

        <div className="Card">
            <section className="Card__one">
                <div className="one">
                    <FontAwesomeIcon icon={faSun} className="Card__Fontawesome"/>
                    <h3 className="Card__titulo">Time</h3>
                </div>
            </section>
            <section className="Card__two">
                <div className="one">
                    <FontAwesomeIcon icon={faStopwatch} className="Card__Fontawesome"/>
                    <h3 className="Card__titulo-two">Watched</h3>
                </div>
            </section>
            <section className="Card__three">
                <div className="one">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="Card__Fontawesome"/>
                    <h3 className="Card__titulo-three">Currency</h3>
                </div>
            </section>
        </div>

        <div className="Footer">
            <section className="Footer__img">
                <img src={playa} alt="hotel" className="Footer__hotel"/>
            </section>
            <section className="Footer__texto">
                <h1 className="Footer__texto-titulo">Special Island</h1>
                <p className="Footer__texto-parrafo">Lorem ipsum dolor sit amet consectetur<br />
                adipisicing elit. Aspernatur impedit ratione reprehenderit<br />
                veritatis quibusdam aut dolorem! Velit accusantium <br />
                sed, nulla, quo placeat possimus natus sint<br />
                reiciendis nam labore laboriosam cum?</p>
                <p className="Footer__texto-parrafo">Lorem ipsum dolor sit amet consectetur<br />
                adipisicing elit. Aspernatur impedit ratione reprehenderit<br />
                veritatis quibusdam aut dolorem! Velit accusantium <br />
                sed, nulla, quo placeat possimus natus sint<br />
                reiciendis nam labore laboriosam cum?</p>
            </section>  
        </div>
        <ContactForm />
        </>
    )
}