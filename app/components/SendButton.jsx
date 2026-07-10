"use client";

import { SendHorizontal, Loader2 } from "lucide-react";

export default function SendButton({
  loading,
    onClick,
    }) {
      return (
          <button
                onClick={onClick}
                      disabled={loading}
                            className="mt-6 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-lg font-bold text-black transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-yellow-500/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                      {loading ? (
                                              <>
                                                        <Loader2 className="h-6 w-6 animate-spin" />
                                                                  Sending...
                                                                          </>
                                                                                ) : (
                                                                                        <>
                                                                                                  <SendHorizontal className="h-6 w-6" />
                                                                                                            Send USDC
                                                                                                                    </>
                                                                                                                          )}
                                                                                                                              </button>
                                                                                                                                );
                                                                                                                                }