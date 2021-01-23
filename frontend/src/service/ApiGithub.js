import axios from "axios";


const GIT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GIT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;


function find(name){
    
    return axios.get(`https://api.github.com/users/${name}?client_id=${GIT_ID}
    &client_secret=${GIT_SECRET}`)

}


// eslint-disable-next-line import/no-anonymous-default-export
export default {find}