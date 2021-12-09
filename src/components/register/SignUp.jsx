import React, {useState} from 'react'
import './SignUp.css'
import logo from '../../images/logo.png'
import swal from 'sweetalert'
import axios from 'axios'

export default function SingUp() {
    const [state, setstate] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })

    const clear = () => { 
      document.getElementById("form").reset();
      window.location.reload();
    }

    const data = (e) => {
      setstate({
        ...state,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value
      })
    }

    const enviarDatos = (e) => {
      e.preventDefault();
      if(state.email === "" || state.password === "" || state.password !== state.confirmPassword){
          swal({
            title: 'Error',
            text: 'Uno o varios campos mal diligenciados',
            icon: 'error',
            button: 'Aceptar'
        })
      setTimeout(clear, 2500)
      }else{
        axios.post('http://localhost:8000/api/v1/users/register', state)
          .then(res => {
            if(res.data.code === 11000){
              swal({
                title: 'Error',
                text: 'Email ya registrado',
                icon: 'error',
                button: 'Aceptar'
            })
            setTimeout(clear, 2500)
            }else{
              swal({
                title: 'Registro exitoso',
                text: 'Ahora puedes ingresar',
                icon: 'success',
                button: 'Aceptar'
            })
            setTimeout(clear, 2500)
            }
          })
          .catch(error => console.log(error))
          setTimeout(clear, 2500)
      }
    }

    return (
        <div style={{background:'#FF5733'}}>
          <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                        <img src={logo} style={{width:90}} alt="logo" />
                            <h4 className="mt-1 mb-1 pb-1">We are The Brexiu Team</h4>

                          <form id="form">
                            <h3>Registro de nuevo usuario</h3>

                            <div className="form-outline mb-4">
                              <input type="email" name="email" onChange={data} className="form-control" placeholder="Email address"/>
                            </div>

                            <div className="form-outline mb-4">
                              <input type="password" name="password" onChange={data} className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="password" name="confirmPassword" onChange={data} className="form-control" placeholder="Confirm password"/>
                            </div>

                            <div className="text-center pt-1 mb-1 pb-1">
                              <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-1" type="button" onClick={enviarDatos}>Sing Up</button>
                            </div>
                          </form>

                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">We are more than just a company</h4>
                          <p className="small mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
