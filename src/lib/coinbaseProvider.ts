import { sdk } from './coinbaseSetup.ts'
 
// Create provider
export const provider = sdk.getProvider();
// Use provider
const addresses = provider.request({ method: 'eth_requestAccounts' });

export const connectWallet = async (): Promise<boolean> => {
    try {
      await provider.request({ method: 'eth_requestAccounts' });
      return true;
    } catch (error) {
      console.error('Wallet connection failed', error);
      return false;
    }
  };

  export default { provider, connectWallet };