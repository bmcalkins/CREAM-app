import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import './login.css'

function Register({ setData, history }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitClick = (e) => {
        e.preventDefault()
        console.log("You pressed login")
        let opts = {
            'username': username,
            'password': password
        }
        console.log(opts)
        fetch('/api/register', {
            method: 'post',
            body: JSON.stringify(opts)
        }).then(r => r.json())
            .then(token => {
                if (token.access_token) {
                    localStorage.setItem('bearer', token.access_token)
                    setData({loggedIn:true})
                    history.push('/dashboard')
                }
                else {
                    setData({loggedIn:false})
                    console.log("Please type in correct username/password")
                }
            })
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div id='login-container'>
            <h2>C<span>REAM</span></h2>
            <form action="#">
                <div>
                    <input type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                        value={username}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>
                <button onClick={onSubmitClick} type="submit">
                    Register Now
          </button>
            </form>

        </div>
    )
}


export default withRouter(Register)