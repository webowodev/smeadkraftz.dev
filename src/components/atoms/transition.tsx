"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export type ITransition = {
  delay?: number;
};

export default function Transition({
  children,
  delay,
}: PropsWithChildren<ITransition>) {
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"enter"}
      exit={"exit"}
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut", delay }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
}
