const Marketplace = artifacts.require("Marketplace");
const MarketplaceCreator = artifacts.require("MarketplaceCreator");
const Artwork = artifacts.require("Artwork");

let marketplace;
let marketplaceAddress;

contract("Marketplace Test", (accounts) => {
    before(async()=>{
        var marketplaceCreator = await MarketplaceCreator.new({from: accounts[0]});
        marketplaceAddress = await marketplaceCreator.marketplace.call();
        marketplace = await Marketplace.at(marketplaceAddress);
    });

    it('marketplace has address', async () => {
        assert.ok(marketplaceAddress);
    });

    it('marketplace has owner', async () => {
        var owner = await marketplace.owner.call();
        assert.ok(owner);
    });

    it('marketplace can register artwork', async () => {
        await marketplace.registerArtwork('Name Test', 'URL Test', {from: accounts[0], value: 10000000000000000});
        var artworkAddresses = await marketplace.getArtworks();
        var artwork = await Artwork.at(artworkAddresses[0]);
        assert.ok(artwork);
    });

    it('marketplace ownership can be transferred by owner', async () => {
        await marketplace.transferOwnership(accounts[1],{from: accounts[0]});
        var newOwner = await marketplace.owner.call();
        assert.equal(newOwner, accounts[1]);
    })

    it('marketplace ownership cannot be transferred by 3rd Party', async () => {
        try{
            await marketplace.transferOwnership(accounts[4],{from: accounts[4]});
            assert(false);
         } catch (error){
             assert(error);
         }
    })
})