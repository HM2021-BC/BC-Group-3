// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Artwork.sol";
import "./Ownable.sol";

contract Marketplace is Ownable{
    address[] public artworks;

    constructor(address _owner) public {
        owner = _owner;
    }

    function registerArtwork(string memory _artworkName, string memory _artworkUrl) public payable {
        require(msg.value == 10 wei, 'Need to send a fee of 10 wei.');

        address payable payableOwner = address(uint160(owner));
        payableOwner.transfer(msg.value);

        Artwork artwork = new Artwork(_artworkName, _artworkUrl);
        artwork.transferOwnership(msg.sender);
        artworks.push(address(artwork));
    }

    function getArtworks() public view returns(address[] memory) {
        return artworks;
    }
}