import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (

            <header className="header">
                <div className="header__logo-box">
                    <Link to="/">
                        <i className="fas fa-home fa-3x header__logo"></i>
                    </Link>
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">
                            Riot Nicolas
                        </span>
                        <span className="heading-primary--secondary">
                            Création de contenu numérique
                        </span>
                    </h1>

                    <Link to='/service' className="btn btn-white btn-animated">
                        {" "}
                        Mes Services
                    </Link>
                </div>
            </header>

    );
};

export default Header;
