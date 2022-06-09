import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';
import AcceptanceRideUser from './AcceptanceRideUser';
import ClosedRideUser from './ClosedRideUser';
import {useEffect, useState} from 'react';

const MyRides = () => {
	const [rerender, setRerender] = useState(false);

	const [rides, setRides] = useState([])

    useEffect(() => {
        fetchRiderRides()
      }, []);


    async function fetchRiderRides(){
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId()


        const createRide = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
        const exceuted_contract = await createRide.methods.fetchRides().call()
        setRides(exceuted_contract)
        console.log(exceuted_contract)
    }

	return (
		<div className="container">
			<ul className="list-group">
				{rides.map((travel, index) => {
					return (
						travel.driver == localStorage.getItem("idUser") ?
						<AcceptanceRideUser
							date={travel.date + ' ' + travel.hour}
							destination={travel.destination}
							cost={travel.cost}
							rerender={rerender}
							setRerender={setRerender}
							by={travel.rider}
						/>
						: null
					)
					

				})}
			</ul>
		</div>
	);
};

export default MyRides;
