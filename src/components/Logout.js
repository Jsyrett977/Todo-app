import { useNavigate } from "react-router-dom"

const Logout = ({setToken, setMe}) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        setToken("")
        localStorage.removeItem('token')
        setMe({})
        navigate("/")
    }
    return (
        <button id="logout_button" onClick={handleLogout}>
            Logout
        </button>
    )
}
export default Logout;