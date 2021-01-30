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
                        A l'écoute de toutes propositions !
                    </h3>
                    <p className="paragraph">
                        Durant cette phase de reconversion professionelle et en cette période compliquée pour tous, je reste à l'écoute de toutes vos propositions.
                        C'est avec grand plaisir que je mettrai toutes mes compétences, ma dévotion et mon énergie à vos services. 
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small ">
                        Les plus de l'alternance ?
                    </h3>
                    <p className="paragraph ">
                        Pourquoi me tourner vers l'alternance ?
                        Pour pouvoir mettre un pied à l'étrier au monde du travail, pour partager et échanger avec l'entreprise qui m'accueillera et me faire accompagner dans la continuité de ma formation.
                        Et pour l'entreprise, jusqu'au 28 février 2021, l'État a mis en place une prime de 5000 à 8 000€ pour inciter les employeurs à embaucher des alternants.
                        
                    </p>



                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Pourquoi OpenClassrooms ?
                    </h3>

                    <p className="paragraph ">
                        La réputation d'Openclassrooms n'est plus à faire. La pédagogie est basée sur la conception et la création de projets concrets avec un accompagnement personnalisé, ce qui me convient totalement. Quoi de mieux pour plonger à corps perdu dans la réalité du métier ?<br/>
                        Quelques projets couverts par l'alternance :
                    </p>
                    <ul>
                        <li>Menez une étude utilisateurs</li>
                        <li>Interprétez des données analytiques</li>
                        <li>Améliorez l'ergonomie d'un site internet de vacances</li>
                        <li>Préparez et animez un atelier de co-conception</li>
                        <li>Prototypez une application mobile</li>
                        <li>Définissez une promesse de service</li>
                        <li>Faites évoluer un service existant</li>
                        <li>Créez votre portfolio UX</li>
                    </ul>
                    
                        

                    <Link to="/projet" className="btn-text">
                        <i className="fas fa-arrow-right"></i>
                          Pour plus de projets, c'est par ici...
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
