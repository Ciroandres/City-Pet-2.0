import React from 'react';

const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="footer-top">

                    <div className="container">

                        <div className="row  justify-content-center">
                            <div className="col-lg-6">
                                <h3>CityPet</h3>
                                <p>Suscribete para recibir noticias de eventos para tu mascota.</p>
                            </div>
                        </div>

                        <div className="row footer-newsletter justify-content-center">
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" placeholder="Enter your Email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="t" className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="f" className="facebook"><i className="fab fa-facebook"></i></a>
                            <a href="i" className="instagram"><i className="fab fa-instagram"></i></a>
                            <a href="g" className="google-plus"><i className="fab fa-skype"></i></a>
                            <a href="l" className="linkedin"><i className="fab fa-linkedin"></i></a>
                        </div>

                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                </div>
                <div className="footer">
                    &copy; Copyright <strong><span>CityPet</span></strong>. Todos los derechos reservados a <strong><span className="city-footer">CityPet @2022 </span></strong>
                </div>
            </section>
        </div>
    );
}

export default Footer;