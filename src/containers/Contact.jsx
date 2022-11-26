import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contacto" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contactanos</h2>
                    </div>


                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>cytipetbogot@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Telefono:</h4>
                                    <p>+57 301 254 3802</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form className="php-email-form" action="forms/contact.php" method="post" type="form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre completo" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujeto" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar mensaje</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contact;