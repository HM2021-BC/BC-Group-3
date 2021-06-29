const Marketplace = artifacts.require("Marketplace");
const MarketplaceCreator = artifacts.require("MarketplaceCreator");
const Artwork = artifacts.require("Artwork");

const balanceA = 1000000000;
const balanceB = 1000000000;

let marketplaceCreator;
let marketplace;
let marketplaceAddress;
let artwork;

contract("Bazinga Test", (accounts) => {
    before(async()=>{
        marketplaceCreator = await MarketplaceCreator.new()
        await marketplaceCreator.createMarketplace(accounts[0], balanceA, accounts[1], balanceB);
        marketplaceAddress = await marketplaceCreator.getDeployedMarketplaces.call();
        marketplace = await Marketplace.at(marketplaceAddresses[0]);
        //artwork = await Artwork.new("Testname", addressA, addressB, address(marketplace));
    });

    //Check all Variable Initialization
    it('marketplace has address', async () => {
        assert.ok(marketplaceAddress);
    });

    it('marketplace has userA', async () => {
        userA = await marketplace.userA.call();
        assert.ok(userA);
    });

    it('marketplace has userB', async () => {
        userB = await marketplace.userB.call();
        assert.ok(userA);
    });

    it('marketplace has Artwork', async () => {
        artwork = await marketplace.artwork.call();
        assert.ok(userA);
    });


    //Check all functions
    it('checks account balance', async () => {
        //TODO
    });

    it('updates account balances', async () => {
        //TODO
    });

    it('lists all available artwork', async () => {
        //TODO
    });
})