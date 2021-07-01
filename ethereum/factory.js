import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json'

const marketplaceFactoryAddress = "0x4fd9Bce2f47a474eEF3195D0F48DFE585AaA3D03";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;