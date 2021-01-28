import React, { useState, useEffect } from "react";
import "./compService.style.scss";
import { ExternalLink } from "react-external-link";
import web from "../../img/service/web.jpg";
import app from "../../img/contact.jpg";
import net from "../../img/service/net.jpg";
import mern from "../../img/service/mern.jpg";
import GitHubApi from "../gitHubApi/GitHubApi";

import githubService from "../../service/ApiGithub";
import Spinner from "../spinner/Spinner";
import TitreSecondary from "../titre/TitreSecondary";
import CardCompetence from "../cardCompetence/CardCompetence";

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
            <div className="_titleBox">
                <TitreSecondary>Projet / Competence</TitreSecondary>
            </div>

            {/* ____________________________________________________________________________________________________ */}
            <div className="service vtt">
                <div className="row ">
                    <div className="col-md-2 col-12 _blockImg">
                        <img
                            src="https://aprc.it/api/200x125/http://vtt-trail-trek-en-coeur-de-garonne.fr/"
                            alt="disign"
                            className="service__img"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="service__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Vtt Trail Trek en coeur de garonne
                            </h3>
                            <p>
                                Conception d'un site internet pour une
                                association sportive.
                            </p>
                            <ul>
                                <li>Cahier des charges.</li>
                                <li>
                                    Conception et creation du site de A à Z.
                                </li>
                                <li>
                                    Disign du site,maquetage,logo, wirefram...
                                </li>
                                <li>Mise en production, maintenace</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Stack technique :
                        </h3>
                        <ul>
                            <li>Html5,CSS3</li>
                            <li>PHP, mysql</li>
                            <li>Framwork : Symfony 4, Bootstrap 4, react </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Ce projet a etait realiser dans le cadre de ma formation de
                    concepteur/dévelloppeur web. Réaliser entierement en
                    autonomie, il a sevit de support a mon mémoire de fin
                    d'etude.
                </p>
                <ExternalLink
                    href="https://vtt-trail-trek-en-coeur-de-garonne.fr/"
                    target="_blank"
                    className="href-site"
                >
                    <button className="btn-site"> voir le site !</button>
                </ExternalLink>
            </div>
            {/* _______________________________________________________________________________________________ */}
            <div className="service pro-shop ">
                <div className="row">
                    <div className="col-md-2 col-12 _blockImg">
                        <img
                            src="https://aprc.it/api/200x125/https://crwn-live-ecom-course.herokuapp.com/"
                            alt="disign"
                            className="service__img"
                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="service__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Pro-shop
                            </h3>
                            <p>
                                Conception d'un site e-commerce dans le cadre
                                d'un projet Udemy
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Stack technique :
                        </h3>
                        <ul>
                            <li>Html5,scss</li>
                            <li>Node, mongodb</li>
                            <li>react, hook , redux, stripe</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Ce projet a etait realiser dans le cadre de ma formation de
                    concepteur/dévelloppeur web. Réaliser entierement en
                    autonomie, il a sevit de support a mon mémoire de fin
                    d'etude.
                </p>
                <ExternalLink
                    href="https://crwn-live-ecom-course.herokuapp.com"
                    target="_blank"
                    className="href-site"
                >
                    <button className="btn-site"> voir le site !</button>
                </ExternalLink>
            </div>
            {/* ______________________________________________________________________________________________________ */}
            <div className="service git ">
                <div className="row _row">
                    <div className="col-md-2 col-12 _blockImg">
                        <img src={net} alt="dev-web" className="service__img" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="service__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Search Github
                            </h3>
                            <p>
                                Petite application de recherche utilisateur sur
                                Github.
                            </p>
                            <ul className="list">
                                <li>
                                    Conception et creation du site de A à Z.
                                </li>
                                <li>
                                    Disign du site,maquetage,logo, wirefram...
                                </li>
                                <li>
                                    Mise en production, maintenace, sur heroku
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Stack technique :
                        </h3>
                        <ul>
                            <li>Html5,Css3</li>
                            <li>Node</li>
                            <li>react, api</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Ce projet a etait realiser dans le but de reforcer mais
                    connaissance sur react,et travailler sur un l'api
                </p>
                <ExternalLink
                    href="https://githubsearchnico31.netlify.app/"
                    target="_blank"
                    className="href-site"
                >
                    <button className="btn-site"> voir le site !</button>
                </ExternalLink>
            </div>

            {/* _____________________________________________________________________________________________________ */}

            <div className="service portofolio">
                <div className="row">
                    <div className="col-md-2 col-12 _blockImg">
                        <img src={app} alt="dev-web" className="service__img" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="service__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Mon portfolio
                            </h3>

                            <ul>
                                <li>
                                    Conception et creation du site de A à Z.
                                </li>
                                <li>
                                    Disign du site,maquetage,logo, wirefram...
                                </li>
                                <li>Mise en production, maintenace </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Stack technique :
                        </h3>
                        <ul>
                            <li>Html5,scss</li>
                            <li>Node, mongodb, express</li>
                            <li>react,redux, hook</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>vous êtes ici !</p>
            </div>

            {/* ___________________________________________________________________________________________________________ */}

            <div className="service service--comp competence">
                <h2 className="heading-tertiary u-margin-bottom-small competenceTitle">
                    Competence
                </h2>
                <div className="row">
                    <div className="col-md-6 col-12 front">
                        <CardCompetence title='Front-end' img={web}>
                            <ul>
                                <li>Html5,CSS3,Sass</li>
                                <li>React,redux,hook,ex...</li>
                                <li>Bootstrap</li>
                            </ul>

                        </CardCompetence>
                    </div>

                    <div className="col-md-6 col-12 back">
                    <CardCompetence img={web} title='Back-end' >
                    <ul>
                                <li>Node,PHP</li>
                                <li>express, mongodb</li>
                                <li>SQL,noSQL</li>
                            </ul>

                    </CardCompetence>
                        
                    </div>
                </div>

                <div className="service__text">
                    <h3 className="text-center mt-5">
                        Plus de projet , réalisation :
                    </h3>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <GitHubApi user={user} laoding={loading} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompService;
