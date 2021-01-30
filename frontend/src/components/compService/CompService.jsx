import React, { useState, useEffect } from "react";
import "./compService.style.scss";
import { ExternalLink } from "react-external-link";
import app from "../../img/contact.jpg";
import net from "../../img/service/net.jpg";
import react from '../../img/react.jpeg'
import GitHubApi from "../gitHubApi/GitHubApi";
import node from '../../img/nodejs-520.jpeg'
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
        <div className="servCom" id="hautPageProjet">
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
                                    Conception et création du site de A à Z.
                                </li>
                                <li>
                                    Design du site, maquettage, logo, wireframe...
                                </li>
                                <li>Mise en production, maintenance</li>
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
                            <li>Framework : Symfony 4, Bootstrap 4, react </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Ce projet a été réalisé dans le cadre de ma formation de
                    concepteur/développeur web. Réalisé entièrement en
                    autonomie, il a servi de support à mon mémoire de fin
                    d'études.
                </p>
                <ExternalLink
                    href="https://vtt-trail-trek-en-coeur-de-garonne.fr/"
                    target="_blank"
                    className="href-site"
                >
                    <button className="btn-site"> voir le site</button>
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
                                Conception d'un site e-commerce.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Stack technique :
                        </h3>
                        <ul>
                            <li>Html5, sass</li>
                            <li>Node, mongodb</li>
                            <li>react, hook, redux, stripe</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Ce projet a été réalisé dans le cadre d'un projet Udemy en totale autonomie lors de ma formation autodidacte.
                </p>
                <ExternalLink
                    href="https://crwn-live-ecom-course.herokuapp.com"
                    target="_blank"
                    className="href-site"
                >
                    <button className="btn-site"> voir le site</button>
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
                                Application de recherche d'utilisateurs sur
                                Github.
                            </p>
                            <ul className="list">
                                <li>
                                    Conception et création de l'appli de A à Z.
                                </li>
                                <li>
                                    Design du site, maquettage, logo, wireframe...
                                </li>
                                <li>
                                    Mise en production sur Heroku, maintenance.
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
                    Ce projet a été réalisé dans le but de renforcer mes
                    connaissances sur react et de travailler sur une api
                </p>
                <ExternalLink
                    href="https://githubsearchnico31.netlify.app/"
                    target="_blank"
                    className="href-site"
                >
                    <button className="btn-site"> voir le site</button>
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
                                    Conception et création du site de A à Z.
                                </li>
                                <li>
                                    Design du site, maquettage, logo, wireframe...
                                </li>
                                <li>Mise en production, maintenance </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Stack technique :
                        </h3>
                        <ul>
                            <li>Html5, sass</li>
                            <li>Node, mongodb, express</li>
                            <li>react, redux, hook</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>Vous êtes ici !</p>
            </div>

            {/* ___________________________________________________________________________________________________________ */}

            <div className="service service--comp competence">
                <h2 className="heading-tertiary u-margin-bottom-small competenceTitle">
                    Competence
                </h2>
                <div className="row">
                    <div className="col-md-6 col-12 front">
                        <CardCompetence title='Front-end' img={react}>
                            <ul>
                                <li>Html5,CSS3,Sass</li>
                                <li>React,redux,hook,ex...</li>
                                <li>Bootstrap</li>
                            </ul>

                        </CardCompetence>
                    </div>

                    <div className="col-md-6 col-12 back">
                    <CardCompetence img={node} title='Back-end' >
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
