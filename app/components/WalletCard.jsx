"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function WalletCard() {
  const { isConnected } = useAccount();

    return (
        <ConnectButton.Custom>
              {({
                      account,
                              chain,
                                      mounted,
                                              openConnectModal,
                                  openAccountModal,
                                         }) => {
                                   const ready = mounted;
                                           const connected =
                                            ready &&
                                              account &&
                                                  chain &&
                                             isConnected;

                                         if (!connected) {
                                            return (
                                            <button
  onClick={openConnectModal}
   className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6
 py-3 font-semibold text-black transition-all hover:bg-yellow-300 active:scale-95"
              >
                                  Connect Wallet
                                 </button>
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                                                      <button
                                                                                                                                                                                                                                                                                  onClick={openAccountModal}
                                                                                                                                                                                                                                                                                              className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-white transition-all hover:border-yellow-400"
                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                    <span className="h-3 w-3 rounded-full bg-green-500"></span>

                                                                                                                                                                                                                                                                                                                                {account.displayName}
                                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                                                                                                                                            </ConnectButton.Custom>
                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                              }