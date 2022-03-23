import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7337A6A0FEEc6E4c663C7675BA0b0504154a6bF1",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The East Africa Federation",
        description: "This NFT will give you access to EastAfricaDAO!",
        image: readFileSync("scripts/assets/east_african_federation.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()