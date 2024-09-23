Here’s a combined **README** file for both the **TodoList Smart Contract** and the **React Frontend**:

---

# TodoList DApp

This is a decentralized application (DApp) that allows users to manage a to-do list on the Ethereum blockchain. The project includes a **TodoList** smart contract for handling tasks on-chain and a **React frontend** to interact with the contract.

## Features

- **Add tasks** to the to-do list.
- **Mark tasks as completed**.
- **View the task list** with the current status of each task.

## Prerequisites

To run this DApp, you will need:

- **Node.js** and **npm** installed.
- **MetaMask** or another web3-compatible wallet.
- A deployed instance of the **TodoList** smart contract.
- An Ethereum development environment such as Hardhat, Truffle, or Remix.

## Smart Contract Overview

The **TodoList** smart contract manages the to-do list on the blockchain. It allows users to:

- Add tasks using the `addTask` function.
- Mark tasks as completed using the `completeTask` function.
- Retrieve tasks and their completion statuses using the `getTask` function.

### Contract Functions:

1. **addTask(string \_task)**: Adds a new task to the list.
2. **completeTask(uint \_index)**: Marks a task as completed by its index.
3. **getTask(uint \_index)**: Returns the task and its completion status.
4. **getTaskCount()**: Returns the total number of tasks.

### Deploy

```shell
$ forge script script/TodoList.s.sol:TodoListScript--rpc-url <your_rpc_url> --private-key <your_private_key> --broadcast
```

## React Frontend Overview

The React frontend interacts with the **TodoList** smart contract using **ethers.js**. It allows users to add tasks, mark them as completed, and view the list of tasks with their completion status.

### Setup Instructions:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AbelOsaretin/Meta_Crafter_Avax_Lesson_Two.git

   cd frontend
   ```

2. **Install Dependencies**:
   Install the required dependencies for the React frontend:

   ```bash
   yarn
   ```

3. **Configure Contract Address**:
   In the `App.js` file, replace `YOUR_CONTRACT_ADDRESS` with the deployed address of your **TodoList** smart contract.

4. **Run the Frontend**:
   Start the React development server:

   ```bash
   yarn start
   ```

5. **Interact with the DApp**:
   Open your browser at `http://localhost:3000`, connect your MetaMask to the appropriate network, and interact with the to-do list.

### How to Use:

- **Add Task**: Enter a task in the input field and click **Add Task**.
- **Mark Task as Completed**: Click on **Complete** next to the task to mark it as done.
- **View Tasks**: All tasks are displayed with their status (completed tasks are shown with a strikethrough).

## Tech Stack:

- **Solidity**: Smart contract development language.
- **Ethers.js**: JavaScript library for interacting with the Ethereum blockchain.
- **React**: Frontend JavaScript framework for building the user interface.
- **MetaMask**: Web3 wallet for interacting with the blockchain.

## License

This project is licensed under the MIT License.

---

By following the steps in this README, you should be able to deploy the smart contract and run the React frontend to interact with it.
