const Marketplace = artifacts.require("Marketplace");
const MarketplaceCreator = artifacts.require("MarketplaceCreator");
const Artwork = artifacts.require("Artwork");

const balanceA = 1000000000;
const balanceB = 1000000000;

let marketplaceCreator;
let marketplace;
let marketplaceAddresses;
let artwork;

contract("Bazinga Test", (accounts) => {
    before(async()=>{
        marketplaceCreator = await MarketplaceCreator.new()
        await marketplaceCreator.createMarketplace(accounts[0]);
        marketplaceAddresses = await marketplaceCreator.getDeployedMarketplaces.call();
        marketplace = await Marketplace.at(marketplaceAddresses[0]);
        //artwork = await Artwork.new("Testname", addressA, addressB, address(marketplace));
    });

    it('marketplace has address', async () => {
        assert.ok(marketplaceAddresses);
    });

    it('marketplace has owner', async () => {
        owner = await marketplace.owner.call();
        assert.ok(owner);
    });
})