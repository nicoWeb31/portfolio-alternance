import React from 'react';
import './alert.style.scss';
const Alert = ({variant, children}) => {

    console.log(children)
    return (
        <div className={`${variant} alert`} >
            {children}
        </div>
    )
}

export default Alert
