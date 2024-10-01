# TodoList React Frontend

This is a simple React frontend application to interact with the **TodoList** smart contract. Users can add tasks, mark them as completed, and retrieve the list of tasks.

## Features

- Add new tasks to the to-do list.
- Mark tasks as completed.
- Display the list of tasks with their statuses.

## Prerequisites

To run this application, you need:

- **Node.js** and **npm** installed.
- **MetaMask** extension or any web3-compatible wallet for interacting with the Ethereum blockchain.
- A deployed instance of the `TodoList` smart contract.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AbelOsaretin/Meta_Crafter_Avax_Lesson_Two.git

   cd frontend
   ```

2. **Install Dependencies**:
   Install the necessary dependencies for the React project:

   ```bash
   yarn
   ```

3. **Configure the Contract Address**:
   In the `App.js` file, replace `YOUR_CONTRACT_ADDRESS` with the deployed address of the `TodoList` contract.

4. **Start the Application**:
   Run the following command to start the React app:

   ```bash
   yarn start
   ```

5. **Interact with the Contract**:
   Open your browser at `http://localhost:3000` and make sure your MetaMask is connected to the correct network. You can now add tasks, mark them as completed, and view the list of tasks.

## How to Use

This will launch the app in your default browser.

### Step 1: Connect Your Wallet

Once the application is running, you can interact with it:

1. **Connect Wallet**: Click on the "Connect Wallet" button to connect your MetaMask wallet. Once connected, the button will display your wallet address.

### Step 2: Deposit and Withdraw Funds

- **Deposit Ether**: Enter an amount in ETH and click the "Deposit Ether" button to deposit Ether into the contract.
- **Deposit ERC20**: Enter an amount of ERC20 tokens and click the "Deposit ERC20" button to deposit tokens into the contract.
- **Withdraw Ether**: Click the "Withdraw Ether" button to withdraw your Ether from the contract.
- **Withdraw ERC20**: Click the "Withdraw ERC20" button to withdraw your ERC20 tokens from the contract.

### Step 3: Check Balances

- **Ether Balance**: Click the "Get Ether Balance" button to view the Ether balance in the contract.
- **ERC20 Balance**: Click the "Get ERC20 Balance" button to view the ERC20 token balance in the contract.

---

By following the steps in each README file, you should be able to interact with the TodoList contract and its frontend.
