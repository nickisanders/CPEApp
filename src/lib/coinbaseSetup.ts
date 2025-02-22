import { createCoinbaseWalletSDK } from '@coinbase/wallet-sdk';
 
export const sdk = createCoinbaseWalletSDK({
    appName: "CPE Wallet",
    //appLogoUrl: "https://example.com/logo.png", //App logo image URL. Favicon is used if unspecified. Local paths are not supported for appLogoUrl as the logo is presented on another window as popup. Please provide a non-local URL.
    appChainIds: [8453],
    preference: {
        options: "smartWalletOnly",
        attribution: {
            auto: true,
        }
    },
});