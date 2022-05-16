
import travelsMock from "../mocks/travelsMock.json"
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

function AddOffer({show, handleShow, handleClose, id}) {

    const [rerender, setRerender] = useState(false);
    const [ether, setEther] = useState(0)

    function createOffer(){

    travelsMock.map((travel) => {
        if (travel.id === id){
            travel.bids.push({"address":localStorage.getItem('idUser'), "amount":ether})
        }
    })
    handleClose()
    setRerender(!rerender);
}

    return(
        <>
  
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Make an offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter the ether you offer for the ride</Form.Label>
                <input onChange={event => setEther(event.target.value)} class="form-control input-sm" type="number"/>  
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={createOffer}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddOffer