const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const BeahNFT = await hre.ethers.getContractFactory("BeahNFT");
  const beahNFT = BeahNFT.attach(CONTRACT_ADDRESS);

  console.log(await beahNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});