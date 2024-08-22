import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        navigate("/welcome")
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value) } placeholder='username'  />
        &nbsp; &nbsp;
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value) } placeholder='password'  />
        <br></br><br></br>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login