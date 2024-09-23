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

- **Add Task**: Enter a new task in the input field and click **Add Task**.
- **Complete Task**: Click on the **Complete** button next to any task to mark it as done.
- **View Tasks**: All tasks (completed or not) are listed, and completed tasks will be struck through.

---

By following the steps in each README file, you should be able to interact with the TodoList contract and its frontend.
