import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"


function SignUp(){


    const [typeUser, setTypeUser] = useState()

    function signUp(){
        localStorage.setItem('user', username)
        localStorage.setItem('type', typeUser)
        location.reload()

    }

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
                    <select onChange={e => setTypeUser(e.target.value)}>
                        <option value="driver">Driver</option>
                        <option value="passenger">Passenger</option>
                    </select>
                    <div>
                        <button onClick={signUp} type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp