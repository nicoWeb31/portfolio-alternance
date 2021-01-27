import React from 'react';
import "./github.style.scss"



const GitHubApi = ({user,loading}) => {



    const styleAvart = {
        width: '150px'
    }

    const { name, avatar_url, location, bio, blog, login, html_url, public_repos, public_gists, hireable, company, followers, following, repos_url } = user;
    console.log("user",user)

    

    return (


        <div>


            <div className="container p-4 gitBox" >
                <div className="jumbotron __git-content">
                    <h1 className="text-center p-3 mb-5">“Github - Info”</h1>
                    <div className="row">
                    
                        <div className="col-12 col-md-6 ">
                            <img src={avatar_url} alt="avatar...." className="rounded d-block mx-auto" style={styleAvart} />
                            <h3 className="text-center">{name}</h3>
                            <h5 className="text-center">{location}</h5>
                        </div>
                        <div className="co-12 col-md-6">
                            {bio && (
                                <>
                                    <h3 className="text-center">Bio :</h3>
                                    <p className="text-center">{bio}</p>
                                </>
                            )
                            }
                            <a href={html_url} className="btn btn-dark my-1 mx-auto d-block">Visit Github profile</a>
                            <ul>
                                <li className="text-center">
                                    {login && (
                                        <>
                                            <strong>Username :</strong> {login}
                                        </>
                                    )}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="text-center m-5">
                        <div className="badge badge-primary p-3">
                            Followers : {followers}
                        </div>
                        <div className="badge badge-success p-3">
                            Following : {following}
                        </div>
                        <div className="badge badge-light p-3">
                            Public Respos : {public_repos}
                        </div>
                        <div className="badge badge-dark p-3">
                            Public Gists : {public_gists}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default GitHubApi;