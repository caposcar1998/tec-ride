# TEC RIDE

Application that will give the users of the blockchain secure and private rides using ethereum as currency.

# Application requirements

1. Latest version of [node](https://nodejs.org/es/download/)
2. Latest version of [Ganache](https://trufflesuite.com/ganache/)
3. Latest version of [MetaMask](https://metamask.io/download/)

Workis with any Operating System 

# Installation

1. Install NPM packages

        npm install 

2. Install truffle globally

        npm install -g truffle
        
3. Install Vite globally

        npm create vite@latest globally

# Usage

1. Run the application

        npm run dev

2. Open [http:localhost:3000](http:localhost:3000)
3. Open Ganache App and start a Workspace  in port 7545
4. Use as username for rider in your metamask configuration : You will get this from your ganache env
5. Use a username for driver in your metamask configuration: You will get this from your ganache env

## Contracts Usage

1. Create contrat in contracts folder
2. Add the contract to migrations
3. Run

        truffle compile

        truffle migrate --reset
        
The contracts will act as the Backend of the Application, acting with all the logic, having the next structure for the Ride.

```solidity
    struct Ride {
        uint id;
        uint cost;
        uint timeActive;
        string date;
        string hour;
        address driver;
        string rider;
        string destination;
        string bids;
        string status;
    }
```

Having all the methods to fetch, modify and recieve data, necessary for this application to work.

Where it is possible to obtain all the rides:

```solidity
function fetchRides() external  view  returns ( Ride[] memory) {}
```

Also to obtain the rides from the driver:

```solidity
function fetchRidesDriver()external view returns (Ride[] memory){}
```

Finally, to create bids and approve the rides:
```solidity
function makeBid(string calldata bids , address rideId) public {}

function preAproveRide(address driver, string calldata rider, uint cost) public {}
```

## Connect the user to the blockchain

1. Open up [Metamask](https://metamask.io/download/) and add the plugin
2. Create two accounts, one for a **Driver** account and the other for a **User** account.
3. The local application will ask you to login access metamask
4. Access the plugin with a Ganache user
5. Create localhost network

## Testing truffle

Truffle will create the testing of your solidity files for your, truffle will run automatic unit test in all your methods

0. Start Ganache in port 7545

1. Run 

        truffle test
        
If you want to test manually you can start the CLI on any console
        
0. On the console run

```
truffle console
let x = await MetaCoin.deployed()
x
x.sendCoin("0x3755a97396F60aE56E1b57Ee119745a59fD44923", 10, {from: "0xcC9ef1Fb124C0105Ecd91Ec87F3a8747b1d71F12"})
```
## Create transactions

1. Make sure your contract is created in build

2. If not run
        
        truffle migrate --reset

3.  Create config file per contract in src

4. Copy the address and ABI obtained from build

5. Use example in testing file

6. Methods may change:
    1. send makes the transaction
    2. call retrieves data

All ethereum values must be type integer


When creating a transaction,the application makes sure that the next methods are applied.

1. A new contract object is created, then a json interface is provided of the respective smart contract and web3 will auto convert all calls into low level ABI calls over RPC for you
```javascript
new Web3(window.ethereum);
```
2. The applications gets the information about the current network that is being used
```javascript
web3.eth.net.getId();
```
3. Creates a new contract instance with all its methods and events defined in its json interface object
```javascript
new web3.eth.Contract(Rides.abi, Rides.networks[networkId].address);
```
4. Creates a new bid with MetaMask, which acts as the broker of the application
```javascript
createBid.methods.makeBid(newBids, by).send({from: localStorage.getItem("idUser")});
```

