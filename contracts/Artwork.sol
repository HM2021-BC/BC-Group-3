// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Marketplace.sol";

contract Artwork is Ownable {

    string public imageHash;
    string public imageUrl;
    address public author;

    constructor(string memory _name, uint _price, bool _forSale, string memory _imageHash, string memory _imageUrl, address _author, address _marketplaceAddress, Marketplace _marketplace) public {
        name = _name;
        price = _price;
        forSale = _forSale;
        owner = msg.sender;
        imageHash = _imageHash;
        imageUrl = _imageUrl;
        author = _author;
        marketplaceAddress = _marketplaceAddress;
        marketplace = _marketplace;    
    }
}