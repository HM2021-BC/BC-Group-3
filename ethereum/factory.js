import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json';

const marketplaceFactoryAddress = "0x92d45C425AeEf448004FD6DAA629886240D949A2";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;