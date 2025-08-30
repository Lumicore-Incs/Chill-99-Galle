import type { NavigateFunction } from "react-router-dom";

/**
 * Utility function to handle reservation navigation
 * Navigates to the Gallery page's reservation section
 * @param navigate - The navigate function from useNavigate hook
 */
export const handleReservationClick = (navigate: NavigateFunction, source?: string) => {
  const url = source ? `/gallery?from=${encodeURIComponent(source)}#reservation-section` : "/gallery#reservation-section";
  navigate(url);
};

/**
 * Hook-like utility that returns a reservation click handler
 * @param navigate - The navigate function from useNavigate hook
 * @returns A function that can be used as onClick handler for reservation buttons
 */
export const useReservationNavigation = (navigate: NavigateFunction) => {
  // returns a function that accepts an optional source identifier
  return (source?: string) => handleReservationClick(navigate, source);
};
