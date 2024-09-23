# Volleyball Scoring System

This is a Solidity-based smart contract that simulates a basic volleyball game scoring system. The contract checks the current status of a volleyball game based on the score and ensures the winning team meets the necessary conditions. It also includes an additional feature to prevent negative numbers from being stored as team scores.

## Description

The Volleyball smart contract allows users to input scores for two teams (teamA and teamB) and checks the current game status based on standard volleyball scoring rules. Specifically, it checks:
* If any team has reached 25 points.
* If the game is tied at 24 (Deuce).
* If one team has won the game by being ahead by at least 2 points.
Additionally, the contract prevents negative scores by asserting that no team score is negative.

## Getting Started

### Installing

To interact with this contract, you need a Solidity-compatible environment like Remix (online IDE):

* Clone or download this contract file.
* Open the file in your Solidity environment.

### Executing program

* After deployment, you can call the gameStatus(uint teamA, uint teamB) function to check the current game status based on team scores.

Example:
```
gameStatus(24, 24);
```
This will revert with the message: "Deuce: Game cannot finish yet." because both teams are tied at 24.

* Call the isNegative() function to verify that the team scores are non-negative.


## Help

* If you encounter issues with function execution or errors like "revert" in Remix, double-check that the input parameters are correctly passed to the functions.
* Ensure that Solidity compiler version ^0.8.13 or higher is used to avoid compatibility issues.


## Authors

Arjen Catherine P. Molina

202111002@fit.edu.ph


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
