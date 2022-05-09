import RideOffered from "./RideOffered"
import travelsMock from "../mocks/travelsMock.json"
import AcceptanceRide from "./AcceptanceRide"

const MyRides = () => {

    return(
        <div className="container">
            <ul className="list-group">
                {
                    travelsMock.map((travel, index) => {
                        return <AcceptanceRide
                        id={travel.id}
                        date= {travel.date +" " +travel.hour}
                        from= {travel.from}
                        to= {travel.to}
                        by= {travel.driver}
                        cost={travel.costRide}
                        bids= {travel.bids}
                        activeTime = {travel.hoursActive}
       
                    />
                    })
                }
    
            </ul>        
        </div>
    
        )
}

export default MyRides