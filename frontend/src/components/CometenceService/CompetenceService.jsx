import React from "react";
import "./Competence.style.scss";

const CompetenceService = () => {
    return (
        <div className="competence">
            <div className="u-center-text">
                <h3 className="heading-secondary">Service / Competence</h3>
            </div>

            <div className="row">
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Conception
                            </h3>
                            <p>Conception d'application web et web mobile.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Développement de site web.
                            </h3>
                            <p>
                                Développement, intégration graphique de site
                                internet. Base de données sql et nosql(moongodb)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Disign
                            </h3>
                            <p>
                                Création de wirefram, travail sur charte
                                graphique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Un brin devops
                            </h3>
                            <p>
                                Je suis assez à l'aise avec les lignes de
                                commande, bonne expérience sur Linux, git, et un
                                peu docker.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetenceService;
