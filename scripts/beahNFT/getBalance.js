const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, BRIDGE_ADDRESS } = process.env;

async function main() {
  const BeahNFT = await hre.ethers.getContractFactory("BeahNFT");
  const beahNFT = await BeahNFT.attach(BRIDGE_ADDRESS);

  const balance = await beahNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});