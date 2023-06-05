const { ethers } = require("hardhat")

require("dotenv").config({ path: ".env" })

const {
  LINK_TOKEN,
  VRF_COORDINATOR,
  KEY_HASH,
  FEE,
} = require("../constants/index")

async function main() {
  /* 
    Contract Factory in ethers.js is an abstraction to deploy new smart contracts.

    here randomWinner is a factory for instance of our RandomWinnerGame contract 
  */

  const randomWinnerGame = await ethers.getContractFactory("Lottery")
  // Deploying the contract

  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  )

  await deployedRandomWinnerGameContract.deployed()

  // Lets print the address of the deployed contract
  console.log(
    "Contract address to verify :",
    deployedRandomWinnerGameContract.address
  )

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  console.log("Sleeping....")
  //Waiting for etherscan to notice that the contract has been deployed.
  await sleep(30000)

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  })

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });