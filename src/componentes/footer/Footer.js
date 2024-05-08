import React from 'react';

function Footer() {
    return (
        <div className="elo" id="footer">
            <footer className="text-center text-lg-start bg-dark text-white">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="social-icons">
                        <a href="https://web.facebook.com/vladimirjose.torrealbaagreda" className="facebook">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="" className="google">
                            <i className="bi bi-google"></i>
                        </a>
                        <a href="" className="linkedin">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="" className="github">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="" className="me-4 text-reset"></a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Clothes vod
                                </h6>
                                <p>
                                    En Clothes VOD, somos un equipo apasionado dedicado a ofrecer moda de calidad y una experiencia excepcional. Nos esforzamos por estar a la vanguardia de las tendencias y tecnologías para ayudar a nuestros clientes a expresar su estilo único y sentirse seguros en cada ocasión.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Colombia, Pereira, Centro</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    vladimirjosetorrealba@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +57 310 370 1136</p>
                                <p><i className="fas fa-print me-3"></i> +57 310 380 1120</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: "#212529" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/" style={{ color: "#fff" }}>MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
