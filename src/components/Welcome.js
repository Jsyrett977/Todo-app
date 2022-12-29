import { useNavigate } from "react-router-dom"
const Welcome = () => {
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }
    const navigateToRegister = () => {
        navigate('/register')
    }
    return (
        <div id="welcome">
        <h3>Welcome to Task Traker!</h3>
        <p>Please either login or register to continue</p>
        <button onClick={navigateToLogin}>Login</button>
        <button onClick={navigateToRegister}>Register</button>
        </div>
    )
}

export default Welcome