"use client";

import { QrCode } from "lucide-react";

export default function RecipientInput({
  recipient,
    setRecipient,
      onScan,
      }) {
        return (
         <div className="mb-8">

    <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Recipient Address
              </label>

   <div className="relative">

            <input
          value={recipient}
  onChange={(e) => setRecipient(e.target.value)}
    placeholder="0x... or scan QR code"
 className="h-16 w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 pr-20 text-white placeholder:text-zinc-500 focus:border-yellow-400 focus:outline-none"
          />

                 <button
                onClick={onScan}
   className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-zinc-700"
             >
   <QrCode size={22} className="text-yellow-400" />
                   </button>

                    </div>

   <p className="mt-3 text-sm text-zinc-500">
    Enter a wallet address or scan a QR code.
             </p>

      </div>
                );
           }