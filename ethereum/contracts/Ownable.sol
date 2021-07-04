// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Ownable {
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "You are not the Owner.");
    _;
  }

  function transferOwnership(address newOwner) onlyOwner public {
    if (newOwner != address(0)) owner = newOwner;
  }

  function transferOwnershipInternal(address newOwner) internal {
    if (newOwner != address(0)) owner = newOwner;
  }
}