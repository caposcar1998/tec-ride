import { useState } from 'react';
import travelsMock from '../mocks/travelsMock.json'

const UserTravel = ({date, from, to, by, costRide, id}) => {

    const [rerender, setRerender] = useState(false);

    function cancelRide(){
        let i = 0
        travelsMock.map((travel) => {
            i = i +1
            if (travel.id === id){
                console.log(i)
                travelsMock.splice(id,1)
            }})
        alert("viaje cancelado")
        setRerender(!rerender);
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
                                        <h5 >Cost ride: {costRide} </h5>
                                    </div>
                                    <div className="col-12"/>
                                    <div className="col-12">
                                        <div className="col-12 inline-block"></div>
                                        <h6>By:{by}</h6>
                                        <button className="btn btn-danger" onClick={cancelRide}>Cancel ride</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default UserTravel