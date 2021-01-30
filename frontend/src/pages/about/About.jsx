import React from "react";
import { Link } from "react-router-dom";
import "./about.style.scss";
import me from "../../img/homeN/me.png";

import TitreSecondary from "../../components/titre/TitreSecondary";

const About = () => {
    return (
        <div className="about" id="hautPageAbout">
            <TitreSecondary>Développeur web Mern Stack</TitreSecondary>
            <div className="rowGrid-about ">
                <div className="g_block-text u-padding-big">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        A l'écoute de toutes propositions !!!
                    </h3>
                    <p className="paragraph">
                        Durant cette phase de reconversion porféssionelle et en periode compliqué , je reste a l'ecoute de toute proposition,
                        c'est avec grand plaisir que je 
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small ">
                        Le plus de l'alternance !
                    </h3>
                    <p className="paragraph ">
                        Pourquoi pas l'alternance ?
                        Pouvoir mettre le pied a l'etrier dans une entrprise, partager avec elle et ce faire accompagner dans la continuité de ma reconversion serai vraiment le top.
                        De plusnJusqu'au 28 février 2021, l'État a mis en place une prime de 5 à 8 000€ pour inciter les employeurs à embaucher les alternants.
                        
                    </p>



                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Pourquoi OpenClassrooms ?
                    </h3>

                    <p className="paragraph ">
                        La reputation d'openClassrooms n'est plus a faire.La pédagogie a base de projet me convient a 100%, rien de mieux que de mettre les deux pied dans le plat!!.<br/>
                        Quelque porjet couver par l'alternance :
                    </p>
                    <ul>
                        <li>Menez une étude utilisateurs</li>
                        <li>nterprétez des données analytiques</li>
                        <li>Améliorez l'ergonomie d'un site internet de vacances</li>
                        <li>Préparez et animez un atelier de co-conception</li>
                        <li>Prototypez une application mobile</li>
                        <li>Définissez une promesse de service</li>
                        <li>Faites évoluer un service existant</li>
                        <li>Créez votre portfolio UX</li>
                    </ul>
                    
                        

                    <Link to="/projet" className="btn-text">
                        <i className="fas fa-arrow-right"></i>
                        plus...
                    </Link>
                </div>
                <div className="g_block-img photoCol">
                    <img src={me} alt="moi" className="_img" />
                </div>
            </div>
        </div>
    );
};

export default About;
