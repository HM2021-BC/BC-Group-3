import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json';

const marketplaceFactoryAddress = "0xC20d36B9e949d4B50D5F4958DA280B45d699781C";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;