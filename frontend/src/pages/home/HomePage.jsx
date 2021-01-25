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
                                Bonjour, je m'appelle riot nicolas, je suis en reconvertion professionnel depuis 3 ans.Aprés un bilan de compétence je me suis lancer dans une licence en distentile de develloper concepteur d'application web.
                                Aprés l'aprentissage des base du web (html5 css3) et l'apprentissage du php (+poo), j'ai realiser mon premier gros projet sous symfony4, projet qui m'a servit de support a la soutenance de ma lience.
                                Depuis, je monte en compétence sur React et Node, Javascript étant un langage que j'adore utiliser, et tellement puissant 🙂 .
                                
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
                                Pourquoi l'alternace ? pourquoi l'ux?
                            </h3>
                            <p>
                                Apres cette expérience de la formation en distanciel, et l'obtention de ma licence. Pourquoi as continuer.Ayant survoler l'ux design et voulant vraiment en aprendre Plus
                                

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
