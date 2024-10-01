# Investment Contract Frontend and Smart Contract

## Overview

This project consists of a smart contract and a frontend application that allow users to invest either Ether or ERC20 tokens in an investment contract, withdraw their deposits along with earned interest, and view their balance.

### Smart Contract (`Investment.sol`)

The `Investment` smart contract is an Ethereum-based contract that allows:

- Users (Investors) to deposit Ether or ERC20 tokens.
- Investors to withdraw their Ether or ERC20 deposits along with interest earned over time.
- Admins to manage investors.
- A SuperAdmin to manage admins and set global interest rates.

The contract tracks user deposits and calculates rewards based on the duration of the investment.

### Frontend (`App.js`)

The frontend is built using React and ethers.js to interact with the smart contract. It provides an easy-to-use interface for investors to:

- Connect their Ethereum wallet (e.g., MetaMask).
- Deposit Ether or ERC20 tokens.
- Withdraw their deposits.
- Check their balance of Ether and ERC20 tokens.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed to run the frontend application.
- **MetaMask**: An Ethereum wallet browser extension for testing the application.
- **Ethereum Testnet**: Deploy the smart contract to a test network (like Goerli or Sepolia) or a local blockchain (e.g., Ganache).
- **ERC20 Token**: You must specify an ERC20 token's address when deploying the contract.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AbelOsaretin/Meta_Crafter_Avax_Lesson_Two.git
cd frontend
```

### 2. Install Dependencies

```bash
yarn
```

### 3. Configure Smart Contract

Ensure that the `contractAddress` in the frontend matches the deployed address of your `Investment` contract.

### 4. Run the Frontend

```bash
yarn start
```

This command will start the frontend React application and open it in your browser.

## Smart Contract Overview

The `Investment.sol` smart contract includes the following key functionalities:

### Contract Structure

- **State Variables**:

  - `BalancesEthers` and `BalancesERC20`: Stores each investor's deposited Ether or ERC20 tokens.
  - `WithdrawnDepositAndRewardEthers` and `WithdrawnDepositAndRewardERC20`: Keeps track of how much an investor has withdrawn including interest.
  - `DepositTimeEthers` and `DepositTimeERC20`: Timestamp of when the user made the deposit, used to calculate interest.
  - `interestRate`: Defines the rate of interest, which is set by the SuperAdmin.

- **Roles**:
  - **SuperAdmin**: Has the highest privilege, capable of managing admins and setting the global interest rate.
  - **Admin**: Has the ability to add or remove investors.
  - **Investor**: Users who can deposit Ether or ERC20 tokens and withdraw their investments.

### Functions

1. **setAdmin(address \_admin)**: Assigns admin privileges.
2. **addInvestor(address \_investor)**: Adds a new investor.
3. **addInvestmentEthers()**: Investors can deposit Ether.
4. **addInvestmentERC20(uint256 \_amount)**: Investors can deposit ERC20 tokens.
5. **withdrawInvestmentEthers()**: Allows investors to withdraw their Ether and interest.
6. **withdrawInvestmentERC20()**: Allows investors to withdraw their ERC20 tokens and interest.
7. **calculateRewardEthers(address \_user)** and **calculateRewardERC20(address \_user)**: Internal functions that calculate the interest earned by investors.
8. **getInvestmentEthers()** and **getInvestmentERC20()**: Functions to get the investor's balance.
9. **setInterestRate(uint256 \_interestRate)**: Sets the interest rate for investments.

## Frontend Overview

The frontend interacts with the smart contract through ethers.js and provides the following functionality:

1. **Connect Wallet**: Connects to the user's Ethereum wallet using MetaMask.
2. **Deposit Ether**: Allows the user to deposit Ether into the investment contract.
3. **Deposit ERC20 Tokens**: Allows the user to deposit ERC20 tokens into the contract.
4. **Withdraw Ether**: Allows the user to withdraw their Ether and interest from the contract.
5. **Withdraw ERC20 Tokens**: Allows the user to withdraw their ERC20 tokens and interest from the contract.
6. **Check Balances**: The user can check their Ether or ERC20 balance in the contract.

### Example UI Structure

- **Connect Wallet**: Button to connect to MetaMask.
- **Deposit Ether**: Input field to enter the Ether amount and a button to deposit.
- **Deposit ERC20**: Input field to enter the ERC20 token amount and a button to deposit.
- **Withdraw Ether**: Button to withdraw Ether and interest.
- **Withdraw ERC20**: Button to withdraw ERC20 tokens and interest.
- **Check Balances**: Buttons to check and display the user's balance for Ether and ERC20 tokens.

## Smart Contract Deployment

1. Compile the smart contract using a Solidity compiler (like Remix or Hardhat).
2. Deploy the contract to a testnet (e.g., Goerli, Sepolia) or a local blockchain (Ganache).
3. Note the deployed contract address and update the `contractAddress` in the `App.js` file.

## Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to connect your MetaMask wallet.
2. **Deposit Ether**: Enter the amount of Ether you want to deposit and click "Deposit Ether".
3. **Deposit ERC20**: Enter the amount of ERC20 tokens you want to deposit and click "Deposit ERC20".
4. **Withdraw Ether/Token**: Use the respective buttons to withdraw your investment and interest.
5. **Check Balances**: View your current Ether and ERC20 balance stored in the contract.

## License

This project is licensed under the MIT License.

---

Feel free to modify this `README.md` to fit your project's unique requirements.
