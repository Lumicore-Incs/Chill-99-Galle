import { motion } from "framer-motion";
import React from "react";
import { FaTripadvisor } from "react-icons/fa";

interface ReviewButtonsProps {
  className?: string;
  showGoogle?: boolean;
  showTripadvisor?: boolean;
}

export const ReviewButtons: React.FC<ReviewButtonsProps> = ({
  className = "",
  showGoogle = true,
  showTripadvisor = true,
}) => {
  return (
    <div className={`${className} grid items-center justify-center gap-4 opacity-[0.8]`}>
      {showGoogle && (
        <motion.a
          href="https://g.page/r/Ca_cIKMhKQgNEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Leave a Google review"
          className="flex items-center gap-3 rounded-md cursor-pointer text-[var(--color-topline)] bg-white py-3 px-5 transition-all duration-300 justify-center font-semibold"
        >
          <span className="w-5 h-5 inline-flex" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
              <path
                fill="#4285F4"
                d="M24 9.5c3.54 0 6.32 1.53 8.15 2.78l6.01-6.01C35.99 3.06 30.46 1 24 1 14.96 1 7.3 5.9 3.7 13.07l7.14 5.55C12.92 13.4 18.98 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.9 24.5c0-1.6-.14-2.8-.45-4.03H24v7.63h12.87c-.55 3-2.97 6.36-6.87 8.28l7.14 5.55C43.7 38.3 46.9 32.9 46.9 24.5z"
              />
              <path
                fill="#FBBC05"
                d="M11.84 29.62A14.96 14.96 0 0 1 11 24c0-1.34.2-2.64.54-3.86L4.4 14.58A23.98 23.98 0 0 0 1 24c0 3.86.9 7.5 2.5 10.78l8.34-5.16z"
              />
              <path
                fill="#EA4335"
                d="M24 46.5c6.46 0 11.99-2.06 15.16-5.6l-7.14-5.55c-2.03 1.36-4.68 2.38-8.02 2.38-5.02 0-11.08-3.9-12.76-9.62L3.7 34.93C7.3 42.1 14.96 47 24 47v-.5z"
              />
            </svg>
          </span>
          Google Review
        </motion.a>
      )}

      {showTripadvisor && (
        <motion.a
          href="https://www.tripadvisor.com/Profile/chill99gallefort"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Open TripAdvisor profile"
          className="flex items-center gap-2 rounded-md cursor-pointer text-[var(--color-topline)] bg-white py-3 px-4  transition-all duration-300 justify-center font-semibold"
        >
          <FaTripadvisor className="w-5 h-5 text-[#34A853]" />
          TripAdvisor Review
        </motion.a>
      )}
    </div>
  );
};

export default ReviewButtons;
