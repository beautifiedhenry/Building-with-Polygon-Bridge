const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const BeahNFT = await hre.ethers.getContractFactory("BeahNFT");
  const beahNFT = BeahNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await beahNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await beahNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} BeahNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});