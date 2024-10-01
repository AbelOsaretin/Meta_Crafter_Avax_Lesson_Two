import React from "react";
import { Contract } from "ethers";
import "./App.css";
import { abi } from "./library/abi";

const { ethers } = require("ethers");

const contractAddress = "0x87798d5f05298E4602F4D1649e8847C3fB1c3446";

function App() {
  let provider;
  let signer;

  // Connect to Ethereum wallet
  async function connectWallet() {
    try {
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        console.log(signer);
        const walletAddress = await signer.getAddress(); // Get the connected wallet address
        console.log(provider);
        console.log(walletAddress);

        // Change the button text to the wallet address
        const walletButton = document.querySelector(".wallet-button");
        walletButton.textContent = `Connected: ${walletAddress.slice(
          0,
          6
        )}...${walletAddress.slice(-4)}`;
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  async function depositEther() {
    const amount = document.getElementById("depositEtherAmount").value;
    const newAmount = ethers.parseEther(amount);

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call addInvestmentEthers without passing newAmount as an argument
      const transaction = await contract.addInvestmentEthers({
        value: newAmount,
      });

      await transaction.wait();
      alert("Ether deposited successfully!");
    } catch (error) {
      console.error("Error depositing Ether:", error);
    }
  }

  // Deposit ERC20 tokens into the contract
  async function depositERC20() {
    const amount = document.getElementById("depositERC20Amount").value;
    const newAmount = ethers.parseUnits(amount, 18);

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);
      const transaction = await contract.addInvestmentERC20(newAmount);
      await transaction.wait();
      alert("ERC20 tokens deposited successfully!");
    } catch (error) {
      console.error("Error depositing ERC20 tokens:", error);
    }
  }

  // // Withdraw Ether from the contract
  async function withdrawEther() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call addInvestmentEthers without passing newAmount as an argument
      const transaction = await contract.withdrawInvestmentEthers();

      await transaction.wait();
      alert("Ether withdrawn successfully!");
    } catch (error) {
      console.error("Error withdrawing Ether:", error);
    }
  }

  // // Withdraw ERC20 tokens from the contract
  async function withdrawERC20() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);
      const transaction = await contract.withdrawInvestmentERC20();
      await transaction.wait();
      alert("ERC20 tokens withdrawn successfully!");
    } catch (error) {
      console.error("Error withdrawing ERC20 tokens:", error);
    }
  }

  // // Get the Ether balance of the connected wallet
  async function getEtherBalance() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call the smart contract function to get the Ether balance
      const balance = await contract.getInvestmentEthers(); // This returns the balance in wei
      const formattedBalance = ethers.formatEther(balance); // Convert wei to Ether

      // Update the label with the returned balance
      document.getElementById(
        "etherBalanceLabel"
      ).textContent = `Ether Balance: ${formattedBalance} ETH`;
    } catch (error) {
      console.error("Error getting Ether balance:", error);
    }
  }

  // // Get the ERC20 balance of the connected wallet
  async function getERC20Balance() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call the smart contract function to get the Ether balance
      const balance = await contract.getInvestmentERC20(); // This returns the balance in wei
      const formattedBalance = ethers.formatUnits(balance, 18); // Convert wei to Ether

      // Update the label with the returned balance
      document.getElementById(
        "erc20BalanceLabel"
      ).textContent = `Token Balance: ${formattedBalance}`;
    } catch (error) {
      console.error("Error getting Ether balance:", error);
    }
  }

  // Render the UI

  return (
    <div className="container">
      <h1>Investment Contract</h1>
      <button onClick={connectWallet} className="wallet-button">
        Connect Wallet
      </button>
      <div>
        <h3>Deposit Ether</h3>
        <input
          type="text"
          id="depositEtherAmount"
          placeholder="Amount in ETH"
        />
        <button onClick={depositEther}>Deposit Ether</button>
      </div>
      <div>
        <h3>Deposit ERC20</h3>
        <input
          type="text"
          id="depositERC20Amount"
          placeholder="Amount in ERC20"
        />
        <button onClick={depositERC20}>Deposit ERC20</button>
      </div>
      <div>
        <h3>Withdraw Ether</h3>
        <button onClick={withdrawEther}>Withdraw Ether</button>
      </div>
      <div>
        <h3>Withdraw ERC20</h3>
        <button onClick={withdrawERC20}>Withdraw ERC20</button>
      </div>
      <div>
        <h3>Check Ether Balance</h3>
        <p id="etherBalanceLabel">Ether Balance: </p>
        <button onClick={getEtherBalance}>Get Ether Balance</button>
      </div>
      <div>
        <h3>Check ERC20 Balance</h3>
        <p id="erc20BalanceLabel">Token Balance: </p>
        <button onClick={getERC20Balance}>Get ERC20 Balance</button>
      </div>
    </div>
  );
}

export default App;
