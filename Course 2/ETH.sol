// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;


contract MyLeague {

    // public variables here
    string public leagueName = "Premier Volleyball League";
    string public leagueAbbrv = "PVL";
    uint public totalTeams = 0;

    // mapping variable here
    mapping(address => uint) public listOfTeams;


    // mint function
    function mint (address _address, uint _teams) public {
        totalTeams += _teams;
        listOfTeams[_address] += _teams;
        
    }

    // burn function
    function burn (address _address, uint _teams) public {
        if (listOfTeams[_address] >= _teams){
            totalTeams -= _teams;
            listOfTeams[_address] -= _teams;
        }
    }

}
