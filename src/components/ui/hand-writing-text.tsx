"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          width="100%"
          height="200"
          viewBox="0 0 1200 300"
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <title>Limon.io</title>
          <motion.path
            d="M 950 90 
               C 1150 180, 1050 240, 600 260
               C 250 260, 150 240, 150 150
               C 150 60, 350 40, 600 40
               C 850 40, 950 90, 950 90"
            fill="none"
            strokeWidth="8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-foreground/80"
          />
        </motion.svg>
      </div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center py-12">
        <motion.h2
          className="text-4xl md:text-6xl text-foreground tracking-tighter font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}

export { HandWrittenTitle };
