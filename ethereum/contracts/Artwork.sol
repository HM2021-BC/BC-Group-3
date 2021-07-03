// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Marketplace.sol";
import "./Ownable.sol";

contract Artwork is Ownable {
    string public artworkName;
    string public artworkUrl;
    bytes32 public artworkHash;
    uint public artworkPrice;
    bool public isArtworkForSale;

    constructor(string memory _artworkName, string memory _artworkUrl) Ownable() {
        artworkName = _artworkName;
        artworkUrl = _artworkUrl;
        artworkHash = keccak256(abi.encode(_artworkUrl));
        isArtworkForSale = false;
    }

    function sellArtwork (uint _artworkPrice) public onlyOwner {
        artworkPrice = _artworkPrice;
        isArtworkForSale = true;
    }

    function buyArtwork() public payable {
        require(owner != msg.sender, 'Owner can not buy their own artwork.');
        require(isArtworkForSale, 'Artwork is currently not for sale.');
        require(msg.value == artworkPrice, 'Need to send the exact price.');

        payable(owner).transfer(msg.value);

        transferOwnership(msg.sender);
        isArtworkForSale = false;
    }
}