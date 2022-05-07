import { useState } from "react";
import CreateRide from "./CreateRide";
import RideOffered from "./RideOffered"

const Offers = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const testUsers = [
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10}
    ]

    function makeOffer(){
        console.log("Hacer oferta")
        handleShow()
    }

    return(
    <div className="container">
        <CreateRide
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        />
        <ul className="list-group">
            {
                testUsers.map((user, index) => {
                    return <RideOffered
                    date= {user.date}
                    from= {user.from}
                    to= {user.to}
                    by= {user.by}
                    makeOffer= {makeOffer}
                    bids= {user.bids}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Offers