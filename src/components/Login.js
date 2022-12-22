import { loginUser } from "../api.js/api";
import { useNavigate } from "react-router-dom";
const Login = ({username, setUsername, password, setPassword}) => {
    let navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            const data = await loginUser(username, password);
            const token = data.user.token
            localStorage.setItem("token", token)
            navigate('/')
            setUsername('');
            setPassword('');
        }catch(error){
            throw(error)
        }
    }
    return (
        <div id="form_container">
            <h3>Please Enter your Username and Password</h3>
            <form className="forms" onSubmit={handleLogin}>
                <input className="text_input" type="text" placeholder='Username' value={username} 
                    onChange={(event)=>setUsername(event.target.value)}/>
                <input className="text_input" type="password" minLength='8' placeholder='Password' value={password}
                    onChange={(event)=>setPassword(event.target.value)}/>
                    <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;