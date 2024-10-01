// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TodoList} from "../src/TodoList.sol";

contract TodoListScript is Script {
    TodoList public todolist;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        todolist = new TodoList();

        console.log("TodoList Contract Address is :", address(todolist));

        vm.stopBroadcast();
    }
}
