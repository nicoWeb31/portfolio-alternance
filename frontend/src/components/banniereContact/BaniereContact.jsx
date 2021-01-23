import React from "react";
import { Link } from "react-router-dom";
import "./banniercontact.scss";

const BaniereContact = () => {
    return (
        <div className="homeBanniere">
            <div className="u-center-text">
                <h3 className="homeBanniere__heading ">
                    Demarrer un nouveau projet ?
                </h3>
            <Link className="btn btn-white btn-animated"> Me Contacter !</Link>
            </div>
        </div>
    );
};

export default BaniereContact;
