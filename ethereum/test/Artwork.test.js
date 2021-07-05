const Marketplace = artifacts.require("Marketplace");
const MarketplaceCreator = artifacts.require("MarketplaceCreator");
const Artwork = artifacts.require("Artwork");

let marketplace;
let marketplaceAddress;
let artwork;
let artworkAddress;

contract("Artwork Test", (accounts) => {
    before(async()=>{
        var marketplaceCreator = await MarketplaceCreator.new({from: accounts[0]});
        marketplaceAddress = await marketplaceCreator.marketplace.call();
        marketplace = await Marketplace.at(marketplaceAddress);
        await marketplace.registerArtwork('Name Test', 'URL Test', {from: accounts[0], value: 10000000000000000});
        var artworkAddresses = await marketplace.getArtworks();
        artworkAddress = artworkAddresses[0];
        artwork = await Artwork.at(artworkAddress);
    });

    it('artwork has address', async () => {
        assert.ok(artworkAddress);
    });

    it('artwork has owner', async () => {
        var owner = await artwork.owner.call();
        assert.equal(owner, accounts[0]);
    });

    it('artwork has name', async () => {
        var artworkName = await artwork.artworkName.call();
        assert.equal(artworkName, 'Name Test');
    });

    it('artwork can not be sold if not owner', async () => {
        try {
            await artwork.sellArtwork(10, {from: accounts[1]});
            assert(false);
        } catch (error) {
            assert(error);
        }
    });

    it('artwork can not be bought if not for sale', async () => {
        try {
            await artwork.buyArtwork({from: accounts[1], value: 10});
            assert(false);
        } catch (error) {
            assert(error);
        }
    });

    it('artwork can be sold', async () => {
        await artwork.sellArtwork(10, {from: accounts[0]});
        var isArtworkForSale = await artwork.isArtworkForSale.call();
        assert.equal(isArtworkForSale, true);
    });

    it('artwork can not be bought if price not paid', async () => {
        try {
            await artwork.buyArtwork({from: accounts[1], value: 9});
            assert(false);
        } catch (error) {
            assert(error);
        }
    });

    it('artwork can not be bought if already owner', async () => {
        try {
            await artwork.buyArtwork({from: accounts[0], value: 10});
            assert(false);
        } catch (error) {
            assert(error);
        }
    });

    it('artwork can be bought', async () => {
        await artwork.buyArtwork({from: accounts[1], value: 10});
        var owner = await artwork.owner.call();
        assert.equal(owner, accounts[1]);
    });

    it('Sale can be cancelled by Owner', async () => {
        try{
            await artwork.cancelSellArtwork({from: accounts[0]})
            assert(true);
        } catch(error){
            assert(error);
        }
    })

    it('Sale cannot be cancelled by 3rd party', async () => {
        try{
            await artwork.cancelSellArtwork({from: accounts[1]})
            assert(false);
        } catch(error){
            assert(error);
        }
    })
})