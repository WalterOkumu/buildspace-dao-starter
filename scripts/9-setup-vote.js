import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';

// This is our governance contract.
const voteModule = sdk.getVoteModule('0xF0E5F6b056776E303c40a613c1466B6eEdef847e');

// This is our ERC-20 contract.
const tokenModule = sdk.getTokenModule('0x64D3669b6b44B1141597bc003FEe6002bA877250');

(async () => {
  try {
    // Give our treasury the power to mint additional token if needed.
    await tokenModule.grantRole('minter', voteModule.address);

    console.log('✅ Successfully gave vote module permissions to act on token module');
  } catch (error) {
    console.error('Failed to grant vote module permissions on token module', error);
    process.exit(1);
  }

  try {
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await tokenModule.balanceOf(
      // The wallet address stored in your env file or Secrets section of Repl
      process.env.WALLET_ADDRESS
    );

    // Grab 90% of the supply that we hold.
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    // Transfer 90% of the supply to our voting contract.
    await tokenModule.transfer(voteModule.address, percent90);

    console.log('✅ Successfully transferred tokens to vote module');
  } catch (error) {
    console.error('Failed to transfer tokens to vote module', error);
  }
})();