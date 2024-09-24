# Volleyball Scoring System

This smart contract simulates a basic volleyball scoring system using Solidity. It allows for tracking the score of two teams, determines the game status, and prevents adding points once the game is finished. It also includes checks for preventing negative scores.
## Description

The Volleyball smart contract is designed to manage and verify volleyball game rules based on team scores:
* Point System: The contract tracks the points for two teams (teamA and teamB). Teams can gain points, but once a team reaches or exceeds 25 points, no more points can be added.
* Game Status: The contract checks whether one of the teams has won by leading by at least 2 points, ensuring that if the game is tied at 24 (Deuce), the winning team must gain a 2-point lead.
* Negative Score Prevention: The contract ensures that no negative scores are allowed for two placeholder variables team1 and team2.
  
## Getting Started

### Installing

To interact with this contract, you need a Solidity-compatible environment like Remix (online IDE):

* Clone or download this contract file.
* Open the file in your Solidity environment.

### Executing program

* After deployment, add points to teamA and teamB using the pointSystem(uint point1, uint point2) function.

Example:
```
pointSystem(5, 3);
```
This will add 5 points to teamA and 3 points to teamB.
Note: If a team reaches or exceeds 25 points, further points cannot be added, and the transaction will revert with the message "Cannot add more points! Game already finished."


* Use the gameStatus() function to check if a team has won. It ensures that a team must lead by 2 points after a deuce (when both teams reach 24).
* Call the isNegative() function to verify that the team scores are non-negative.


## Help

* If you encounter issues with function execution or errors like "revert" in Remix, double-check that the input parameters are correctly passed to the functions.
* Ensure that Solidity compiler version ^0.8.13 or higher is used to avoid compatibility issues.


## Authors

Arjen Catherine P. Molina

202111002@fit.edu.ph


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
