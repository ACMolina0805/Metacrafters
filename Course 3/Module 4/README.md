Here’s the `README.md` file based on your template:

---

# **Volleyball Draft System with DegenToken**

## **Overview**  
The Volleyball Draft System is a blockchain-based application designed for managing a fantasy volleyball draft using the DegenToken cryptocurrency. Users can mint, redeem, and manage tokens to draft their favorite players into their teams.

---

## **Description**  
This project is built on the Ethereum blockchain using Solidity and implements the ERC-20 token standard for the DegenToken (DGN). Players are represented as purchasable assets, each with a defined name and token price. Users can mint tokens, view available players, and redeem tokens to "purchase" players. The contract ensures secure transactions through token burning and provides a user-friendly way to manage redeemed players. The system demonstrates the potential of blockchain in gamified sports management.

---

## **Getting Started**  

### **Installing**  
1. Clone this repository to your local machine.  
   ```bash
   git clone https://github.com/yourusername/volleyball-draft-system.git
   ```  
2. Open the project in Remix IDE (https://remix.ethereum.org).  
3. Ensure you have MetaMask installed for deploying and interacting with the smart contract.

---

### **Executing Program**  

#### **Deployment:**  
1. Open Remix IDE and create a new Solidity file (e.g., `DegenToken.sol`).  
2. Paste the smart contract code into the file.  
3. Select the Solidity compiler version `0.8.18` and compile the contract.  
4. In the *Deploy & Run Transactions* tab, choose an environment (e.g., "Injected Provider" for MetaMask or "Remix VM").  
5. Deploy the contract. Once deployed, the contract instance will appear in Remix.

#### **Usage:**  
1. **Mint Tokens:**  
   - Use the `mint` function to allocate tokens to a user. 

2. **View Draft Players:**  
   - Use the `showDraftPlayers` function with the player ID (1 to 4) to check the name and price of a player

3. **Redeem Tokens:**  
   - Call the `redeemTokens` function with the player ID to purchase a player. Ensure your wallet has enough Degen Tokens. 

4. **View Redeemed Players:**  
   - Call the `getRedeemedPlayers` function to retrieve the list of players redeemed by the user.

---

## **Help**  
If you encounter issues, ensure the following:  
- The player ID used in `showDraftPlayers` or `redeemTokens` is between 1 and 4.  
- You have sufficient Degen Tokens in your wallet to redeem a player.  
- The Solidity compiler version is set to `0.8.18` in Remix.

For further debugging, use the Remix console for logs and error messages.

---

## **Authors**  
Arjen Catherine Molina
202111002@fit.edu.ph

---

## **License**  
This project is licensed under the MIT License - see the `LICENSE.md` file for details.  
