pragma solidity ^0.8.7;

import "./ConvertLib.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Rides {

    struct Ride {
    uint id;
    uint cost;
    uint timeActive;
    string date;
    string hour;
    address driver;
    address rider;
    string destination;
    string bids;
    string status;
    }

    mapping(address => Ride) private rides;
    mapping(uint=> address) private accounts;

    using Counters for Counters.Counter;
    Counters.Counter private ridesIds;
    event rideCreated(address indexed canditateAddress, string name);
    event Selected(address indexed _driverAddress, address indexed _riderAddress, uint _totalPayed);


        function payRide(address payable _receiver, address rideId) public payable {
        _receiver.transfer(msg.value);
        rides[rideId].status = "closed";
        rides[rideId].rider = msg.sender;
        emit Selected(_receiver, msg.sender, msg.value);
    }

    function registerRide(string calldata _name) external {
    require(msg.sender != address(0), "Sender address must be valid"); 
    ridesIds.increment();
    uint rideId = ridesIds.current();
    address _address = address(msg.sender);
    Ride memory newRide = Ride(rideId, 100, 24, "May 3rd", "10:10:00 AM", _address,_address, "bicholandia", "", "open");  
    rides[_address] = newRide;  
    accounts[rideId] = msg.sender;
    emit rideCreated(_address, _name);
    }

    function fetchRides() external  view  returns ( Ride[] memory) {
        uint itemCount = ridesIds.current();
        Ride[] memory ridesArray = new Ride[](itemCount);
            for (uint i = 0; i < itemCount; i++) {
                uint currentId = i + 1;
                Ride memory currentRide = rides[accounts[currentId]];
                ridesArray[i] = currentRide;
            }
            return ridesArray;
        }
}