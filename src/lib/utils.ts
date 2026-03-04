import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the number of years since the business started (December 2006)
 * @returns The number of complete years since December 2006
 */
export function getYearsSinceStart(): number {
  const startDate = new Date(2006, 12, 1); // December 2006 (month is 0-indexed)
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  
  // If we haven't reached December yet, subtract one year
  if (monthDiff < 0) {
    years--;
  }
  
  return years;
}