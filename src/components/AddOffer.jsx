
import Rides from '../../build/contracts/Rides.json'
import Web3 from 'web3';
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

function AddOffer({by, show, handleShow, handleClose, bids}) {

    const [rerender, setRerender] = useState(false);
    const [ether, setEther] = useState(0)

    async function createOffer(beforeBids){

      const newBids = beforeBids.concat(`|rider:${localStorage.getItem("idUser")},bid:${ether}`)
      console.log(newBids)
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId()
      const createBid = new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
      const exceuted_contract = await createBid.methods.makeBid(newBids, by).send({from: localStorage.getItem("idUser")})
      console.log(exceuted_contract)
    handleClose()
    setRerender(!rerender);
    window.location.reload();
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
            <Button variant="primary" onClick={() => createOffer(bids)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddOffer