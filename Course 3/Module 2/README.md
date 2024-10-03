# Volleyball Game Tracker

This project is a blockchain-based volleyball game tracker built with Solidity and React. The primary goal is to allow referees (contract owners) to manage and track volleyball game sets in a decentralized manner. The contract ensures that only the owner can modify the number of sets or reset the game.

## Description

The Volleyball Game Tracker project allows referees to add sets to the game and reset the game once it is over. The contract is deployed on the Ethereum blockchain using Solidity, and the front-end is built with React to interact with the contract. The referee (contract owner) can add sets to a volleyball match but cannot add more than 3 sets, as the game is considered finished after 3 sets. The referee can also reset the game back to 0 sets at any time. The application connects to the user's MetaMask wallet to manage accounts and interact with the smart contract on the blockchain.
  
## Getting Started

### Installing

* Clone the project from the GitHub repository.
* Navigate to the project directory in your terminal.

### Modifications

No modifications to the files are necessary to run the basic setup. Ensure that MetaMask is installed and configured properly in your browser.

### Executing program

After cloning the GitHub repository, follow these steps to run the program:

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. Typically at http://localhost:3000/

## Help

* Ensure that MetaMask is installed in your browser and connected to the local Hardhat network.
* If you face issues with MetaMask, try resetting the account or reinstalling the extension.
* Make sure all terminals are running the correct commands and that the local blockchain is active.


## Authors

Arjen Catherine P. Molina

202111002@fit.edu.ph


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
