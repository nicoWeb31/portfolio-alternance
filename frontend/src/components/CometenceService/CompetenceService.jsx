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
                                Conception - disign
                            </h3>
                            <p>
                                conception et disign d'application web et web
                                mobile, 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Devellopement site web.
                            </h3>
                            <p>
                                devellopement , creation de site internet,
                                vitrine, e-commerce ou toute sorte d'application
                                web.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Appication web mobile
                            </h3>
                            <p>devellopement d'application mobile</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  col-12">
                    <div className="competence__card">
                        <div className="competence__text">
                            <h3 className="heading-tertiary u-margin-bottom-small headingBox">
                                Operation systemes
                            </h3>
                            <p>
                                Mise en production de votre projet,maintenance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetenceService;
