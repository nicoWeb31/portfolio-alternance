import React from "react";
import './card.comp.style.scss'

const CardCompetence = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.title} />
            <div className="card-body">
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
};

export default CardCompetence;
