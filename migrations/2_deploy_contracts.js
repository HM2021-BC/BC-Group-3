var Marketplace = artifacts.require("Marketplace");
var Artwork = artifacts.require("Artwork");
// var Ownable = artifacts.require("Ownable");

var paymentAddressA = '0x72222d032f4d5Ccc21637bCaFC64Fc79dd94cE66';
var currentBalanceA = 100;
var paymentAddressB = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';
var currentBalanceB = 200;

module.exports = function(deployer) {
    deployer.deploy(Marketplace, paymentAddressA, currentBalanceA, paymentAddressB, currentBalanceB);
};