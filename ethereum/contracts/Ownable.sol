// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/// @title Contract module which provides a basic access control mechanism
/// @notice Is used for marketplace and artwork
contract Ownable {
  address public owner;

  /// @notice Set owner
  constructor() {
    owner = msg.sender;
  }

  /// @notice Check if caller is owner
  modifier onlyOwner() {
    require(msg.sender == owner, "You are not the Owner.");
    _;
  }

  /// @notice Transfer ownership (public, with modifier)
  function transferOwnership(address newOwner) onlyOwner public {
    if (newOwner != address(0)) owner = newOwner;
  }

  /// @notice Transfer ownership (internal, no modifier)
  function transferOwnershipInternal(address newOwner) internal {
    if (newOwner != address(0)) owner = newOwner;
  }
}