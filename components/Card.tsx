"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export default function Card() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
                opacity: 0,
                scale: 0.98,
                filter: 'blur(10px)'
            }}
            animate={{
                opacity: 1,
                scale:1,
                filter: 'blur(0px)'                
            }}
            exit={{
              scale: 0.98,
              opacity: 0,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "w-72 min-h-[26rem] h-[31rem] rounded-xl bg-white ",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-4 flex flex-col "
            )}
          >
            <h2 className="text-center font-bold text-lg">D2C UI Card</h2>
            <p className="text-neutral-600 mt-2 text-sm text-center">
              Get the best items from D2C{" "}
            </p>
            <div className="flex item-center justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setOpen(false)}
                className="flex hover:cursor-pointer items-center gap-1 mt-4 rounded-md px-2 py-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
              >
                <Image
                  src={"/logo.jpg"}
                  width={50}
                  height={50}
                  alt="logo"
                  className="w-8 h-8 rounded-full"
                />
                D2C Brand
                <IconX
                  size={10}
                  className="h-3 w-3 text-neutral-400 flex items-center"
                />
              </motion.button>
            </div>
            <div className="relative bg-gray-100 flex-1 mt-4 border border-dashed border-neutral-200 rounded-lg ">
              {/* Motion div starts */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
                }}
                className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200 hover:cursor-pointer"
              >
                <div className="flex gap-2 p-4">
                  <div
                    className={cn(
                      "h-7 w-7 flex-shrink-0 bg-white rounded-md flex items-center justify-center",
                      "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                    )}
                  >
                    <IconMessage
                      size={24}
                      className="h-4 w-4 text-neutral-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-neutral-600">
                      D2C Card Component
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      A collection of D2C goods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className={cn(
                      "h-7 w-7 flex-shrink-0 bg-white rounded-md flex items-center justify-center",
                      "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                    )}
                  >
                    <Icon24Hours
                      size={24}
                      className="h-4 w-4 text-neutral-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-neutral-600">
                      24 hours turnaround
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      Super fast delivery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className={cn(
                      "h-7 w-7 flex-shrink-0 bg-white rounded-md flex items-center justify-center",
                      "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                    )}
                  >
                    <Icon360View
                      size={24}
                      className="h-4 w-4 text-neutral-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      We're here to help you 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className={cn(
                      "h-7 w-7 flex-shrink-0 bg-white rounded-md flex items-center justify-center",
                      "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                    )}
                  >
                    <Icon3dCubeSphere
                      size={24}
                      className="h-4 w-4 text-neutral-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-neutral-600">
                      Some other icons
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      Some other help.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 ">
                  <div
                    className={cn(
                      "h-7 w-7 flex-shrink-0 bg-white rounded-full flex items-center justify-center",
                      "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                    )}
                  >
                    <IconPlus size={24} className="h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col ">
                    <p className="text-neutral-400 text-xs mt-1">Shop Now.</p>
                  </div>
                </div>
              </motion.div>

              {/* Motion div ends */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
