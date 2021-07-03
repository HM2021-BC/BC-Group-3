import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json';

const marketplaceFactoryAddress = "0xE0bd5870845EcAe1F493D3C50dE1EfD526090CDd";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;