import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./compService.style.scss";
import react from "../../img/react.jpeg";
import GitHubApi from "../gitHubApi/GitHubApi";
import node from "../../img/nodejs-520.jpeg";
import githubService from "../../service/ApiGithub";
import Spinner from "../spinner/Spinner";
import TitreSecondary from "../titre/TitreSecondary";
import CardCompetence from "../cardCompetence/CardCompetence";
import { listProjetcs } from "../../redux/actions/projetAction";

import CardProject from "../cardProjet/CardProject";

const CompService = () => {
    const dispatch = useDispatch();
    const { loading: loadingProjet, projets } = useSelector(
        (state) => state.projets
    );
    // console.log("🚀 ~ file: CompService.jsx ~ line 20 ~ CompService ~ projects", projects)
    console.log(
        "🚀 ~ file: CompService.jsx ~ line 29 ~ CompService ~ project",
        projets
    );
    const { project } = projets;

    const [user, setUser] = useState({});
    const [loading, setLading] = useState(false);

    useEffect(() => {
        fetchUser("nicoWeb31");
        dispatch(listProjetcs());
    }, []);



    const fetchUser = async (name) => {
        setLading(true);
        try {
            await githubService.find(name).then((response) => {
                console.log(response.data);
                setUser(response.data);
            });
        } catch (err) {
            console.log(err.response);
        }
        setLading(false);
    };

    return (
        <div className="servCom" id="hautPageProjet">
            <div className="_titleBox">
                <TitreSecondary>Projet / Competence</TitreSecondary>
            {loadingProjet ? <Spinner /> : "" }
            </div>


                <div className="cardContainer">
                    {project &&
                        project.map((p) => {
                            return <CardProject data={p} index={p._id} />;
                        })}
                </div>

            <div className="service service--comp competence">
                <h2 className="heading-tertiary u-margin-bottom-small competenceTitle">
                    Competence
                </h2>
                <div className="row">
                    <div className="col-md-6 col-12 front">
                        <CardCompetence title="Front-end" img={react}>
                            <ul>
                                <li>Html5,CSS3,Sass</li>
                                <li>React,redux,hook,ex...</li>
                                <li>Bootstrap</li>
                            </ul>
                        </CardCompetence>
                    </div>

                    <div className="col-md-6 col-12 back">
                        <CardCompetence img={node} title="Back-end">
                            <ul>
                                <li>Node,PHP</li>
                                <li>express, mongodb</li>
                                <li>SQL,noSQL</li>
                            </ul>
                        </CardCompetence>
                    </div>
                </div>

                <div className="service__text">
                    <h3 className="text-center mt-5">
                        Plus de projet , réalisation :
                    </h3>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <GitHubApi user={user} laoding={loading} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompService;
