import { useState } from "react";
import travelsMock from "../mocks/travelsMock.json"
import Countdown from 'react-countdown';
import AddOffer from "./AddOffer";

const RideOffered = ({id, date, from, to, by, bids, cost, activeTime}) => {


    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function makeOffer(){
  

        handleShow()
        

    }

    return(
        <>
        <AddOffer show={show} handleShow={handleShow} handleClose={handleClose} id={id}/>
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
                                        <h5 className="text-danger">Cost: {cost} </h5>
                                    </div>
                                    <div className="col-12"/>
                                    <div className="col-12">
                                        <div className="col-12 inline-block"></div>
                                        <h6>By:{by}</h6>
                                        <h6>Active time: <Countdown date={Date.now() + (activeTime* 60 * 60 *1000)} /></h6>
                                        <button className="btn btn-success" onClick={makeOffer}>Make a bid</button>
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
                                                    <li>Address: {bid.address} - Offered: {bid.amount} eth</li>
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
        </>
    )
}


export default RideOffered