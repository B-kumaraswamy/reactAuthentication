import Header from "./header";
import Cookies from 'js-cookie';
import {  Navigate } from "react-router-dom";

function Home() {

    const cookie = Cookies.get('jwt-token');
    if(cookie === undefined){
        return <Navigate to = 'https://b-kumaraswamy.github.io/reactAuthentication/login'/>
    }
    return (
        <div>
            <Header/>
            <h1>Home</h1>
        </div>
    )
}
//write the logic
export default Home
