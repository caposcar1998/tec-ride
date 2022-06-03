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
        const exceuted_contract = await createRide.methods.fetchRides().call()
        setRides(exceuted_contract)
        console.log(exceuted_contract)
    }

    return(
        <div className="container">
            <ul className="list-group">
                {
                    rides.map((travel, index) => {
                        return( 
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
                        )
                        
                    })
                }
    
            </ul>        
        </div>
    
        )
}

export default MyRides