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
        <div className="mx-4 mt-5" id="containerSignUp">
            <h1 className="text-center mb-3" >Sign Up</h1>
            <div className="border border-3 border-dark">
                <form className="ml-2 mr-3 mt-3 d-flex flex-column justify-content-center align-items-center mb-2 mt-4">
                    <label>
                        <p className="mb-2 mt-4" >Email</p>
                        <input type="text" className="form-control" />
                    </label>
                    <label>
                        <p className="mb-2 mt-4" >Username</p>
                        <input type="text" className="form-control" />
                    </label>
                    <label>
                        <p className="mb-2 mt-4" >Password</p>
                        <input type="password" className="form-control" />
                    </label>
                    <select onChange={e => setTypeUser(e.target.value)} className="mt-4 text-center">
                        <option value="driver">Driver</option>
                        <option value="passenger">Passenger</option>
                    </select>
                    <div>
                        <button onClick={signUp} type="submit" className="btn btn-success my-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp