# TEC RIDE

Application that will give the users of the blockchain secure and private rides using ethereum as currency.

# Application requirements

1. Latest version of [node](https://nodejs.org/es/download/)

# How to install

1. ```npm install```
2. ```npm run dev```
3. Open [http:localhost:3000](http:localhost:3000)
4. Use as username for rider: 0x22b52AC02134C870AE56d6F9D809E209Cabc710F
5. Use a username for driver: 0xa5da0510edc01b1c08CE5DBEf659982d4175a6b4


# Phase 1

In the first place the application only contains mock data and mocks to simulate the final use

The app is configured to le you in with the login and assign you as a rider, so you will only see that part of the aplication

# Change type of user

Go to Login.jsx and change line 12 to localStorage.setItem('type', "driver")

# Contracts

Install globally
```
npm install -g truffle
```

## Adding contract

1. Create contrat in contracts folder
2. Add the contract to migrations
3. Run
```
    truffle migrate --reset
```

## Connect the user to the blockchain

1. Download [Metamask](https://metamask.io/download/) and add the plugin
2. Create account
3. The local application will ask you to login access metamask
4. Access the plugin 

## Testing truffle

1. Run 
```
truffle console
```
2. On the console run
```
let x = await MetaCoin.deployed
x
x.sendCoin("0x3755a97396F60aE56E1b57Ee119745a59fD44923", 10, {from: "0xcC9ef1Fb124C0105Ecd91Ec87F3a8747b1d71F12"})
```




