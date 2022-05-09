import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function login(){
        localStorage.setItem('user', username)
        localStorage.setItem('type', "driver")
        location.reload()
    }

    return(
        <div className="mx-4 mt-5 " id="containerLogin">
            <h1 className="text-center mb-3" >Login</h1>
            <div className="border border-3 border-dark">
                <form className="ml-2 mr-3 mt-3 d-flex flex-column justify-content-center align-items-center mb-2 mt-4">
                    <label>
                        <p className="text-left d-inline-flex mb-2 mt-4">Username</p>
                        <input onChange={e => setUsername(e.target.value)} type="text" className="form-control mt-2"/>
                    </label>
                    <label>
                        <p className="text-left d-inline-flex mb-2 mt-4">Password</p>
                        <input type="password" className="form-control"/>
                    </label>
                    <div>
                        <button onClick={login} type="submit" className="btn btn-success mt-4">Login</button>
                    </div>
                </form>
                <p className="d-flex justify-content-center align-items-center mt-2">
                    Doesn't have an account? <Link to="/signup"><a className="btn text-primary">Sign Up</a></Link>
                </p>
            </div>
        </div>
    )
}

export default Login