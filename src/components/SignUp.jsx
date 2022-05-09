import { Link } from "react-router-dom"

function SignUp(){
    return(
        <div className="containerSignUp">
            <h1>Sign Up</h1>
            <div className="signUp-wrapper">
                <form>
                    <label>
                        <p>Email</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <Link to="/login"><button type="submit">Sign Up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp