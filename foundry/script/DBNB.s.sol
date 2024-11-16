  // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.7;

   import "forge-std/Script.sol";
   import "../src/DecentralizedAirbnb.sol";

   contract DeployDecentralizedAirbnb is Script {
       function run() external {
           vm.startBroadcast();

           DecentralizedAirbnb decentralizeAirbnb = new DecentralizedAirbnb();

           vm.stopBroadcast();
       }
   }