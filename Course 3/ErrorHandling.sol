// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Volleyball {

    uint public teamA = 0;
    uint public teamB = 0;

    function pointSystem(uint point1, uint point2) public {
        // Checks if one team has already reached 25
        if (teamA >= 25 || teamB >= 25) {
            revert("Cannot add more points! Game already finished.");
        }
        
        teamA += point1;
        teamB += point2;

    }
    
    function gameStatus() public view {

        // Checks if one of the teams has won by more than 1 point when a deuce occurs.
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
