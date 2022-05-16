import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../config';
import Web3 from 'web3';
import Countdown from 'react-countdown';
import travelsMock from "../mocks/travelsMock.json"

const AcceptanceRide = ({id, date, from, to, by, bids, cost, activeTime, rerender, setRerender}) => {



    async function acceptUser(user, amount, id){
        const web3 = new Web3('http://localhost:7545');
        const sendMoney = new web3.eth.Contract(CONTRACT_ABI, localStorage.getItem('idUser'));
        const met = await sendMoney.methods.sendCoin(localStorage.getItem('idUser'),amount).send({from:user})
        console.log(met)
        travelsMock.map((travel) => {
            if (id === travel.id){
                console.log("entra")
                travel.open = false
            }
            setRerender(!rerender)
        })


      }

    return(
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
                                    <h3>From: {from}</h3>
                                </div>
                                <div className="col-12">
                                    <h3>To:{to}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="text-danger">Original cost: {cost} </h5>
                                    </div>
                                    <div className="col-12"/>
                                    <div className="col-12">
                                        <div className="col-12 inline-block"></div>
                                        <h6>By:{by}</h6>
                                        <h6>Active time: <Countdown date={Date.now() + (activeTime* 60 * 60 *1000)} /></h6>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex justify-content-center col-12">
                                    <h2>Bids</h2>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">
                                        {
                                            bids.map((bid,index) =>{
                                                return(
                                                    <div className="container inline-block ">
                                                        <li>Address: {bid.address} - Bid: {bid.amount}</li>
                                                        <button className="btn btn-success" onClick={() => acceptUser(bid.address, bid.amount, id)}>Accept</button>
                                                    </div>
                                                )
                                            })
                                        }                       
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default AcceptanceRide