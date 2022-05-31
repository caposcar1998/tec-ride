import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Offers from './components/Offers';
import Travels from './components/Travels';
import CreateRide from './components/CreateRide';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyRides from './components/MyRides';
//import Testing from './components/Testing';
import UserRides from './components/UserRides';
import {useEffect, useState} from 'react';
import Web3 from 'web3';
import Register from './components/Register';

function App() {
	const [account, setAccount] = useState();

	useEffect(() => {
		async function load() {
			const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
			const accounts = await web3.eth.requestAccounts();

			setAccount(accounts[0]);
			localStorage.setItem('idUser', accounts[0]);
			localStorage.setItem('type', 'driver');
		}

		load();
	}, []);

	return (
		<div className="App">
			{account ? (
				<>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/offers" element={<Offers />} />
						<Route path="/travels" element={<Travels />} />
						<Route path="/offer-ride" element={<CreateRide />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/my-offers" element={<MyRides />} />
						<Route path="/testing" element={<Testing />} />
						<Route path="/user-rides" element={<UserRides />} />
					</Routes>
				</>
			) : (
				<Register />
			)}
		</div>
	);
}

export default App;
