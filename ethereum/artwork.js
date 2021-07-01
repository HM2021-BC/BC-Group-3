import web3 from './web3';
import Artwork from './build/contracts/Artwork.json';

export default address => {
  return new web3.eth.Contract(Artwork.abi, address);
};