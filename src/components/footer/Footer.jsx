import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGem, faHome, faEnvelope, faPhone, faPrint} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGoogle, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

    return (
      
        <div className="container-footer">
              <footer className="text-center text-lg-start text-muted" style={{background:'#EAEDED '}}>
                <section
                  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                  <div className="me-5 d-none d-lg-block">
                    <span>Conectate a nuestras redes sociales:</span>
                  </div>
                  <div>
                    <a href="a" className="me-4 text-reset ">
                      <FontAwesomeIcon icon={faFacebook} />  
                    </a>
                    <a href="v" className="me-4 text-reset">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="c" className="me-4 text-reset">
                    <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="d" className="me-4 text-reset">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="e" className="me-4 text-reset">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </section>

                <section className="">
                  <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                        <FontAwesomeIcon icon={faGem}/>
                          <i className="fas fa-gem me-3"></i>Inmobiliaria
                        </h6>
                        <p>
                          Here you can use rows and columns to organize your footer content. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>

                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                          Categorias
                        </h6>
                        <p>
                          <a href="#!" className="text-reset text-decoration-none">Apartamentos</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset text-decoration-none">Casas</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset text-decoration-none">Lotes</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset text-decoration-none">Bienes raices</a>
                        </p>
                      </div>

              {/*         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                          Enlaces utiles
                        </h6>
                        <p>
                          <a href="#!" className="text-reset">Crear cuenta</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset">Configuraciones</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset">Favoritos</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset">Ayuda</a>
                        </p>
                      </div> */}

                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                          Contacto
                        </h6>
                        <p><FontAwesomeIcon icon={faHome}/>
                          Brexiu</p>
                        <p>
                          <FontAwesomeIcon icon={faEnvelope}/>
                          info@example.com
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faPhone}/>
                          + 01 234 567 88</p>
                        <p><FontAwesomeIcon icon={faPrint}/> + 01 234 567 89</p>
                      </div>
                    </div>

                  </div>
                </section>
                <div className="text-center p-4" >
                  © {year} Copyright Grupo Brexiu
                </div>

              </footer>
        </div>
    )
}
