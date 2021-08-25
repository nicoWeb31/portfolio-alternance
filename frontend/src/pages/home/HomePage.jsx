import React from "react";
import "./homepage.style.scss";
import me from "../../img/homeN/me.png";
import code from "../../img/homeN/code.jpg";

import bgVideo from "../../img/homeN/Laptop.mp4";
import BaniereContact from "../../components/banniereContact/BaniereContact";
import CompetenceService from "../../components/CometenceService/CompetenceService";
import TitreSecondary from "../../components/titre/TitreSecondary";

const HomePage = () => {
    return (
        <>
            <div className="home" id="hautPageHome">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={bgVideo} type="video/mp4" />
                        your Browser is not supported !
                    </video>
                </div>
                <TitreSecondary>
                    {" "}
                    Développeur Web/Web Mobile Mean Stack
                </TitreSecondary>
                <div className="rowGrid">
                    <div className="presentation perso">
                        <figure className="presentation__shape">
                            <img
                                src={me}
                                alt="riot nicolas"
                                className="presentation__img"
                            />
                        </figure>
                        <div className="presentation__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Qui suis-je ?
                            </h3>
                            <p>
                                Bonjour, je m'appelle Nicolas Riot. Je suis en
                                développeur web depuis plus de 2 ans.Je me suis
                                lancé dans une licence en distanciel de
                                développeur-concepteur d'application web. Après
                                l'apprentissage des bases du web (html5, css3)
                                et du php (+poo), j'ai réalisé mon premier
                                projet important sous Symfony4, projet qui m'a
                                servi de support à la soutenance de ma licence.
                                Depuis l'obtention de mon diplôme, je monte en
                                compétence sur Angular 10+  et Nestjs; Javascript étant
                                un langage que j'adore utiliser.
                            </p>
                        </div>
                    </div>

                    <div className="presentation ux">
                        <figure className="presentation__shape">
                            <img
                                src={code}
                                alt="code"
                                className="presentation__img"
                            />
                        </figure>
                        <div className="presentation__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Et ce que je recherche ?
                            </h3>
                            <p>
                                Suite à l'obtention de ma licence et fort de mon expérience en distanciel, je suis prêt et préparer à intégrer un poste de junior en tant que développeur full stack JS.
                                J'ai également la possibilité d'effectuer une alternance avec Openclassrooms, je ne suis fermé à aucune opportunité.
                                Bien au contraire, j'étudie toutes vos propositions. Alors n'hésitez plus à me contacter ! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <BaniereContact
                message=" En savoir plus sur moi ?"
                btnMessage="Me Contacter"
            />
            <CompetenceService />
        </>
    );
};

export default HomePage;
