var MarketplaceCreator = artifacts.require("./MarketplaceCreator");

module.exports = function(deployer) {
    deployer.deploy(MarketplaceCreator);
};