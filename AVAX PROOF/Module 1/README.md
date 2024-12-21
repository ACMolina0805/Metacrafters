# Solidity ERC20 Token on Avalanche Subnet

A simple implementation of an ERC20 token with deployment on an Avalanche subnet using the Avalanche CLI on Linux.

## Description

This project demonstrates the creation and deployment of a custom ERC20 token using Solidity. The token includes essential ERC20 functionalities such as transferring tokens, approving allowances, and minting or burning tokens. It also integrates the Avalanche CLI to create and deploy a custom blockchain subnet on the Avalanche network. This setup allows for token management in a scalable and customizable environment.

## Getting Started

### Installing

* Set Up Avalanche CLI:
  Follow the official Avalanche CLI installation guide to install the CLI on your Linux system.
* Install Dependencies:
  Ensure Node.js, npm, and MetaMask are installed for development and testing.
  
### Executing program

* Create an Avalanche Subnet
  ```
  avalanche subnet create [subnet name]

  ```
* Deploy the Subnet
  ```
  avalanche subnet deploy [subnet name]

  ```
* Deploy the ERC20 Contract
* Mint tokens using the mint function.
* Transfer tokens using the transfer function.
* Burn tokens to reduce the total supply using the burn function.

## Help

For common issues:

* Ensure Avalanche CLI is correctly installed and added to the system path.
* Verify that the subnet deployment succeeded with:
```
avalanche blockchain describe [subnet name]
```
* Check the Solidity contract for syntax errors before deploying.

## Authors

Arjen Catherine P. Molina
202111002@fit.edu.ph


## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
