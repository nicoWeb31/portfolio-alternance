import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './btnPrimary.style.scss'

const BtnPrimary = ({children, linkTo}) => {
    return (
        <Link to={linkTo} className="btn btn-white btn-animated">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        {" "}
        {children}
    </Link>
    )
}

export default BtnPrimary
