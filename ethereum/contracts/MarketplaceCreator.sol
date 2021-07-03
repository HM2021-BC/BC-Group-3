// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Marketplace.sol";

contract MarketplaceCreator {
    address public marketplace;

    constructor() {
        createMarketplace();
    }

    function createMarketplace() private {
        address newMarketplace = address (
            new Marketplace(msg.sender)
        );
        marketplace = newMarketplace;
    }

    function getDeployedMarketplace() public view returns(address) {
        return marketplace;
    }
}