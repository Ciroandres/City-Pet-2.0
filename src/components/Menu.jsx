import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <h1>La ciudad para tu mascota</h1>
          <h2>Ahora puedes disfrutar los mejores momentos junto a tu mascota</h2>
          <a href="#geolocalizacion" className="btn-get-started scrollto">Geolocalización</a>
        </div>
      </section>
      <header id="header" className="d-flex align-items-center ">
        <div className="container-fluid d-flex align-items-center justify-content-lg-between">
          <a href="t" className="logo me-auto me-lg-0">
            <img
              src="../img/logopet.png"
              alt=""
              className="img-fluid"
            ></img>
          </a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/hero">
                  <NavLink to="/">Inicio</NavLink>
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/servicio">
                  <NavLink to="/servicios">Servicio</NavLink>
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/caracteristicas">
                  <NavLink to="/caracteristicas">Caracteristicas</NavLink>
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="/dondeir">
                  <NavLink to="/dondeir">Donde ir</NavLink>
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/geolocalizacion">
                  <NavLink to="/geolocate">Geolocalización</NavLink>
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="/contacto">
                  <NavLink to="/contacto">Contacto</NavLink>
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <div className="header-social-links d-flex align-items-center">
            <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="/" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <a href="/login"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          <NavLink to="/login">Inicio de Sesión</NavLink>
        </a>
      </header>
    </div >
  );
};

export default Menu;
