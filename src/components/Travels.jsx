import UserTravel from "./UserTravel"
import travelsMock from '../mocks/travelsMock.json'
const Travels = () => {


    return(
    <div className="container">
        <ul className="list-group">
            {
                travelsMock.map((travel, index) => {
                    return <UserTravel
                    date= {travel.date}
                    from= {travel.from}
                    to= {travel.to}
                    by= {travel.driver}
                    costRide= {travel.costRide}
                    id = {travel.id}
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Travels