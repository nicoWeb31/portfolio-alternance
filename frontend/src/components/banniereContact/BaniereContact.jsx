import React from "react";
import { Link } from "react-router-dom";
import "./banniercontact.scss";

const BaniereContact = ({ message, btnMessage}) => {
    return (
        <div className="homeBanniere">
            <div className="u-center-text">
                <h3 className="homeBanniere__heading ">
                    {message}
                </h3>
                {
                    btnMessage && <Link to='/contact' className="btn btn-white btn-animated"> {btnMessage}</Link>
                }
            
            </div>
        </div>
    );
};

export default BaniereContact;
