const Migrations = artifacts.require("Migrations");
const Rides = artifacts.require('Rides')

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
