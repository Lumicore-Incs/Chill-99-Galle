import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";

export const FloatingContactIcons = () => (
  <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
    {/* WhatsApp Icon */}
    <motion.a
      href="https://wa.me/94776028828"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
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
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        Chat on WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.a>

    {/* Uber Eats Icon */}
    <motion.a
      href="https://www.ubereats.com/lk/store/chill-99-galle-fort-galle/Uy9eNDD1VGq5rv6BTOMk-A?srsltid=AfmBOopcnc5JJKxHWa-Tp-sFn0LwZCVJE98R15M5PM6LFSsVwTcSYtmJ"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
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
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        Order on Uber Eats
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.a>
  </div>
);
