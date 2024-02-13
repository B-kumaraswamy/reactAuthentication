import Cookie from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const changePath = useNavigate()
    const token = Cookie.get('jwt-token')

    if (token !== undefined) {
        return <Navigate to = '/'/>
    }


const onLogIn = async () => {
    const userDetails =  {username: 'rahul', password: 'rahul@2021'};
    const url = 'https://apis.ccbp.in/login';
    const options = {
        method : 'POST', 
        body : JSON.stringify(userDetails)
    }

    const response = await fetch(url, options);
    const res = await response.json();

    if (response.ok === true) {
        const jwtToken = res.jwt_token;
        Cookie.set('jwt-token', jwtToken);
        changePath('/');
              
    }

}

    return (
        <div>
            <h1>Log In</h1>
            <button onClick = {onLogIn}>Login with credentials</button>
        </div>
    )
}

export default Login;