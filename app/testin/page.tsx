'use client'

import {
  DynamicWidget
} from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";
export default function Testin (){
  const { address, isConnected, chain } = useAccount();
  return( <>
    
    <DynamicWidget/>
    <div>
      <p>
        wagmi connected: {isConnected ?? 'false' }
      </p>
      <p>wagmi address: {address}</p>
      <p>wagmi network: {chain?.id}</p>
    </div>
    </>
    )
}
