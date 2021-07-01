// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Artwork.sol";
import "./Ownable.sol";

contract Marketplace {

    address payable public owner;

    Ownable[] public ownables;

    constructor(address payable _owner) public {
        owner = _owner;
    }
    
    //register new Ownable item in the marketplace
    function registerOwnable(Ownable ownable) private {
        if (msg.sender == ownable.owner()){
            ownables.push(ownable);
        }
    }

    //generate and register new Artwork item in the marketplace
    function registerArtwork(string memory _name, uint _price, bool _forSale, string memory _imageHash, string memory _imageUrl, address _author) public {
        Artwork artwork = new Artwork(_name, _price, _forSale, _imageHash, _imageUrl, _author, address(this), this);        
        registerOwnable(artwork);
    }

    //checks the address balance 
    function checkBalance(address paymentAddressBuyer, uint price) public view returns (bool success) {
        if (price <= paymentAddressBuyer.balance) {
            return true;
        }
        return false;
    }

    /*//updates the addresses balance
    function updateBalance(address payable paymentAddressBuyer, address payable paymentAddressSeller, uint price) public payable {
        paymentAddressSeller.transfer(price);
        paymentAddressBuyer.balance -= price + (price * 0.01);
        address(this).balance += (price * 0.01);
    }*/
}