// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

abstract contract Ownable {
  address public owner;
  string public contentHash;
  string public name;
  uint public price;

  constructor(string memory _name, string memory _contentHash) {
    owner = msg.sender;
    contentHash = _contentHash;
    name = _name;
  }

  modifier onlyOwner() {
    if (msg.sender == owner)
      _;
  }

  function upForSale(uint _price) public {
    price = _price;
  }

  function transferOwnership(address newOwner) onlyOwner public {
    if (newOwner != address(0)) owner = newOwner;
  }

}