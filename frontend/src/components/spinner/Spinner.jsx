import React from "react";
import './spinner.style.scss'

const Spinner = ({ message }) => {
    return (
        <div className="loader-container">
            <div className="loader" />
            <span className="loading-text">
                {message ? message : "Loading..."}
            </span>
        </div>
    );
};

export default Spinner;
