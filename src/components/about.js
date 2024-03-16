import Header from "./header";
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

function About() {
    const cookie = Cookies.get('jwt-token');
    if(cookie === undefined){
        return <Navigate to = '/login'/>
    }

    return (
        <div>
            <Header/>
            <h1>About</h1>
        </div>
    )
}

export default About;
