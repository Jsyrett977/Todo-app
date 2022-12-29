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
        <h3>Welcome to Task Tracker!</h3>
        <p>Please login or register to continue</p>
        <div id="button_container">
        <button id='nav_login' onClick={navigateToLogin}>Login</button>
        <button id='nav_register' onClick={navigateToRegister}>Register</button>
        </div>
        </div>
    )
}

export default Welcome