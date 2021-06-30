// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Artwork.sol";
import "./Ownable.sol";

contract Marketplace {

    Ownable[] private ownables = [];
    Ownable[] public forSale = [];

    constructor() public {

    }
    
    //register new Ownable item in the marketplace
    function registerOwnable(Ownable ownable) private {
        if (msg.sender == ownable.owner){
            ownables.add(ownable);
        }
    }

    //generate and register new Artwork item in the marketplace
    function registerArtwork(string memory _name, int _price, string memory _imageHash, string memory _imageUrl, address _author) public {
        Artwork artwork = new Artwork(_name, _price, _imageHash, _imageUrl, _author);        
        registerOwnable(artwork);
    }

    //declares ownable item for sale
    function declareForSale(Ownable ownable, uint price) public {
        if (msg.sender == ownable.owner){
            ownable.upForSale(price);
            forSale.add(ownable);
        }
    }

    //Buyer buys ownable
    function buyOwnable(Ownable ownable) public {
        if(msg.sender == ownable.owner){
            revert();
        }
        if(msg.sender != ownable.owner) {
            uint price = forSale[ownable];
            if (!checkBalance(msg.sender, price)){
                revert();  
            } else {
                updateBalance(msg.sender, ownable.owner, price);
                ownable.transferOwnership(msg.sender);
                forSale.remove(ownable);
                ownable.price = 0;
            }
        }
    }

    //checks the address balance 
    function checkBalance(address paymentAddressBuyer, uint price) public view returns (bool success) {
        if (price <= paymentAddressBuyer.balance) {
            return true;
        }
        return false;
    }

    //updates the addresses balance
    function updateBalance(address paymentAddressBuyer, address paymentAddressSeller, uint price) public {
        paymentAddressSeller.balance += price;
        paymentAddressBuyer.balance -= price + (price * 0.01);
        address(this).balance += (price * 0.01);
    }
}