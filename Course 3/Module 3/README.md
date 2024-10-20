# Project Title

VolleyToken 

## Description

VolleyToken is an ERC20 token built using the OpenZeppelin library, designed to represent a points system for volleyball coaches and players. In this system, the coach can mint tokens (points) for players, representing their performance or progression 
towards making the starting lineup. Players can transfer points to each other or burn points to simulate penalties or lost opportunities. The contract follows the ERC20 token standard and adds volleyball-themed functionality, such as the ability to mint and burn points 
exclusively by the coach.

## Getting Started

### Installing

* Clone or download the source code from the repository.
* Open the Remix IDE to compile and deploy the Solidity smart contract.
* Use the OpenZeppelin ERC20 contract from the following link:
  ```
  https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol
  ```

### Executing program

* Select the correct compiler version (at least 0.8.13 or above)
* Compile the code to ensure there are no syntax errors.
* Deploy the contract by specifying the name and symbol for your token in the constructor
* Minting Points: The coach (contract owner) can mint tokens for players using the mintPoints function. This function accepts the player's address and the amount of tokens to be minted.
* Burning Points: Any player can burn their own points using the burnPoints function. This could simulate penalties, where points are deducted for mistakes or fouls.
* Transferring Points: Players can transfer points (tokens) to each other using the inherited ERC20 transfer function. This facilitates point exchanges between players.

## Help

* Common Errors: If you encounter "insufficient points" or "transaction reverted" issues, check whether the sender has enough points (tokens) before executing transfers or burns.
* Compiler Issues: Ensure you're using the correct compiler version (0.8.13 or above). If you encounter issues with compiler versions, update your Remix IDE settings to use the latest Solidity version.


## Authors

Arjen Catherine P. Molina

202111002@fit.edu.ph


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
