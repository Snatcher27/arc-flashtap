"use client";

export default function TransactionStatus({ stage }) {
  if (!stage) return null;

    const status = {
        preparing: {
              icon: "🟡",
                    title: "Preparing Transaction",
                          color: "text-yellow-400",
                              },
                                  wallet: {
                                        icon: "🟠",
                                              title: "Waiting for Wallet Approval",
                                                    color: "text-orange-400",
                                                        },
                                                            submitted: {
                                                                  icon: "🔵",
                                                                        title: "Transaction Submitted",
                                                                              color: "text-blue-400",
                                                                                  },
                                                                                      success: {
                                                                                            icon: "🟢",
                                                                                                  title: "Payment Successful",
                                                                                                        color: "text-green-400",
                                                                                                            },
                                                                                                                failed: {
                                                                                                                      icon: "🔴",
                                                                                                                            title: "Transaction Failed",
                                                                                                                                  color: "text-red-400",
                                                                                                                                      },
                                                                                                                                          cancelled: {
                                                                                                                                                icon: "⚪",
                                                                                                                                                      title: "Transaction Cancelled",
                                                                                                                                                            color: "text-zinc-400",
                                                                                                                                                                },
                                                                                                                                                                  };

                                                                                                                                                                    const current = status[stage];

                                                                                                                                                                      return (
                                                                                                                                                                          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                                                                                                                                                                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                                                                                                                                                                                        Transaction Status
                                                                                                                                                                                              </h3>

                                                                                                                                                                                                    <div className={`flex items-center gap-3 ${current.color}`}>
                                                                                                                                                                                                            <span className="text-2xl">{current.icon}</span>

                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                              <p className="font-semibold">{current.title}</p>
                                                                                                                                                                                                                                        <p className="text-sm text-zinc-500">
                                                                                                                                                                                                                                                    Follow the prompts in your wallet.
                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                  }