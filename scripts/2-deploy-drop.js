import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const app = sdk.getAppModule('0xF1b6D4ec0Adc1Fdb21c3428433922efeb06FCD34');

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name:'EastAfricaDAO Membership',
      description: 'A DAO for African startups.',
      image: readFileSync('scripts/assets/east_african_federation.png'),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      '✅ Successfully deployed bundleDrop module, address:',
      bundleDropModule.address
    );

    console.log(
      '✅ bundleDrop metadata:',
      await bundleDropModule.getMetadata()
    )
  } catch (error) {
    console.log('failed to deploy bundleDrop module', error);
  }
})()
