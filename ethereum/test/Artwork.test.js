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
        await marketplace.registerArtwork('Name Test', 'URL Test', {from: accounts[0], value: 10});
        var artworkAddresses = await marketplace.getArtworks();
        artworkAddress = artworkAddresses[0];
        artwork = await Artwork.at(artworkAddress);
    });

    it('artwork has address', async () => {
        assert.ok(artworkAddress);
    });

    it('artwork has owner', async () => {
        var owner = await artwork.owner.call();
        assert.ok(owner);
    });

    it('artwork has name', async () => {
        var artworkName = await artwork.artworkName.call();
        assert.ok(artworkName);
    });

    it('artwork can be sold', async () => {
        await artwork.sellArtwork(10, {from: accounts[0]});
        var isArtworkForSale = await artwork.isArtworkForSale.call();
        assert.ok(isArtworkForSale);
    });
})