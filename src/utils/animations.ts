
import { cn } from "@/lib/utils";

export const getStaggeredDelay = (index: number, baseDelay: number = 2) => {
  return {
    animationDelay: `${index * baseDelay}ms`,
  };
};

export const blurRevealAnimation = (index: number, additionalClasses?: string) => {
  return cn(
    "opacity-0 blur-sm animate-fade-in",
    additionalClasses,
    getStaggeredDelay(index)
  );
};
