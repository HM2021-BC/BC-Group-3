// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Marketplace.sol";

contract Ownable {
  
  address public owner;
  string public contentHash;
  string public name;
  bool public forSale;
  uint public price;
  address public marketplaceAddress;
  Marketplace marketplace;

  modifier onlyOwner() {
    if (msg.sender == owner)
      _;
  }

  function transferOwnership() public {
    owner = msg.sender;
  }

  function setPrice(uint newPrice) public {
    price = newPrice;
  }

  //declares ownable item for sale
  function declareForSale(uint _price) public {
      if (msg.sender == owner){
          setPrice(_price);
          forSale = true;
      }
  }

  //Buyer buys ownable
  function buyOwnable() public {
      if(msg.sender == owner){
          revert();
      } else if(!forSale) {
          revert();
      } else {
          if (!marketplace.checkBalance(msg.sender, price)){
              revert();  
          } else {
            require(msg.value >= price);

		        // If amount sent is too large, refund the difference
		        if (msg.value > price) {
        			uint refund = msg.value - price;
        			msg.sender.transfer(refund);
        		}
              transferOwnership();
              forSale = false;
              setPrice(0);
          }
      }
  }	  
}