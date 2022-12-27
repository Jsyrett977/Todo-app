import { useNavigate } from "react-router-dom"

const Logout = ({setToken}) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        setToken("")
        localStorage.removeItem('token')
        navigate("/")
    }
    return (
        <button id="logout_button" onClick={handleLogout}>
            Logout
        </button>
    )
}
export default Logout;