'use client'
import {
  DynamicContextProvider,
  // DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import './globals.css';
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet } from "viem/chains";
import Nav from './_components/Navbar'
const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: "b29b8761-2de1-42c8-a1d8-a8109d88400d",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <DynamicWagmiConnector>
              
              <body>
              <Nav/>
                {children}
                </body>
            </DynamicWagmiConnector>
          </QueryClientProvider>
        </WagmiProvider>
      </DynamicContextProvider>
    </html>
  );
}
