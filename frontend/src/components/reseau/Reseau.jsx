import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logoGit from '../../img/gitbb.png';
import logoLink from '../../img/link.png'

const Reseau = () => {


    const styleLogo = {
        width: '180px',
        height: '180px',

    };


    return (

        <>

            <div className= "container P-2 col-12 col-md-6">
                <h2 className="text-center">Mes réseaux pro : </h2>

                <div className="d-flex row justify-content-around m-4 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/nicolas-riot"><img src={logoLink} alt="logo" style={styleLogo} /></a>
                <a target="_blank" href="https://github.com/nicoWeb31"><img src={logoGit} alt="logo" style={styleLogo} /></a>

                </div>
            </div>


        </>
    );
}

export default Reseau;