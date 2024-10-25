# Project Title

VolleyToken 

## Description

VolleyToken is a smart contract built on the Ethereum blockchain using Solidity and the ERC20 token standard from OpenZeppelin. The system represents a volleyball team's point-based evaluation. The coach is the contract owner, and they have the exclusive right to mint new points (tokens) for players, reflecting their performance or contribution. Players can freely transfer points amongst themselves, representing teamwork and collaboration. They can also lose points, which could serve as penalties for in-game errors or poor performance.

This contract leverages the ERC20 standard, incorporating functionalities like minting, transferring, burning, and balance checking. It emits events like PointsMinted, PointsBurned, and PointsTransferred to maintain an on-chain record of the most important actions in the contract.

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
