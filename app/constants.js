export const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000";

  export const USDC_ABI = [
    {
        type: "function",
            name: "balanceOf",
    stateMutability: "view",
      inputs: [{ name: "owner", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
             },
             {
       type: "function",
       name: "transfer",
       stateMutability: "nonpayable",
          inputs: [
    { name: "to", type: "address" },
    { name: "amount", type: "uint256" },
                 ],
       outputs: [{ name: "", type: "bool" }],
             },
           {
              type: "function",
                     name: "decimals",
                    stateMutability: "view",
        inputs: [],
         outputs: [{ name: "", type: "uint8" }],
          },
            ];