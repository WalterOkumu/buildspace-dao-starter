import sdk from './1-initialize-sdk.js';

const tokenModule = sdk.getTokenModule('0x64D3669b6b44B1141597bc003FEe6002bA877250');

(async () => {
  try {
    // Log the current roles.
    console.log('👀 Roles that exist right now:', await tokenModule.getAllRoleMembers());

    // Revoke all the superpowers in your wallet had over teh ERC-20 contract.
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);

    console.log('🎉 Roles after revoking ourselves', await tokenModule.getAllRoleMembers());
  } catch (error) {
    console.error('Failed to revoke ourselves from the DAO treasury', error);
  }
})();