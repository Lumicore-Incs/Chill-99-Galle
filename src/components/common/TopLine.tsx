import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

export const TopLine = () => {
  return (
    <div className="hidden lg:flex items-center justify-between py-2 bg-[var(--color-topline)] text-[#A1887F] text-sm font-normal px-4 lg:px-20">
      <div className="flex items-center">
        <FaRegClock className="inline mr-2"/>
        <p>OPENING HOURS :<span className="text-white"> 10.00 AM - 09.30 PM</span></p>
      </div>
      <div className="flex items-center text-white gap-5 cursor-pointer">
        <FaFacebookF className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all"/>
        <RiInstagramFill className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all"/>
        <IoLogoWhatsapp className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all"/>
        <FaTiktok className="hover:text-[var(--green-primary)] hover:scale-110 duration-500 transition-all"/>
      </div>
      <div className="flex items-center">
        <GrLocation className="inline mr-2" />
        <p>LOCATION :<span className="text-white"> 22 Leyn Baan St, Galle, Sri Lanka.</span></p>
      </div>
    </div>
  )
}
