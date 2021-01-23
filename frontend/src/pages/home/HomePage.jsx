import React from "react";
import "./homepage.style.scss";
import me from "../../img/homeN/me.jpg";
import code from "../../img/homeN/code.jpg";

import bgVideo from "../../img/homeN/Laptop.mp4";
import BaniereContact from "../../components/banniereContact/BaniereContact";
import CompetenceService from "../../components/CometenceService/CompetenceService";


const HomePage = () => {
    return (
        <>
        <div className="home">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4" />
                    your Browser is not supported !
                </video>
            </div>
            <div className="u-center-text ">
                <h2 className="heading-secondary ">
                    Developper Web/Web Mobile Mern Stack
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="presentation ">
                        <figure className="presentation__shape">
                            <img
                                src={me}
                                alt="riot nicolas"
                                className="presentation__img"
                            />
                        </figure>
                        <div className="presentation__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Qui suis-je ?
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis alias, quos quis
                                soluta dolorem nesciunt fugiat aut rem
                                voluptatibus exercitationem eaque sapiente vitae
                                aliquid, ad officiis accusantium autem
                                consequuntur animi! Omnis voluptatum vero,
                                sapiente est libero deleniti eaque quos
                                reprehenderit nostrum deserunt quaerat ducimus
                                minima recusandae nesciunt assumenda corporis
                                rerum laudantium ea quo consequuntur error earum
                                quae optio. Sed, dolorem? Possimus, cum illum
                                vel eum fugit molestiae autem eaque commodi
                                nulla culpa rerum vitae ducimus amet veniam non
                                earum? Perferendis eum quaerat error porro
                                libero sunt illum architecto molestias! Laborum!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                <div className="presentation ">
                        <figure className="presentation__shape">
                            <img
                                src={code}
                                alt="code"
                                className="presentation__img"
                            />
                        </figure>
                        <div className="presentation__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Ce que je propose ?
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis alias, quos quis
                                soluta dolorem nesciunt fugiat aut rem
                                voluptatibus exercitationem eaque sapiente vitae
                                aliquid, ad officiis accusantium autem
                                consequuntur animi! Omnis voluptatum vero,
                                sapiente est libero deleniti eaque quos
                                reprehenderit nostrum deserunt quaerat ducimus
                                minima recusandae nesciunt assumenda corporis
                                rerum laudantium ea quo consequuntur error earum
                                quae optio. Sed, dolorem? Possimus, cum illum
                                vel eum fugit molestiae autem eaque commodi
                                nulla culpa rerum vitae ducimus amet veniam non
                                earum? Perferendis eum quaerat error porro
                                libero sunt illum architecto molestias! Laborum!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BaniereContact/>
        <CompetenceService/>

        </>
    );
};

export default HomePage;
