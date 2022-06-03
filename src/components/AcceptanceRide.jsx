import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';
import Countdown from 'react-countdown';


const AcceptanceRide = ({id, date, from, to, by, bids, cost, activeTime, rerender, setRerender}) => {

    
    
    async function acceptPayment(bid){
        console.log("acepto de este usuario")
    }

    const renderer = () => {
        
    };


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
                                        <h6>Active time: <Countdown date={Date.now() + (activeTime* 60 * 60 * 1000 )} renderer={renderer} /></h6>
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
                                            bids.split("|").map((bid,index) =>{
                                                return(
                                                    <div className="container inline-block ">
                                                        <li>{bid}</li>
                                                        <button className="btn btn-success" onClick={() => acceptPayment(bid)}>Accept</button>
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