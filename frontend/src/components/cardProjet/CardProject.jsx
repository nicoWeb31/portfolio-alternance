import React from "react";
import "./card.projet.style.scss";
import Tilt from "../VanillaTilt";


const CardProject = ({ data }) => {
    const options = {
        speed: 400,
        max: 25,
        glare: true,
    };

    return (
        <Tilt options={options} className="cardProject">
            <div className="content">
                <h2 className="card-title">{data.title}</h2>
                <img src={data.image} alt="code" />
                <p>{data.description}</p>
                <hr/>
                <h3>Stack Technique</h3>
                <p>{data.stack}</p>
                <a href={data.link}>Voir le site</a>
            </div>
        </Tilt>
    );
};

export default CardProject;
