// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ownable {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    if (msg.sender == owner)
      _;
  }

  function transferOwnership(address newOwner) onlyOwner public {
    if (newOwner != address(0)) owner = newOwner;
  }
}