import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const TopLine = () => {
  return (
    <div className="hidden lg:flex items-center justify-between py-2 bg-[var(--color-topline)] text-[#A1887F] text-sm font-normal px-4 lg:px-20">
      <div className="flex items-center">
        <FaRegClock className="inline mr-2" />
        <p>
          OPENING HOURS :<span className="text-white"> 10.00 AM - 09.30 PM</span>
        </p>
      </div>
      <div className="flex items-center text-white gap-5 cursor-pointer">
        <a
          href="https://www.facebook.com/chill99gallefort?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all" />
        </a>
        <a
          href="https://www.instagram.com/chill99gallefort/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <RiInstagramFill className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all" />
        </a>
        <a
          href="https://wa.me/94776028828"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <IoLogoWhatsapp className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all" />
        </a>
        <a
          href="https://www.tiktok.com/@chill99gallefort"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all" />
        </a>
      </div>
      <div className="flex items-center">
        <GrLocation className="inline mr-2" />
        <p>
          LOCATION :<span className="text-white"> 22 Leyn Baan St, Galle, Sri Lanka.</span>
        </p>
      </div>
    </div>
  );
};
