import { loginUser } from "../api.js/api";
import { useNavigate } from "react-router-dom";
const Login = ({username, setUsername, password, setPassword, setToken}) => {
    let navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            const data = await loginUser(username, password);
            const token = data.user.token
            localStorage.setItem("token", token)
            setToken(token)
            navigate('/tasks')
            setUsername('');
            setPassword('');
        }catch(error){
            throw(error)
        }
    }
    return (
        <form className="form_container" onSubmit={handleLogin}>
            <h3>Please enter your username and password or <a href="/register">register </a> an account</h3>
            
                <input className="text_input" type="text" placeholder='Username' value={username} 
                    onChange={(event)=>setUsername(event.target.value)}/>
                <input className="text_input" type="password" minLength='8' placeholder='Password' value={password}
                    onChange={(event)=>setPassword(event.target.value)}/>
                    <button className="submit_button" type="submit">Login</button>
            </form>
        
    )
}
export default Login;