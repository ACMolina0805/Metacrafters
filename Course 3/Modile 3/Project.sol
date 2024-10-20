// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";

contract VolleyToken is ERC20 {
    address public coach;

    // Events for minting and burning points
    event PointsMinted(address indexed player, uint256 value);
    event PointsBurned(address indexed player, uint256 value);

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        coach = msg.sender; // Set the deployer as the coach
        // Mint initial tokens for the coach
        _mint(msg.sender, 100 * 10**uint(decimals()));
    }

    // Modifier to restrict functions to the coach only
    modifier onlyCoach() {
        require(msg.sender == coach, "Only the coach can perform this action");
        _;
    }

    // Mint new points (tokens) for a player (only the coach can call this)
    function mintPoints(address player, uint256 amount) public onlyCoach {
        require(player != address(0), "Cannot mint to the zero address");
        _mint(player, amount); // Mint tokens directly to the player
        emit PointsMinted(player, amount);
    }

    // Burn (lose) points from the sender's balance (e.g., penalties for fouls)
    function burnPoints(uint256 amount) public returns (bool) {
        require(balanceOf(msg.sender) >= amount, "Insufficient points to lose");

        _burn(msg.sender, amount);
        emit PointsBurned(msg.sender, amount);
        return true;
    }

    // Check the balance of a specific player
    function balanceOf(address player) public view override returns (uint256) {
        return super.balanceOf(player); // Call the inherited balanceOf function
    }
}
