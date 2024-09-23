import React from "react";
import { Contract } from "ethers";

import { abi } from "./library/abi";
import "./App.css";

const { ethers } = require("ethers");

const contractAddress = "0x059dE6A3FF09631AeB10A13Ac5dbEF87eE88e176";

function App() {
  let signer;
  let provider;
  let tasks = []; // Task array to store the tasks

  async function connectWallet() {
    try {
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const walletAddress = await signer.getAddress(); // Get the connected wallet address
        getAllTask();
        console.log(provider);

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

  async function addTask() {
    try {
      const addTaskText = document.getElementById("addTask").value;

      const contract = new Contract(contractAddress, abi, signer);
      const transaction = await contract.addTask(addTaskText);
      await transaction.wait();

      console.log("New Task: ", addTaskText);
      getAllTask();
      alert("New Task Added: " + addTaskText);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  async function getAllTask() {
    try {
      const contract = new Contract(contractAddress, abi, signer);
      const totalTasks = await contract.getTaskCount();
      const convTotalTasks = Number(totalTasks);

      tasks = [];
      for (let i = 0; i < convTotalTasks; i++) {
        const task = await contract.getTask(i);
        tasks.push({ text: task[0], completed: task[1] });
      }
      renderTasks(); // Call function to render tasks
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  function renderTasks() {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = ""; // Clear the list before re-rendering

    if (tasks.length > 0) {
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        const spanText = document.createElement("span");
        spanText.textContent = task.text;

        const status = document.createElement("span");
        status.className = "status";
        status.textContent = task.completed ? " (Completed)" : " (Incomplete)";

        const completeButton = document.createElement("button");
        completeButton.className = "complete-button";
        completeButton.textContent = "Complete";
        completeButton.onclick = () => completeTask(index);

        li.appendChild(spanText);
        li.appendChild(status);
        li.appendChild(completeButton);
        taskList.appendChild(li);
      });
    } else {
      const noTasksLi = document.createElement("li");
      noTasksLi.textContent = "No tasks found";
      taskList.appendChild(noTasksLi);
    }
  }

  async function completeTask(index) {
    try {
      const contract = new Contract(contractAddress, abi, signer);
      const transaction = await contract.completeTask(index);
      await transaction.wait();
      alert("Task Completed: " + tasks[index].text);
      getAllTask();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Todo List DApp</h1>

        <button onClick={connectWallet} className="wallet-button">
          Connect Wallet
        </button>
      </header>
      <br />

      <div className="task-input">
        <input id="addTask" type="text" placeholder="New task..." />
        <br />
        <br />

        <button onClick={addTask}>Add Task</button>
        <br />
        <br />
        <button onClick={getAllTask}>Get All </button>
      </div>
      <br />

      <h2>Task List</h2>
      <ul className="task-list"></ul>
    </div>
  );
}

export default App;
