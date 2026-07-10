"use client";

export default function AmountInput({
  amount,
    setAmount,
      balance = "0.0000",
        onMax,
        }) {
          return (
              <div className="mb-8">

                    <div className="mb-3 flex items-center justify-between">
                            <label className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                                      Amount (USDC)
                                              </label>

                                                      <span className="text-sm text-zinc-500">
                                                                Balance: {balance} USDC
                                                                        </span>
                                                                              </div>

                                                                                    <div className="relative">

                                                                                            <input
                                                                                                      type="number"
                                                                                                                inputMode="decimal"
                                                                                                                          placeholder="0.00"
                                                                                                                                    value={amount}
                                                                                                                                              onChange={(e) => setAmount(e.target.value)}
                                                                                                                                                        className="h-16 w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 pr-24 text-2xl font-semibold text-white placeholder:text-zinc-500 focus:border-yellow-400 focus:outline-none"
                                                                                                                                                                />

                                                                                                                                                                        <button
                                                                                                                                                                                  type="button"
                                                                                                                                                                                            onClick={onMax}
                                                                                                                                                                                                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-yellow-400 px-4 py-2 font-bold text-black transition hover:bg-yellow-300"
                                                                                                                                                                                                              >
                                                                                                                                                                                                                        MAX
                                                                                                                                                                                                                                </button>

                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                            }