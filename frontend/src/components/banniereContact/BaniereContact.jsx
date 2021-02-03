import React from "react";

import BtnPrimary from "../btn-primary/BtnPrimary";
import "./banniercontact.scss";

const BaniereContact = ({ message, btnMessage}) => {
    return (
        <div className="homeBanniere">
            <div className="u-center-text">
                <h3 className="homeBanniere__heading ">
                    {message}
                </h3>
                {
                    btnMessage && <BtnPrimary linkTo="/contact#hautPageContact"> {btnMessage}</BtnPrimary>
                    
                }
            
            </div>
        </div>
    );
};

export default BaniereContact;
