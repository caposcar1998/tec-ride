pragma solidity >=0.4.25 <0.7.0;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Rides {

        address[16] public rides;


    function getRides() public view returns (address[16] memory) {
        return rides;
    }

        function payRide(address payable _receiver, uint rideId) public payable {
        _receiver.transfer(msg.value);
        rides[rideId] = msg.sender;
    }
}