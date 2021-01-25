import React from "react";
import "./homepage.style.scss";
import me from "../../img/homeN/me.png";
import code from "../../img/homeN/code.jpg";

import bgVideo from "../../img/homeN/Laptop.mp4";
import BaniereContact from "../../components/banniereContact/BaniereContact";
import CompetenceService from "../../components/CometenceService/CompetenceService";


const HomePage = () => {
    return (
        <>
        <div className="home">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4" />
                    your Browser is not supported !
                </video>
            </div>
            <div className="u-center-text ">
                <h2 className="heading-secondary ">
                    Developper Web/Web Mobile Mern Stack
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="presentation ">
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
                                Bonjour, je m'appelle Nicolas Riot. Je suis en reconvertion professionnelle depuis maintenant 3 ans. Suite à un bilan de compétences je me suis lancé dans une licence en distanciel de développeur-concepteur d'application web.
                                Après l'apprentissage des bases du web (html5 css3) et du php (+poo), j'ai réalisé mon premier projet important sous Symfony4, projet qui m'a servit de support à la soutenance de ma licence.
                                Depuis l'obtention de mon diplôme, je monte en compétence sur React et Node; Javascript étant un langage que j'adore utiliser et que je trouve tellement puissant 🙂.
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                <div className="presentation ">
                        <figure className="presentation__shape">
                            <img
                                src={code}
                                alt="code"
                                className="presentation__img"
                            />
                        </figure>
                        <div className="presentation__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Pourquoi l'UX ? Pourquoi en alternance ?
                            </h3>
                            <p>
                                Suite à l'obtention de ma licence et fort de mon expérience de travail en distanciel, je me suis dis : Pourquoi ne pas continuer sur ma lancée ? Ayant survolé l'UX design et voulant vraiment en apprendre plus sur ce domaine, j'ai décidé de postuler chez OpenClassroom pour le master d'UX designer.
                                Aprés réflexion et souhaitant par la même occasion engranger de l'expérience au sein d'une entreprise, j'ai fait le choix de l'alternance. Au rythme proposé par OpenClassroom de 4 jours en entreprise et 1 jour en formation en ligne, cela permet de maintenir un projet sur la continuité au fil des semaines, sans interruptions.
                                De plus cette formation est composée à 100% par des projets concrets, rien de plus formateur !


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BaniereContact message=" En savoir plus sur moi ?" btnMessage="Me Contacter !"/>
        <CompetenceService/>

        </>
    );
};

export default HomePage;
