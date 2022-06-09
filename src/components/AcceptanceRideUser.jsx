import Rides from '../../build/contracts/Rides.json';
import travelsMock from '../mocks/travelsMock.json';
import Web3 from 'web3';

const AcceptanceRide = ({ date, destination, cost, rerender, setRerender, by}) => {

	
	async function createPayment(user, amount) {
		const web3 = new Web3(window.ethereum);
		const networkId = await web3.eth.net.getId();

		const amountHex = (amount * Math.pow(10, 18)).toString();
		const params = {
			from: localStorage.getItem('idUser'),
			gas: 81000,
			value: amountHex,
		};
		const sendMoney = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
		console.log(user)
		const met = await sendMoney.methods.payRide(user, localStorage.getItem('idUser')).send({...params});
		console.log(met);
	}

	return (
		<li className="list-group-item">
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<h1>{date}</h1>
								</div>
								<div className="col-12">
									<h3>Destination: {destination}</h3>
								</div>
								<div className="col-12">
									<h3>Total cost: {cost}</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="container">
							<div className="row">
								<div className="d-flex justify-content-center col-12">
									<button className="btn btn-success" onClick={() => createPayment(by,cost)}>Accept</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default AcceptanceRide;
