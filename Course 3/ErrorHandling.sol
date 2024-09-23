// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Volleyball {
    
    function gameStatus(uint teamA, uint teamB) public pure {

        //Checks if one team has already reached 25
        if(teamA < 25 && teamB < 25) {
            //Checks if both teams ties at 24
            if (teamA == 24 && teamB == 24){
                revert("Deuce: Game cannot finish yet.");
            }
            revert("No one has reached 25. Game is not yet done.");
        }


        // Checks if one of the teams has won by more than 1 point
        require((teamA >= 24 && teamA == teamB + 2) || (teamB >= 24 && teamB == teamA + 2),
                "No one has won the game yet. A team must be ahead by at least 2 points after a deuce.");
    }

    int public team1 = -1;
    int public team2 = 2;

    function isNegative() public view {
        //Ensures there is no negative number in the system
        assert(team1 >= 0 && team2 >= 0);
    }
}
