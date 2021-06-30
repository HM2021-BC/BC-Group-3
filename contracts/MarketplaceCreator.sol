// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Marketplace.sol";

contract MarketplaceCreator {
    address[] public marketplaces;

    function createMarketplace() public {
        address newMarketplace = address (
            new Marketplace()
        );
        marketplaces.push(newMarketplace);
    }

    function getDeployedMarketplaces() public view returns( address[] memory) { return marketplaces;} 
}