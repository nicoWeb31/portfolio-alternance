import React from "react";
import { Link } from "react-router-dom";
import "./about.style.scss";
import seo from "../../img/about/search-engine-optimization-586422_1920.jpg";
import hand from "../../img/about/hand-3108158_1920.jpg";
import app from "../../img/about/apps-2558373_1920.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Développeur web Mern Stack</h2>
            </div>
            <div className="row ">
                <div className="col-md-6 col-12 u-padding-big">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Pour des projets clés en main!
                    </h3>
                    <p className="paragraph">
                        En résumé, votre page À Propos accueillera l’histoire de
                        la création de votre marque, et elle présentera les
                        points forts de votre entreprise. Plus important encore,
                        elle servira de page de vente apportant des réponses à
                        la question la plus importante que se posent les
                        nouveaux clients (outre la question « Pourquoi
                        devrais-je acheter les produits de cette marque ? »), à
                        savoir : Pourquoi devrais-je faire confiance à cette
                        marque ou à ce marchand ?
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small ">
                        Pour des Missions Pro !
                    </h3>
                    <p className="paragraph ">
                        En résumé, votre page À Propos accueillera l’histoire de
                        la création de votre marque, et elle présentera les
                        points forts de votre entreprise. Plus important encore,
                        elle servira de page de vente apportant des réponses à
                        la question la plus importante que se posent les
                        nouveaux clients (outre la question « Pourquoi
                        devrais-je acheter les produits de cette marque ? »), à
                        savoir : Pourquoi devrais-je faire confiance à cette
                        marque ou à ce marchand ?
                    </p>

                    <Link to="/sevice" className="btn-text">
                        <i className="fas fa-arrow-right"></i>
                        plus...
                    </Link>
                </div>
                <div className="col-md-6 col-12 u-padding-horizontal-big photoCol">
                    <div className="composition">
                        <img
                            src={seo}
                            alt="seo"
                            className="composition__photo composition__photo--p1"
                        />
                        <img
                            src={hand}
                            alt="hand"
                            className="composition__photo composition__photo--p2"
                        />
                        <img
                            src={app}
                            alt="app"
                            className="composition__photo composition__photo--p3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
