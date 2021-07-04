import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json';

const marketplaceFactoryAddress = "0x52754F331Dd52F16D0f38693B0126420AC2eB3Ea";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;