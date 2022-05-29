import RideOffered from "./RideOffered"
import travelsMock from "../mocks/travelsMock.json"
import { useEffect } from "react";
import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';

const Offers = () => {

    useEffect(() => {
        fetchRides()
      });

    async function fetchRides(){
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId()


        const createRide = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
        const exceuted_contract = await createRide.methods.fetchRides().call()
        console.log(exceuted_contract)
    }

    return(
    <div className="container">
        <ul className="list-group">
            {
                travelsMock.map((travel, index) => {
                    return <RideOffered
                    id={travel.id}
                    date= {travel.date +" " +travel.hour}
                    from= {travel.from}
                    to= {travel.to}
                    by= {travel.driver}
                    cost={travel.costRide}
                    bids= {travel.bids}
                    activeTime = {travel.hoursActive}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Offers