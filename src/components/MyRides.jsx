import travelsMock from "../mocks/travelsMock.json"
import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';
import AcceptanceRide from "./AcceptanceRide"
import ClosedRide from "./ClosedRide"
import { useEffect, useState } from "react"

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
        const exceuted_contract = await createRide.methods.fetchRidesDriver(localStorage.getItem("idUser")).call()
        setRides(exceuted_contract)
        console.log(exceuted_contract)
        console.log(rides)
    }

    return(
        <div className="container">
            <ul className="list-group">
                {
                    travelsMock.map((travel, index) => {
                        return( 
                        travel.open?
                        <AcceptanceRide
                        date= {travel.date +" " +travel.hour}
                        from= {travel.destination}
                        to= {travel.destination}
                        by= {travel.driver}
                        cost={travel.cost}
                        bids= {travel.bids}
                        activeTime = {travel.timeActive}
                        rerender= {rerender}
                        setRerender = {setRerender}
                        />
                        :
                        <ClosedRide bids={travel.bids}/>
                    
                        )
                    })
                }
    
            </ul>        
        </div>
    
        )
}

export default MyRides