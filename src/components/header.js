import {Link} from 'react-router-dom'
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Header() {
    const changePath = useNavigate()

    const onLogOut = () => {
        Cookie.remove('jwt-token')
        changePath('/login')



    }






    return (
        <div>
            <label>
                <Link to = '/'>Home</Link>
            </label> 
            <label> </label>
            <label>
                <Link to = '/about'>About</Link>
            </label>
            <label> </label>
            <button onClick = {onLogOut}>Log Out</button>








        </div>
    )
}

export default Header