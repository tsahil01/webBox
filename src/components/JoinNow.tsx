"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function JoinNow() {
  const words = [
    {
      text: "Try",
    },
    {
      text: "out",
    },
    {
      text: "our",
    },
    {
      text: "Platform",
    },
    {
      text: "Now.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center md:h-[40rem] h-[20rem] [background-image:radial-gradient(88%_100%_at_bottom,rgba(255,0,0,0.1),rgba(255,255,255,0))]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-row md:flex-row gap-2 space-y-0 md:mt-5 space-x-0 md:space-x-4">
        <Button className="md:text-xl font-semibold md:p-6 my-auto gap-1 mx-auto inline-flex md:h-12 h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Try now <ChevronRight />
        </Button>
        <Button className="md:text-xl font-semibold md:p-6 my-auto gap-1 mx-auto inline-flex md:h-12 h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Signup
        </Button>
      </div>
    </div>
  );
}
