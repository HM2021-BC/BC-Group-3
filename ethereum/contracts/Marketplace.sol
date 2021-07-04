// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Artwork.sol";
import "./Ownable.sol";

/// @title Platform for registrating, buying and selling artworks 
/// @notice Is created by the marketplace creator
contract Marketplace is Ownable{
    address[] public artworks;
    uint constant public registrationFee = 0.01 ether;

    /// @notice Is used for marketplace and artwork
    constructor(address _owner) {
        owner = _owner;
    }

    /// @notice Register new artwork
    function registerArtwork(string memory _artworkName, string memory _artworkUrl) public payable {
        require(msg.value == registrationFee, 'Need to send a fee of 0.01 ether.');

        payable(owner).transfer(msg.value);

        Artwork artwork = new Artwork(_artworkName, _artworkUrl);
        artwork.transferOwnership(msg.sender);
        artworks.push(address(artwork));
    }

    /// @notice Get all registered artworks
    function getArtworks() public view returns(address[] memory) {
        return artworks;
    }
}