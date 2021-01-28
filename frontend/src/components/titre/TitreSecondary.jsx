import React from 'react';
import './titreSecondary.style.scss';

const TitreSecondary = ({children}) => {
    return (
        <div className="u-center-text">
            <h2 className="heading-secondary">
            {children}
            </h2>

        </div>
    )
}

export default TitreSecondary
