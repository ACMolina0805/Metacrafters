# My League

The My League contract manages a league system where teams can be added (minted) or removed (burned). This contract keeps track of teams by mapping addresses to the number of teams associated with them.



## Description

My League is a Solidity contract designed to manage team counts in "Premier Volleyball League" (PVL). Each address can hold many teams, and the contract provides functions to mint (add) or burn (remove) teams from a specific address. The total number of teams is also tracked globally.

## Getting Started

### Installing

* Ensure you have a Solidity development environment set up, such as Remix or Hardhat.
* Clone or copy the contract code into your development environment.

### Executing program

* Deploy the smart contract to an Ethereum-compatible network.
* Interact with the contract using the following functions:

1. Adds teams to the specified address and updates the total team count.
```
mint(address _address, uint _teams)
```
2. Removes teams from the specified address, ensuring it has enough teams to burn.
```
burn(address _address, uint _teams)
```

* Steps in Remix:
  1. Paste the contract code into a new Solidity file.
  2. Compile the contract.
  3. Deploy it to a test network.
  4. Use the mint or burn functions with appropriate parameters.


## Help

* If the total number of teams doesn't update as expected, ensure that the address has enough teams for the burn function to succeed.
* Make sure that your Solidity version is set to 0.8.18 in your environment to avoid version mismatch errors.


## Authors

Contributors names and contact info

Arjen Catherine P. Molina
202111002@fit.edu.ph


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
