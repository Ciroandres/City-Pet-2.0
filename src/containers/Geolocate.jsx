import React from 'react';
import Iframe from 'react-iframe';

const Geolocate = () => {
    return (
        <div>
            <section id="geolocalizacion" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Geolocalizacion</h2>
                        <p>En esta sección podrás encontrar por medio de la geolocalización, donde por medio del mapa vas a ver la ubicación de los establecimientos que son petfriendly.</p>
                    </div>
                    <div>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5952887857634!2d-74.05790958559697!3d4.666020096610655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5f87c4a7ab%3A0x5c083a8e92aeaa3!2sChevignon%20Atlantis%20Plaza!5e0!3m2!1ses!2sco!4v1662493053730!5m2!1ses!2sco" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </Iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Geolocate;