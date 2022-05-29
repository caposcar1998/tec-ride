import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';
import Countdown from 'react-countdown';

const AcceptanceRide = ({id, date, from, to, by, bids, cost, activeTime, rerender, setRerender}) => {


    async function createPayment(user, amount, id){
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId()

        const amountHex = (amount * Math.pow(10,18)).toString()
        const params = {
            from: localStorage.getItem("idUser"),
            gas: 61000,
            value: amountHex
        };
        const sendMoney = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
        const met = await sendMoney.methods.payRide(user, id).send({...params})
        console.log(met)
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
                                                        <button className="btn btn-success" onClick={() => createPayment(bid.address, bid.amount, id)}>Accept</button>
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