"use client";

import { useState, useEffect } from "react";
import WalletCard from "./components/WalletCard";
import { buildTransfer } from "./sendUSDC";
import {
  useAccount,
    useWriteContract,
      useWaitForTransactionReceipt,
      } from "wagmi";

import { parseUnits } from "viem";
import {
        USDC_ADDRESS,
          USDC_ABI,
          } from "./constants";
      
export default function Home() {

const [recipient, setRecipient] = useState("");
const [amount, setAmount] = useState("");
const [loading, setLoading] = useState(false);
const { address } = useAccount();
const [txStage, setTxStage] = useState("");
const {
  data: hash,
    writeContractAsync,
      } = useWriteContract();

const { isSuccess } =
        useWaitForTransactionReceipt({
            hash,
              });
useEffect(() => {
    if (hash) {
        console.log("Transaction Hash:", hash);
            setStatus("Transaction submitted!");
                setTxStage("submitted");
                  }
                  }, [hash]);

const [status, setStatus] = useState("");
const sendUSDC = async () => {

    if (!address) {
        setStatus("Please connect your wallet.");
          return;
          }
          
    if (!recipient) {
        setStatus("Please enter a recipient address.");
            return;
              }

     if (!amount || Number(amount) <= 0) {
         setStatus("Please enter a valid amount.");
             return;
              }

    try {
        setLoading(true);
        setStatus("Preparing transaction...");
        setTxStage("preparing");

const tx = buildTransfer(recipient, amount);

setStatus("Waiting for wallet approval...");
setTxStage("wallet");

await writeContractAsync({
  address: USDC_ADDRESS,
    abi: USDC_ABI,
      ...tx,
      });

        } catch (err) {
            console.error(err);

              if (err?.message?.toLowerCase().includes("rejected")) {
                  setStatus("Transaction cancelled.");
                      setTxStage("cancelled");
                        } else {
                            setStatus("Transaction failed.");
                                setTxStage("failed");
                                  }

                                    setLoading(false);
                                    }

              };

useEffect(() => {
  if (isSuccess) {
      setLoading(false);
          setStatus("Transaction successful!");
          setTxStage("success");
            }
            }, [isSuccess]);

  return (
      <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
                 ⚡ Arc FlashTap
                   </h1>

                <WalletCard />

    <p className="text-center text-gray-400 mb-6">
    Fast and simple USDC payments on Arc Testnet.
                    </p>

    <input
      type="text"
        placeholder="Recipient Address"
          value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
      className="w-full p-3 rounded-lg bg-zinc-800 text-white mb-4 outline-none"
              />      

  <input
    type="number"
      placeholder="Amount (USDC)"
        value={amount}
          onChange={(e) => setAmount(e.target.value)}
      className="w-full p-3 rounded-lg bg-zinc-800 text-white mb-4 outline-none"
            />

  <button
  onClick={sendUSDC}
  disabled={loading}
className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600
 text-white font-semibold p-3 rounded-lg"
      >
        {loading ? "Sending..." : "Send USDC"}
        </button>
{status && (
    <p className="mt-3 text-center text-green-400 text-sm">
        {status}
          </p>
          )}

{hash && (
    <a
        href={`https://testnet.arcscan.app/tx/${hash}`}
            target="_blank"
                rel="noopener noreferrer"
                    className="mt-2 block text-xs text-blue-400 break-all underline"
                      >
                          View Transaction on ArcScan
                            </a>
                            )}

        </div>
        </main>
           );
}