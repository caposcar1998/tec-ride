import { useState } from 'react';
import travelsMock from '../mocks/travelsMock.json'
import { v4 as uuidv4 } from 'uuid';

const CreateRide = () => {


    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [people, setPeople] = useState()
    const [price, setPrice] = useState()
    const [reward, setReward] = useState()
    const [origin, setOrigin] = useState()
    const [end, setEnd] = useState()
    const [total, setTotal] = useState()

    function createNewRide(){
        setTotal(Number(price) + Number(reward))
        travelsMock.push({
            "id":uuidv4(),
            "date":date,
            "limit": Number(people),
            "hour":hour,
            "from":origin,
            "to": end,
            "driver": "0x2Da50A15deD2Da65cac23B1900B925aB9224170F",
            "rider": "",
            "costRide": Number(price),
            "gas": Number(reward),
            "total": total,
            "bids": []

        })
        alert("Creado con exito!")
    }

    return(
        <div className='container'>
            
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    <h1>Offer a ride to users</h1>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Date
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <input onChange={event => setDate(event.target.value)} class="form-control input-sm" type="date"/>    
                                        </div>
                                    </div>
                                </div>                                 
                            </div>
                            <div className='col-4 d-flex justify-content-center'>
                            <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Hour
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <input onChange={event => setHour(event.target.value)} class="form-control input-sm" type="time"/>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-center'>
                                
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Limit people
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <input onChange={event => setPeople(event.target.value)} class="form-control input-sm" type="number"/>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Price
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <input onChange={event => setPrice(event.target.value)} class="form-control input-sm" type="number"/>   
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4 d-flex justify-content-center'>
                                
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Reward
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <input onChange={event => setReward(event.target.value)} class="form-control input-sm" type="number"/>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-center'>
                            <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Total
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                        {Number(price)+Number(reward)}   
                                        </div>
                                    </div>
                                </div>                                        
                            </div>
                            <div className='col-12 '>
                            <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        Origin ride
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <input onChange={event => setOrigin(event.target.value)} class="form-control input-sm" type="text"/>
                                        </div>
                                    </div>
                                </div>                                        

                            </div>
                            <div className='col-12 '>
                            <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                        End ride
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <input onChange={event => setEnd(event.target.value)} class="form-control input-sm" type="text"/>
                                        </div>
                                    </div>
                                </div>  
                                
                            </div>
                            <div className='d-flex justify-content-center container'>
                                    <button onClick={createNewRide} className='btn btn-success'>Create</button>
                                </div>  
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRide