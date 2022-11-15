import React from "react";

const Caracterist = () => {
  return (
    <div>
      <section id="caracteristicas" className="our-values">
        <div className="section-title">
          <h2>CARACTERISTICAS DE CITYPET</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                {/* Style='background-image: url("/public/img/dog.jpg");' */}
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={"$"}>Geolocalización</a>
                  </h5>
                  <p className="card-text">
                    por medio de esta utilizamos un mapa con los lugares donde
                    puedes ingresar con tu mascota, ubicado con pines y nombre
                    del lugar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="card">
                {/* Style='background-image: url("/public/img/dog_2.jpg");' */}
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={"$"}>Información</a>
                  </h5>
                  <p className="card-text">
                    Te brindamos los nombres, direcciones, teléfonos y redes
                    sociales de cada lugar dondes puede ingresar con tu mascota.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caracterist;
