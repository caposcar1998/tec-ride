import RideOffered from "./RideOffered"
import travelsMock from "../mocks/travelsMock.json"

const Offers = () => {


    return(
    <div className="container">
        <ul className="list-group">
            {
                travelsMock.map((travel, index) => {
                    return <RideOffered
                    id={travel.id}
                    date= {travel.date +" " +travel.hour}
                    from= {travel.from}
                    to= {travel.to}
                    by= {travel.driver}
                    cost={travel.costRide}
                    bids= {travel.bids}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Offers