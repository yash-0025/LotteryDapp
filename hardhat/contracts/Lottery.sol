// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";


contract Lottery is VRFConsumerBase, Ownable {

    // Chainlink variables
    // Total amount of LINK to send with the request

    uint256 public fee;
    // ID of public key against which the random is generated
    bytes32 public keyHash;

    // Address of the player
    address[] public players;

    // Max number of players in one game
    uint8 maxPlayers;

    // Check if game is started or not consider it as a flag 
    bool public gameStarted;

    // Entry fees for joining the game
    uint256 entryFee;

    // 
} 