import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json'

const marketplaceFactoryAddress = ""; // TODO: Missing address to MarketplaceFactory smart contract

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;