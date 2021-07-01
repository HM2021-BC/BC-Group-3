import web3 from './web3';
import MarketplaceFactory from './build/contracts/MarketplaceCreator.json'

const marketplaceFactoryAddress = "0x3D8af5C647191FAD080402d022cC8E50ab008e6F";

const instance = new web3.eth.Contract(MarketplaceFactory.abi, marketplaceFactoryAddress);

export default instance;