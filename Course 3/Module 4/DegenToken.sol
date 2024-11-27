// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";

contract DegenToken is ERC20, Ownable, ERC20Burnable {

    struct Player {
        string name;
        uint256 price;
    }

    mapping(uint8 => Player) public draftPlayer;
    mapping(address => Player[]) private redeemedPlayer;

    constructor() ERC20("Degen", "DGN") {
        draftPlayer[1] = Player("Detdet Pepito", 50);
        draftPlayer[2] = Player("Bella Belen", 100);
        draftPlayer[3] = Player("Alyssa Solomon", 80);
        draftPlayer[4] = Player("Angel Canino", 75);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    function showDraftPlayers(uint8 playerId) public view returns (string memory, uint256) {
        require(playerId > 0 && playerId <= 4, "Invalid player ID");
        Player memory player = draftPlayer[playerId];
        return (player.name, player.price);
    }

    function redeemTokens(uint8 playerId) external {
        require(playerId > 0 && playerId <= 4, "Invalid player ID");
        Player memory player = draftPlayer[playerId];
        require(balanceOf(msg.sender) >= player.price, "You do not have enough Degen Tokens to buy this player.");
        
        _burn(msg.sender, player.price);
        
        redeemedPlayer[msg.sender].push(player);

        emit PlayerRedeemed(msg.sender, player.name, player.price);
    }

    function getRedeemedPlayers() external view returns (Player[] memory) {
        return redeemedPlayer[msg.sender];
    }

    event  PlayerRedeemed(address indexed player, string playerName, uint256 amount);
}
