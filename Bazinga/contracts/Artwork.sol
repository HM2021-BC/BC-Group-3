// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Marketplace.sol";

contract Artwork {

    bool isSold;

    address public paymentAddressSeller;
    address public marketplaceAddress;
    string public name;
    int public price;

    constructor(string _name, int _price, address _paymentAddressSeller, address _marketplaceAddress) {
        paymentAddressSeller = _paymentAddressSeller;
        marketplaceAddress = _marketplaceAddress;
        name = _name;
        price = _price;
    }

    function buyArtwork() public {

        if (paymentAddressSeller == msg.sender) {
            revert();
        }

        Marketplace marketplace = Marketplace(marketplaceAddress);

        if (!marketplace.checkBalance(msg.sender, price)) {
            revert();
        }

        marketplace.updateBalance(paymentAddressSeller, msg.sender, price);

    }
}