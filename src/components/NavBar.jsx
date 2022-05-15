import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <button className="btn">
                    Home
                </button>
            </Link>

            {localStorage.getItem('type') === 'rider' ?
                <>
                <Link to="/offers">
                    <button className="btn">
                        Offers
                    </button>
                </Link>
                <Link to="/travels">
                    <button className="btn">
                        Travels
                    </button>
                </Link>   
                </>      
             :
                <>
                    <Link to="/offer-ride">
                        <button className="btn">
                            Offer ride
                        </button>
                    </Link>   
                    <Link to="/my-offers">
                    <button className="btn">
                        My rides
                    </button>
                    </Link> 
                </> 
             }



        </nav>
    )
}

export default NavBar