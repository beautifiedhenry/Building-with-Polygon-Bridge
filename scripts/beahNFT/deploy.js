const hre = require("hardhat");

async function main() {
  const beahNFT = await hre.ethers.deployContract("BeahNFT");

  console.log("BeahNFT address:", await beahNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});