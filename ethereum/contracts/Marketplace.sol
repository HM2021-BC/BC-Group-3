// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Artwork.sol";
import "./Ownable.sol";

contract Marketplace is Ownable{
    address[] public artworks;
    uint constant public registrationFee = 0.01 ether;

    constructor(address _owner) {
        owner = _owner;
    }

    function registerArtwork(string memory _artworkName, string memory _artworkUrl) public payable {
        require(msg.value == registrationFee, 'Need to send a fee of 0.01 ether.');

        payable(owner).transfer(msg.value);

        Artwork artwork = new Artwork(_artworkName, _artworkUrl);
        artwork.transferOwnership(msg.sender);
        artworks.push(address(artwork));
    }

    function getArtworks() public view returns(address[] memory) {
        return artworks;
    }
}