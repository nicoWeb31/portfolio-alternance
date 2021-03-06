import React from "react";
import "./header.style.scss";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import BtnPrimary from "../btn-primary/BtnPrimary";
// import { useTrail, animated } from "react-spring";

const Header = () => {
    // const fast = { tension: 1200, friction: 40 }
    // const slow = { mass: 10, tension: 200, friction: 50 }
    // const trans = (x, y) =>
    //     `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
    // const [trail, set] = useTrail(3, () => ({
    //     xy: [0, 0],
    //     config: (i) => (i === 0 ? fast : slow),
    // }));

    return (
        <header className="header ">
            {/* <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur
                        in="SourceGraphic"
                        result="blur"
                        stdDeviation="15"
                    />
                    <feColorMatrix
                        in="blur"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
                    />
                </filter>
            </svg>
            <div
                className="hooks-main"
                onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}
            >
                {trail.map((props, index) => (
                    <animated.div
                        key={index}
                        style={{ transform: props.xy.interpolate(trans) }}
                    />
                ))}
            </div> */}
            <div className="header__logo-box">
                <Link to="/#hautPageHome">
                    <i className="fas fa-home fa-3x header__logo"></i>
                </Link>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Riot Nicolas</span>
                    <span className="heading-primary--secondary">
                        Développeur - concepteur Web/front-react
                    </span>
                </h1>
                <BtnPrimary linkTo="/projet#hautPageProjet">
                    Réalisation
                </BtnPrimary>
            </div>
        </header>
    );
};

export default Header;
