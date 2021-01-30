import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logoGit from '../../img/gitbb.png';
import logoLink from '../../img/link.png';
import './reseau.style.scss'

const Reseau = () => {


    const styleLogo = {
 

    };


    return (

        <>

            <div className= "container P-2 col-12 col-md-6">
                <h2 className="text-center">Mes réseaux pro : </h2>

                <div className="_boxImg">
                
                <a target="_blank" href="https://www.linkedin.com/in/nicolas-riot"><img src={logoLink} alt="logo" className="imgRe" /></a>
                <a target="_blank" href="https://github.com/nicoWeb31"><img src={logoGit} alt="logo" style={styleLogo} className="imgRe"/></a>

                </div>
            </div>


        </>
    );
}

export default Reseau;