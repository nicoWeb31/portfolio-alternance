import React, { useState } from "react";
import "./buttonNav.style.scss";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const ButtonNav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
                checked={toggle}
                onClick={toggleButton}
            />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span class="navigation__icon" aria-hidden="true">
                    &nbsp;
                </span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link
                            to="/#hautPageHome "
                            className="navigation__link"
                            onClick={() => setToggle(false)}
                        >
                            {" "}
                            Accueil
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link
                            to="/projet#hautProjet"
                            className="navigation__link"
                            onClick={() => setToggle(false)}
                        >
                            {" "}
                            Projet-Compétence
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link
                            to="/contact#hautPageContact"
                            className="navigation__link"
                            onClick={() => setToggle(false)}
                        >
                            {" "}
                            Contact
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link
                            to="/about#hautPageAbout"
                            className="navigation__link"
                            onClick={() => setToggle(false)}
                        >
                            {" "}
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ButtonNav;
