import React from "react";
import "./compService.style.scss";
import disign from "../../img/service/ui.jpg";
import web from "../../img/service/web.jpg";
import app from "../../img/service/app.jpg";
import net from "../../img/service/net.jpg";
import mern from "../../img/service/mern.jpg";

const CompService = () => {
    return (
        <div className="servCom">
            <div className="u-center-text">
                <h3 className="heading-secondary ">Service / Competence</h3>
            </div>

            <div className="service ">
                <figure className="service__shape">
                    <img src={disign} alt="disign" className="service__img" />
                </figure>
                <div className="service__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Conception - disign
                    </h3>
                    <p>Conception de votre site internet :</p>
                    <ul>
                        <li>Creation et optimisation de la base de données.</li>
                        <li>Disign du site,maquetage,logo, wirefram...</li>
                        <li>cahier des charges.</li>
                    </ul>
                </div>
            </div>

            <div className="service ">
                <figure className="service__shape">
                    <img src={web} alt="dev-web" className="service__img" />
                </figure>
                <div className="service__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Developpement application web
                    </h3>
                    <p>
                        Developpement de votre application web en fonctoin du
                        cahier des charges.
                    </p>
                    <ul>
                        <li>Stack modern (node,express,react,mongodb)</li>
                        <li>Htm5,Css3,javascript ECMAScript 6 </li>
                        <li>composant metier.</li>
                        <li>Responsive disigne</li>
                    </ul>
                </div>
            </div>

            <div className="service ">
                <figure className="service__shape">
                    <img src={app} alt="dev-web" className="service__img" />
                </figure>
                <div className="service__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Developpement application web
                    </h3>
                    <p>Developpement d'application mobile en react native.</p>
                    <ul>
                        <li>Conception</li>
                        <li>Developpement modern avec React Native.</li>
                    </ul>
                </div>
            </div>

            <div className="service ">
                <figure className="service__shape">
                    <img src={net} alt="dev-web" className="service__img" />
                </figure>
                <div className="service__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Administration système.
                    </h3>
                    <p>De la mise en production, maintenance.</p>
                    <ul>
                        <li>Mise en production sur serveur dedié.</li>
                        <li>Seo, optimisation du referencement</li>
                        <li>verisioning</li>
                        <li>Maintenance</li>
                    </ul>
                </div>
            </div>

            <div className="service service--comp ">
                <h3 className="heading-tertiary u-margin-bottom-small competenceTitle">
                    Competence
                </h3>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="service__text pt-3">
                            <ul>
                                <li className="liProgress">
                                    {" "}
                                    html5
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    javascript{" "}
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    Css3
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    Node
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    Php
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    React
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    Express{" "}
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                                <li className="liProgress">
                                    {" "}
                                    MongoDB{" "}
                                    <div className="">
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            class="far fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 ">
                        <img
                            src={mern}
                            alt="mern stack"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompService;
