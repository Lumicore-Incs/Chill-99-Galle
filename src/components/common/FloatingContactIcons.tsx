import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";

export const FloatingContactIcons = () => (
  <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
    {/* WhatsApp Icon */}
    <div className="relative group">
      <motion.a
        href="https://wa.me/94776028828"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
      {/* Tooltip (not clickable) - positioned above the icon */}
      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-[calc(50%+8px)] px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
        {/* small centered indicator below the tooltip */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>

    {/* Uber Eats Icon */}
    <div className="relative group">
      <motion.a
        href="https://www.ubereats.com/lk/store/chill-99-galle-fort-galle/Uy9eNDD1VGq5rv6BTOMk-A?srsltid=AfmBOopcnc5JJKxHWa-Tp-sFn0LwZCVJE98R15M5PM6LFSsVwTcSYtmJ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on Uber Eats"
        title="Order on Uber Eats"
        className="bg-black hover:bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.1,
          rotate: -5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <SiUbereats className="text-2xl" />
      </motion.a>
      {/* Tooltip (not clickable) - positioned above the icon */}
      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-[calc(50%+8px)] px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Order on Uber Eats
        {/* small centered indicator below the tooltip */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);
