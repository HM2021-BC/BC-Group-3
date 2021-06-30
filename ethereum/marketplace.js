import web3 from './web3';
import Market from './build/contracts/Marketplace.json';

export default address => {
    return new web3.eth.Contract(Marketplace.abi, address);
};