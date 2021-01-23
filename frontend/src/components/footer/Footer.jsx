import React from "react";
import { Link } from "react-router-dom";
import "./footer.style.scss";


const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-12 col-md-12 col-xl-4  footer__col1">
                    <div className="footer__logo-box">
                        <i className="fas fa-laptop-code fa-4x footer__logo"></i>
                    </div>
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to="/" className="footer__link">
                                    Accueil
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/about" className="footer__link">
                                    About
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact" className="footer__link">
                                    Contact
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/service" className="footer__link">
                                    Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-xl-4 ">
                    <div className="footer__contact">
                        <div className="footer__contact--adress ">
                            <i class="fa fa-map-marker footer__icone" ></i>
                            <p>
                                <span>Impasse Larribeau</span>31260 Montespan
                            </p>
                        </div>
                        <div className="footer__contact--phone">
                            <i class="fa fa-phone footer__icone" ></i>
                            <p>06.63.32.38.36</p>
                        </div>
                        <div className="footer__contact--mail">
                            <i class="fa fa-envelope footer__icone"></i>
                            <p>
                                <Link href="mailto:nico.riot@free.fr" className="footer__link">
                                    nico.riot@free.fr
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-xl-4 ">

                    <div className="footer__iconeReseau d-flex ">
                    <Link to='/' className="footer__link"><i className="fab fa-linkedin-in fa-3x"></i></Link>
					<Link to='/' className="footer__link"><i class="fab fa-github fa-3x"></i></Link>
                    </div>

                    <p className="footer__copyright">
                        N'hesitez pas a me <Link to='/contact' className="footer__link"> contacter .</Link>
                        Copyright &copy; by Riot Nicolas 2020.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
