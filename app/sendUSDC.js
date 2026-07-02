import { parseUnits } from "viem";

export function buildTransfer(recipient, amount) {
  return {
      functionName: "transfer",
          args: [
                recipient,
                      parseUnits(amount, 6),
                          ],
                            };
                            }