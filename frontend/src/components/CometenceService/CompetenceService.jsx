import React from "react";
import TitreSecondary from "../titre/TitreSecondary";
import "./Competence.style.scss";

const CompetenceService = () => {
    return (
        <div className="competence grid-container">
            <div className="title">
                <TitreSecondary>Services / Compétences</TitreSecondary>
            </div>

            <div className="competence__card conc">
                <div className="competence__text">
                    <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                        Conception
                    </h3>
                    <p>
                        Conception d'application web et web mobile (uml,merise),
                        intégration.
                    </p>
                </div>
            </div>

            <div className="competence__card des">
                <div className="competence__text">
                    <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                        Design
                    </h3>
                    <p>
                        Création de wireframe, travail sur charte graphique,
                        logo, etc...
                    </p>
                </div>
            </div>

            <div className="competence__card dev">
                <div className="competence__text">
                    <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                        Développement
                    </h3>
                    <p>
                        Développement, intégration graphique de site internet
                        (Html5, Css3, react....). Base de données sql et nosql
                        (moongodb).
                    </p>
                </div>
            </div>

            <div className="competence__card ops">
                <div className="competence__text">
                    <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                        Un brin devops
                    </h3>
                    <p>
                        Je suis à l'aise avec les lignes de commandes, bonne
                        expérience sur Linux, git et des notions de docker.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompetenceService;
