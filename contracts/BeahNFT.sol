// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract BeahNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("BeahNFT", "BNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://fuchsia-labour-armadillo-42.mypinata.cloud/ipfs/QmV3mBj7vPDmo8kF8WXujMjps65ABBrucYRuegyXMSWGDG/";
    }

    function promptDescription() external pure returns (string memory) {
        return "AI Inspired Couch Designs";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}