import { Link } from "react-router-dom"

function Login(){
    return(
        <div className="containerLogin">
            <h1>Login</h1>
            <div className="login-wrapper">
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <Link to="/offers"><button type="submit">Submit</button></Link>
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