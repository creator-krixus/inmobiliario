import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGem, faHome, faEnvelope, faPhone, faPrint} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGoogle, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

    return (
      
        <div class="container-footer">
              <footer class="text-center text-lg-start text-muted" style={{background:'#EAEDED '}}>
                <section
                  class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                  <div class="me-5 d-none d-lg-block">
                    <span>Conectate a nuestras redes sociales:</span>
                  </div>
                  <div>
                    <a href="a" class="me-4 text-reset ">
                      <FontAwesomeIcon icon={faFacebook} />  
                    </a>
                    <a href="v" class="me-4 text-reset">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="c" class="me-4 text-reset">
                    <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="d" class="me-4 text-reset">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="e" class="me-4 text-reset">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </section>

                <section class="">
                  <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                        <FontAwesomeIcon icon={faGem}/>
                          <i class="fas fa-gem me-3"></i>Inmobiliaria
                        </h6>
                        <p>
                          Here you can use rows and columns to organize your footer content. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>

                      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          Categorias
                        </h6>
                        <p>
                          <a href="#!" class="text-reset text-decoration-none">Apartamentos</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset text-decoration-none">Casas</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset text-decoration-none">Lotes</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset text-decoration-none">Bienes raices</a>
                        </p>
                      </div>

              {/*         <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                          Enlaces utiles
                        </h6>
                        <p>
                          <a href="#!" class="text-reset">Crear cuenta</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Configuraciones</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Favoritos</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Ayuda</a>
                        </p>
                      </div> */}

                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
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
                <div class="text-center p-4" >
                  © {year} Copyright Grupo Brexiu
                </div>

              </footer>
        </div>
    )
}
