import React from "react";

const Dondeir = () => {
  return (
    <div>
      <section id="dondeir" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Donde ir</h2>
            <p>
              Te presentamos los establecimientos donde podrás entrar con tu
              mascota y disfrutar un día con tu mejor amigo.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    href="/public/img/team/atlantis_plaza.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://twitter.com/cc_atlantis">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/atlantiscc">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/cc_atlantis/">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Atlantis Plaza</h4>
                  <span>
                    Calle 81 # 13 - 05 Local 110, Bogotá, Colombia, (601) 580
                    3780
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/creps.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://twitter.com/CrepesWafflesCo">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/CrepesyWafflesOficial">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/crepesywaffles/?hl=es-la%2F">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/crepes-y-waffles">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Crepes & Waffles Santa Bárbara</h4>
                  <span>
                    Ak. 19 #120 - 16, Bogotá, Colombia, (601) 213 8471
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/bruna.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://mobile.twitter.com/brunarestaurant">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/brunagastrobar/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/brunarestaurante/?hl=es">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Bruna</h4>
                  <span>
                    Cl. 93b # 13 - 55, Bogotá, Colombia, (+57) 313 445 1185
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/mac.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="https://twitter.com/McDonaldsCol">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/McDonalds-Colombia-32417930741">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/mcdonaldscol/">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>McDonalds 93</h4>
                  <span>Cra. 12 # 93-86, Bogotá, Colombia, 01-800-0423703</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dondeir;
