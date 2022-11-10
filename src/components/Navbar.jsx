import React from "react";
//import { BrowserRouter, Router, Route, Link } from "react-router-dom";
//import Login from "../containers/Login";

const Navbar = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <h1>La ciudad para tu mascota</h1>
          <h2>
            Ahora puedes disfrutar los mejores momentos junto a tu mascota
          </h2>
          <a href="#geolocalizacion" className="btn-get-started scrollto">
            Geolocalización
          </a>
        </div>
      </section>

      <header id="header" className="d-flex align-items-center ">
        <div className="container-fluid d-flex align-items-center justify-content-lg-between">
          <a href="index.html" className="logo me-auto me-lg-0">
            <img
              src="/public/img/logopet.png"
              alt=""
              className="img-fluid"
            ></img>
          </a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#servicio">
                  Servicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#caracteristicas">
                  Caracteristicas
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#dondeir">
                  Donde ir
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#geolocalizacion">
                  Geolocalizacion
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contacto">
                  Contactanos
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="header-social-links d-flex align-items-center">
            <a href={"$"} className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href={"$"} className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href={"$"} className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href={"$"} className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          {/* <BrowserRouter>
            <Router>
              <Route>
                <Link
                  to={Login}
                  className="book-a-table-btn scrollto d-none d-lg-flex"
                >
                  Inicio de Sesión
                </Link>
              </Route>
            </Router>
          </BrowserRouter> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
