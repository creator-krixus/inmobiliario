import React from 'react'
import './SignUp.css'
import logo from '../../images/logo.png'

export default function SingUp() {
    return (
        <div style={{background:'#FF5733'}}>
<section class="h-100 gradient-form">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">
              <img src={logo} style={{width:90}} alt="logo" />
                  <h4 class="mt-1 mb-1 pb-1">We are The Brexiu Team</h4>

                <form>
                  <p>Registro de nuevo usuario</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" placeholder="Email address"/>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Confirm password"/>
                  </div>

                  <div class="text-center pt-1 mb-1 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Sing Up</button>
                  </div>
                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
