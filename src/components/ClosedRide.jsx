import { useEffect, useState } from "react"

const ClosedRide = ({bids}) => {

    const [highestBid, setHighestBid] = useState(0)

    useEffect(() => {
        setHighestBid( Math.max(...bids.map(o => o.amount)))
       }, []);

    return(
        <li className="list-group-item">
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>Closed Ride</h1>
                                <h2>Highest Bid: {highestBid}</h2>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                      
                   
                
            </div>
        </div>
    </li>
    )

}

export default ClosedRide