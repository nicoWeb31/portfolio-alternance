import React from "react";
import "./titreSecondary.style.scss";
import { useSpring, animated } from "react-spring";

const TitreSecondary = ({ children }) => {
    const props = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 0 });
            await next({ opacity: 0.5 });
            await next({ opacity: 0.3 });
            await next({ opacity: 1 });
        },
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <animated.div className="u-center-text" style={props}>
            <h2 className="heading-secondary">{children}</h2>
        </animated.div>
    );
};

export default TitreSecondary;
