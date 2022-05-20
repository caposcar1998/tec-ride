import MetaCoin from '../../build/contracts/MetaCoin.json'
import Web3 from 'web3';
import Countdown from 'react-countdown';

const AcceptanceRide = ({id, date, from, to, by, bids, cost, activeTime, rerender, setRerender}) => {


    async function createPayment(user, amount){
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId()

        const amountHex = (amount * Math.pow(10,18)).toString()
        
        const tx = {
          from: localStorage.getItem('idUser'),
          to: user,
          value: amountHex,
          gas: 6721975,
        }

        const sendMoney = new web3.eth.Contract(MetaCoin.abi, MetaCoin.networks[networkId].address);
        const met = await sendMoney.methods.sendCoin("0x3755a97396F60aE56E1b57Ee119745a59fD44923",amountHex).send({...tx})
        console.log(met)
      }

    async function acceptUser(user, amount){

        //Avisar a usuario que puede pagar al driver

        //Mover a usuario
        const gasPrice = '0x5208' // 21000 Gas Price
        const amountHex = (2 * Math.pow(10,18)).toString(16)
        
        console.log(user)
        console.log(localStorage.getItem('idUser'))
        const tx = {
          from: localStorage.getItem('idUser'),
          to: user,
          value: amountHex,
          gas: gasPrice,
        }
        
        await window.ethereum.request({ method: 'eth_sendTransaction', params: [ tx ]})

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
                                        <h5 className="text-danger">Original cost: {cost} </h5>
                                    </div>
                                    <div className="col-12"/>
                                    <div className="col-12">
                                        <div className="col-12 inline-block"></div>
                                        <h6>By:{by}</h6>
                                        <h6>Active time: <Countdown date={Date.now() + (activeTime* 60 * 60 *1000)} /></h6>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex justify-content-center col-12">
                                    <h2>Bids</h2>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">
                                        {
                                            bids.map((bid,index) =>{
                                                return(
                                                    <div className="container inline-block ">
                                                        <li>Address: {bid.address} - Bid: {bid.amount}</li>
                                                        <button className="btn btn-success" onClick={() => createPayment(bid.address, bid.amount, id)}>Accept</button>
                                                    </div>
                                                )
                                            })
                                        }                       
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default AcceptanceRide