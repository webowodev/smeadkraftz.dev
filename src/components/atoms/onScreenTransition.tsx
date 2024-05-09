"use client";

import { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

export default function OnScreenTransition({
  children,
  delay = 0,
  offscreen = {
    y: 20,
    opacity: 0,
  },
}: {
  children: ReactNode;
  delay?: number;
  offscreen?: any;
}) {
  const variants: Variants = {
    offscreen,
    onscreen: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  );
}
