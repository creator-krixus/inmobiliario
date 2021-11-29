import React from 'react'
// Se extrae la fecha actial y el año


export default function Footer() {
  const dia = new Date();
  const year = dia.getFullYear();

    return (
      
        <div>

<footer class="text-center text-lg-start bg-dark text-muted">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >

    <div class="me-5 d-none d-lg-block">
      <span>Conectate a nuestras redes sociales:</span>
    </div>



    <div>
      <a href="a" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="v" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="c" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="d" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="e" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="a" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>

  </section>



  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
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
            <a href="#!" class="text-reset">Apartamentos</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Casas</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Oficinas</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Bienes raices</a>
          </p>
        </div>



        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

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
        </div>



        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Contacto
          </h6>
          <p><i class="fas fa-home me-3"></i>Colombia</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>

      </div>

    </div>
  </section>
   <div class="text-center p-4" >
    © {year} Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>

        </div>
    )
}
