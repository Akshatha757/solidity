// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DFX {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can access");
        _;
    }

    function accessApplication() public view onlyOwner returns (bool) {
        return true;
    }
}
