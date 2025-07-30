import { Clock, MapPin } from "lucide-react"
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

export const TopLine = () => {
  return (
    <div className="flex items-center justify-between py-2 bg-[var(--color-topline)] text-[#A1887F] text-sm font-normal px-20" style={{ fontFamily: 'var(--font-family-default)' }}>
        <div className="flex items-center">
          <FaRegClock className="inline mr-2"/>
          <p>OPENING HOURS :<span className="text-white"> 10.00 AM - 09.30 PM</span></p>
        </div>
        <div className="flex items-center text-white gap-5">
          <FaFacebookF />
          <RiInstagramFill/>
          <IoLogoWhatsapp/>
          <FaTiktok/>
        </div>
        <div className="flex items-center">
          <GrLocation className="inline mr-2" />
          <p>LOCATION :<span className="text-white">  22 Leyn Baan St, Galle, Sri Lanka.</span></p>
        </div>
    </div>
  )
}
