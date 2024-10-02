import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [sets, setSets] = useState(0);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  // Get the user's wallet
  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
      console.log("Ethereum wallet detected");
    } else {
      console.log("No Ethereum wallet detected");
      alert("Please install MetaMask!");
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  // Handle the connected account
  const handleAccount = (account) => {
    if (account.length > 0) {
      console.log("Account connected: ", account[0]);
      setAccount(account[0]);
    } else {
      console.log("No account found");
      alert("Please connect to MetaMask");
    }
  };

  // Connect the account to the wallet
  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    getATMContract();
  };

  // Get the contract instance
  const getATMContract = () => {
    if (!ethWallet) {
      console.log("Ethereum wallet not found");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
    console.log("Contract instance set:", atmContract);
  };

  // Fetch the current sets from the contract
  const getSets = async () => {
    if (atm) {
      try {
        const currentSets = await atm.sets(); // Fetch sets from contract
        console.log("Current sets from contract: ", currentSets.toNumber());
        setSets(currentSets.toNumber()); // Update state with fetched value
      } catch (error) {
        console.error("Error fetching sets: ", error);
        alert("Failed to fetch sets from contract");
      }
    } else {
      console.log("ATM contract not initialized yet");
    }
  };

  // Add sets to the game
  const addSets = async (numSets) => {
    if (atm) {
      try {
        console.log("Adding sets: ", numSets);
        const tx = await atm.addSets(numSets); // Trigger a transaction to add sets
        console.log("Transaction sent, waiting for confirmation...");
        await tx.wait(); // Wait for the transaction to be mined
        console.log("Transaction confirmed!");
        await getSets(); // Fetch the updated sets value from the contract
      } catch (error) {
        console.error("Error adding sets: ", error);
        alert(error.message);
      }
    } else {
      console.log("ATM contract not initialized yet");
    }
  };

  // Get the contract owner
  const getOwner = async () => {
    if (atm) {
      try {
        const owner = await atm.owner();
        console.log("Contract owner is: ", owner);
        return owner;
      } catch (error) {
        console.error("Error fetching owner: ", error);
        alert("Failed to fetch contract owner");
      }
    }
  };

  // Reset the game
  const resetGame = async () => {
    if (atm) {
      try {
        const owner = await getOwner();
        if (owner.toLowerCase() !== account.toLowerCase()) {
          alert("You are not the owner of this contract.");
          return;
        }

        const tx = await atm.gameReset(); // Trigger a transaction to reset the game
        console.log("Resetting game, waiting for confirmation...");
        await tx.wait(); // Wait for the transaction to be mined
        console.log("Game reset successfully");
        await getSets(); // Fetch the updated sets value from the contract
      } catch (error) {
        console.error("Error resetting the game: ", error);
        alert(error.message);
      }
    } else {
      console.log("ATM contract not initialized yet");
    }
  };

  // Initialize user interface
  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask in order to use this contract.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount}>Connect MetaMask Wallet</button>;
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Current Sets: {sets}</p>
        <button onClick={() => addSets(1)}>Add Set</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    );
  };

  // Fetch wallet and sets on component load
  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (atm) {
      getSets(); // Fetch the current sets value when contract is ready
    }
  }, [atm]);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Volleyball Score Tracker!</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
