import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0x7337A6A0FEEc6E4c663C7675BA0b0504154a6bF1",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1
    });

    await bundleDrop.setClaimCondition(0,claimConditionFactory);
    console.log('✅ Sucessfully set claim condition!');
  } catch (error) {
    console.error('Failed to set claim condition', error);
  }
})();