// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Assessment {
    address payable public owner;
    uint public sets;

    constructor() {
        owner = payable(msg.sender);
    }

    function addSets(uint _sets) public {
        require(msg.sender == owner, "You are not authorized to add sets.");

        if (sets + _sets >= 4) {
            revert("Game finished! Cannot add more sets!");
        }

        sets += _sets; // update the state by adding sets
    }

    function gameReset() public {
        require(msg.sender == owner, "You are not the owner of this account");

        // Reset the game
        sets = 0;
    }
}
