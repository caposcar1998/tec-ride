import { useEffect, useState } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../config';
import Web3 from 'web3';

function Testing() {

      

  const [account, setAccount] = useState(); // state variable to set account.
  

  async function createPayment(){
    const web3 = new Web3('http://localhost:7545');
    const sendMoney = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const met = await sendMoney.methods.sendCoin("0x3755a97396F60aE56E1b57Ee119745a59fD44923",50).send({from:"0xcC9ef1Fb124C0105Ecd91Ec87F3a8747b1d71F12"})
    console.log(met)
  }

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
  
  return (
    <div>
        Your account is: {account}
        <button onClick={createPayment}>Crear pago</button>
    </div>
  );
}

export default Testing;