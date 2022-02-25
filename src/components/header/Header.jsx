import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fw-bold" style={{background:'#EAEDED '}}>
                <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} width="90" height="60" alt="Relieve logo"/><strong>Grupo Relieve</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="register">Registro</Link>
                    </li>

                  </ul>
{/*                   <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </nav>
        </div>
    )
}
