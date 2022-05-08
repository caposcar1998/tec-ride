import RideOffered from "./RideOffered"
import travelsMock from "../mocks/travelsMock.json"

const Offers = () => {


    function makeOffer(){
        console.log(travelsMocks)
    }

    return(
    <div className="container">
        <ul className="list-group">
            {
                travelsMock.map((travel, index) => {
                    return <RideOffered
                    date= {travel.date}
                    from= {travel.from}
                    to= {travel.to}
                    by= {travel.driver}
                    makeOffer= {makeOffer}
                    bids= {[]}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Offers