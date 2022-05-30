import RideOffered from "./RideOffered"
import { useEffect, useState } from "react";
import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';

const Offers = () => {

    const [rides, setRides] = useState([])
    
    useEffect(() => {
        fetchRides()
      }, []);


    



    

    async function fetchRides(){
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId()


        const createRide = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
        const exceuted_contract = await createRide.methods.fetchRides().call()
        setRides(exceuted_contract)
        console.log(exceuted_contract)
        console.log(rides)
    }

    return(
    <div className="container">
        <ul className="list-group">
            {
                rides.map((travel, index) => {
                    return <RideOffered
                    id={1}
                    date= {travel.date +" " +travel.hour}
                    from= {travel.destination}
                    to= {travel.destination}
                    by= {travel.driver}
                    cost={travel.cost}
                    bids= {travel.bids}
                    activeTime = {travel.timeActive}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Offers