// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Artwork.sol";

contract Marketplace {

    struct UserInfo { 
        address paymentAddress;
        int currentBalance;
    }

    UserInfo userInfoA;

    UserInfo userInfoB;

    Artwork artwork;

    constructor(address paymentAddressA, int currentBalanceA, address paymentAddressB, int currentBalanceB) public {
        if (paymentAddressA == paymentAddressB) {
            revert();
        }

        userInfoA.paymentAddress = paymentAddressA;
        userInfoA.currentBalance = currentBalanceA;

        userInfoB.paymentAddress = paymentAddressB;
        userInfoB.currentBalance = currentBalanceB;
    }

    function checkBalance(address paymentAddressBuyer, int price) public view returns (bool success) {
        if (paymentAddressBuyer == userInfoA.paymentAddress && price <= userInfoA.currentBalance) {
            return true;
        }

        if (paymentAddressBuyer == userInfoB.paymentAddress && price <= userInfoB.currentBalance) {
            return true;
        }

        return false;
    }

    function updateBalance(address paymentAddressBuyer, address paymentAddressSeller, int price) public {
        if (paymentAddressSeller == userInfoA.paymentAddress) {
            userInfoA.currentBalance += price;
        }

        if (paymentAddressBuyer == userInfoB.paymentAddress) {
            userInfoB.currentBalance -= price;
        }
    }

    function listArtwork(string memory name, int price) public {
        artwork = new Artwork(name, price, msg.sender, address(this));
    }
}