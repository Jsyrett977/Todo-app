import { useState } from 'react';
import { registerUser } from '../api.js/api';
const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    return (
        <form id="register_form" className="forms" onSubmit={(event) => {
            event.preventDefault();
            registerUser(username, password, firstName, lastName)
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