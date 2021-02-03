import React from "react";
import "./card.projet.style.scss";
import Tilt from "../VanillaTilt";
import code from "../../img/homeN/code.jpg";

const CardProject = () => {
    const options = {
        speed: 400,
        max: 25,
        glare: false,
    };

    return (
        <Tilt options={options} className="cardProject">

            <div className="content">
                <h2 className="card-title">Vtt En coeur de garonne</h2>
                <img
                                src={code}
                                alt="code"
                                
                            />
                <p>
                    Conception d'un site internet pour une association sportive.
                    Conception et création du site de A à Z. Design du site,
                    maquettage, logo, wireframe... Mise en production,
                    maintenance
                </p>
                <h3>Stack Technique</h3>
                <p>Html5,CSS3,PHP, mysql,Symfony 4, Bootstrap 4, react</p>
                <a href="">Voir le site</a>
            </div>
        </Tilt>
    );
};

export default CardProject;
