import {Button, Modal} from 'react-bootstrap';

const CreateRide = ({show,handleShow, handleClose}) => {
    return(
        <>
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create a Ride!</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            
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
                                                <input class="form-control input-sm" type="date"/>    
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
                                                <input class="form-control input-sm" type="time"/>   
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
                                                <input class="form-control input-sm" type="number"/>   
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
                                                <input class="form-control input-sm" type="number"/>   
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
                                                <input class="form-control input-sm" type="number"/>   
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
                                                100   
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
                                                    <input class="form-control input-sm" type="text"/>
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
                                                    <input class="form-control input-sm" type="text"/>
                                                </div>
                                            </div>
                                        </div>  
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Create ride
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default CreateRide