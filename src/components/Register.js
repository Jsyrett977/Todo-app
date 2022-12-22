import { useState } from 'react';
import { registerUser } from '../api.js/api';
import { useNavigate } from 'react-router-dom';
const Register = ({username, setUsername, password, setPassword}) => {
    let navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    return (
        <form id="register_form" className="forms" onSubmit={(event) => {
            event.preventDefault();
            registerUser(username, password, firstName, lastName)
            navigate('/login')
            setUsername('');
            setPassword('');
            setFirstName('');
            setLastName('');
        }}>
            <input className="text_input" type="text" placeholder='Username' value={username} 
            onChange={(event)=>setUsername(event.target.value)}/>
            <input className="text_input" type="password" minLength='8' placeholder='Password' value={password}
            onChange={(event)=>setPassword(event.target.value)}/>
            <input className="text_input" type="text" placeholder='First Name' value={firstName}
            onChange={(event)=>setFirstName(event.target.value)}/>
            <input className="text_input" type="text" placeholder='Last Name' value={lastName}
            onChange={(event)=>setLastName(event.target.value)}/>
            <button type='submit'>Register</button>
        </form>
    )
}
export default Register;