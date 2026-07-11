import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicting utility classes
 * in favor of the ones passed later (standard shadcn/ui utility).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
