import React from "react";
import "./header.style.scss";
import { HashLink as Link } from "react-router-hash-link";
import BtnPrimary from "../btn-primary/BtnPrimary";


const Header = () => {


    return (
        <header className="header ">

            <div className="header__logo-box">
                <Link to="/#hautPageHome">
                    <i className="fas fa-home fa-3x header__logo"></i>
                </Link>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Riot Nicolas</span>
                    <span className="heading-primary--secondary">
                        Développeur - concepteur Web/front-react
                    </span>
                </h1>
                <BtnPrimary linkTo="/projet#hautPageProjet">
                    Réalisation
                </BtnPrimary>
            </div>
        </header>
    );
};

export default Header;
