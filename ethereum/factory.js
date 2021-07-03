import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json';

const marketplaceFactoryAddress = "0x64D904DAdd50D1d7452F6532552cb454ebA4d006";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;  