pragma solidity ^0.8.7;

import "./ConvertLib.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Rides {

    struct Ride {
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

    mapping(address => Ride) private rides;
    mapping(uint=> address) private accounts;

    using Counters for Counters.Counter;
    Counters.Counter private ridesIds;
    event rideCreated(address indexed canditateAddress, address driver, string rider);
    event Selected(address indexed _driverAddress, address indexed _riderAddress, uint _totalPayed);


        function payRide(address payable _receiver, address rideId, string calldata rider) public payable {
        _receiver.transfer(msg.value);
        rides[rideId].status = "closed";
        rides[rideId].rider = rider;
        emit Selected(_receiver, msg.sender, msg.value);
    }

    function registerRide(
        uint cost,
        uint timeActive,
        string calldata date,
        string calldata hour,
        string calldata rider,
        string calldata destination
        ) external {
    require(msg.sender != address(0), "Sender address must be valid"); 
    ridesIds.increment();
    uint rideId = ridesIds.current();
    address _address = address(msg.sender);
    Ride memory newRide = Ride(cost, timeActive, date, hour, msg.sender, rider, destination, "[]", "open");  
    rides[_address] = newRide;  
    accounts[rideId] = msg.sender;
    emit rideCreated(_address, msg.sender, rider);
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