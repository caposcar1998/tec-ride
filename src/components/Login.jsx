import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function login(){
        localStorage.setItem('user', username)
        localStorage.setItem('type', "rider")
        location.reload()
    }

    return(
        <div className="containerLogin">
            <h1>Login</h1>
            <div className="login-wrapper">
                <form>
                    <label>
                        <p>Username</p>
                        <input onChange={e => setUsername(e.target.value)} type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button onClick={login} type="submit">Submit</button>
                    </div>
                </form>
                <p>
                    Doesn't have an account? <Link to="/signup"><a className="btn">Sign Up</a></Link>
                </p>
            </div>
        </div>
    )
}

export default Login