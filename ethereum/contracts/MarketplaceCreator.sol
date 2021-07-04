// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Marketplace.sol";

/// @title Factory for marketplaces
/// @notice Is used for deploying a marketplace
contract MarketplaceCreator {
    address public marketplace;

    /// @notice Call function for creation
    constructor() {
        createMarketplace();
    }

    /// @notice Create and save marketplace
    function createMarketplace() private {
        address newMarketplace = address (
            new Marketplace(msg.sender)
        );
        marketplace = newMarketplace;
    }
}