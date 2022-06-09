import UserTravel from "./UserTravel"
import travelsMock from '../mocks/travelsMock.json'
import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';
import { useEffect } from "react";
const Travels = () => {


    useEffect(() => {
        getRidesUser()
      });

    async function getRidesUser(){
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId()


        const sendMoney = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
        const met = await sendMoney.methods.fetchRides().call()
        console.log(met)
        window.location.reload();
      }

    return(
    <div className="container">
        <ul className="list-group">
            {
                travelsMock.map((travel, index) => {
                    return travel.rider === localStorage.getItem('user') ?
                        <UserTravel
                        date= {travel.date}
                        from= {travel.from}
                        to= {travel.to}
                        by= {travel.driver}
                        costRide= {travel.costRide}
                        id = {travel.id}
                    />
                : <h1>hola</h1>
                })
            }

        </ul>        
    </div>

    )
}

export default Travels