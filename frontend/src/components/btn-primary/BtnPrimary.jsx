import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const BtnPrimary = ({children, linkTo}) => {
    return (
        <Link to={linkTo} className="btn btn-white btn-animated">
        {" "}
        {children}
    </Link>
    )
}

export default BtnPrimary
