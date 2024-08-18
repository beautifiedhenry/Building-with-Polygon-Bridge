# ERC20 Sepolia to Mumbai Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC20 tokens from Sepolia to Mumbai.

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key, sepolia api key, mumbai api key, account in the .env.example file and rename to .env when finished
3. Run npx hardhat run scripts/beahNFT/deploy.js --network sepolia to deploy ERC20 contract
4. Paste the newly deployed contract address in the CONTRACT_ADDRESS variable for the scripts
5. Run npx hardhat run scripts/beahNFT/batchMint.js --network sepolia to mint tokens to your wallet
6. Run npx hardhat run scripts/beahNFT/approveTransfer.js --network sepolia to approve and deposit your tokens to polygon
7. Wait 20-30ish minutes for tokens to show on polygon account
8. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
9. Use this polygon contract address for your getBalance script's tokenAddress
10.Run npx hardhat run scripts/beahNFT/getBalance.js --network amoy to see the new polygon balance
