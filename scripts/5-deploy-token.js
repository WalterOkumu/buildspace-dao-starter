import sdk from './1-initialize-sdk.js';

const app = sdk.getAppModule('0xF1b6D4ec0Adc1Fdb21c3428433922efeb06FCD34');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "EastAfricaDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "EAF",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();