import React, { useState, useEffect } from "react";
import "./compService.style.scss";
import { ExternalLink } from 'react-external-link';
import web from "../../img/service/web.jpg";
import app from "../../img/service/app.jpg";
import net from "../../img/service/net.jpg";
import mern from "../../img/service/mern.jpg";
import GitHubApi from "../gitHubApi/GitHubApi";

import githubService from "../../service/ApiGithub";
import Spinner from "../spinner/Spinner";


const CompService = () => {
    const [user, setUser] = useState({});
    const [loading, setLading] = useState(false);

    useEffect(() => {
        fetchUser("nicoWeb31");
    }, []);

    const fetchUser = async (name) => {
        setLading(true);
        try {
            await githubService.find(name).then((response) => {
                console.log(response.data);
                setUser(response.data);
            });
        } catch (err) {
            console.log(err.response);
        }
        setLading(false);
    };

    return (
        <div className="servCom">
            <div className="u-center-text">
                <h3 className="heading-secondary ">Projet / Competence</h3>
            </div>


            <div className="service vtt ">
                <div className="row">
                    <div className="col-6">
                <figure className="service__shape">
                    <img src="https://aprc.it/api/200x125/http://vtt-trail-trek-en-coeur-de-garonne.fr/" alt="disign" className="service__img" />
                </figure>
                <div className="service__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Vtt Trail Trek en coeur de garonne
                    </h3>
                    <p>Conception de votre site internet pour une association sportive.</p>
                    <ul>
                        <li>Cahier des charges.</li>
                        <li>Conception et creation du site de A à Z.</li>
                        <li>Disign du site,maquetage,logo, wirefram...</li>
                        <li>Mise en production, maintenace</li>


                    </ul>
                </div>


                    </div>
                    <div className="col-6">
                        <h3 className="heading-tertiary u-margin-bottom-small">Stack technique :</h3>
                        <ul>
                        <li>Html5,CSS3</li>
                        <li>PHP, mysql</li>
                        <li>Framwork : Symfony 4, Bootstrap 4, react </li>
                        


                    </ul>
                    </div>
                </div>
                <hr/>
                <p>Ce projet a etait realiser dans le cadre de ma formation de concepteur/dévelloppeur web. Réaliser entierement en autonomie, il a sevit de support a mon mémoire de fin d'etude.</p>
                <ExternalLink href="https://vtt-trail-trek-en-coeur-de-garonne.fr/" target="_blank" className="href-site">
                    <button className="btn-site" > voir le site !</button>
                </ExternalLink>
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

                <div className="service__text">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <GitHubApi user={user} laoding={loading}/>
                    )}
                </div>

            </div>
        </div>
    );
};

export default CompService;
