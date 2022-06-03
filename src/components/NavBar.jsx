import {Link} from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<button className="btn">Home</button>
			</Link>
			<Link to="/offers">
				<button className="btn">All offers</button>
			</Link>
			<h1>|</h1>
			<Link to="/my-offers">
				<button className="btn">My offerings</button>
			</Link>
			<Link to="/offer-ride">
				<button className="btn">Create ride</button>
			</Link>
			<h1>|</h1>
			<Link to="/user-rides">
				<button className="btn">Accept ride</button>
			</Link>
		</nav>
	);
};

export default NavBar;
