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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg
          width="100%"
          height="180"
          viewBox="0 0 800 180"
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Limon io Creators</title>
          <motion.path
            d="M 150 50 
               C 200 35, 300 30, 400 30
               C 500 30, 600 35, 650 50
               C 680 60, 690 75, 690 90
               C 690 110, 670 130, 620 140
               C 550 155, 450 160, 400 160
               C 350 160, 250 155, 180 140
               C 130 130, 110 110, 110 90
               C 110 75, 120 60, 150 50 Z"
            fill="none"
            strokeWidth="6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-foreground/70"
          />
        </motion.svg>
      </div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center py-12 px-6">
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
