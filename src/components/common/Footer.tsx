import { MapPin, Mail, Phone } from "lucide-react";
import gal1 from "../../assets/cofee2.jpg"
import gal2 from "../../assets/coffee3.jpg"
import gal3 from "../../assets/coffee4.jpg"
import gal4 from "../../assets/coffee5.jpg"
import gal5 from "../../assets/coffee6.jpg"
import logo from "../../assets/chill-99.png";
import coffee from "../../assets/cofee.jpg";

const galleryImages = [gal1, coffee, gal2, gal3, gal4, gal5];

export const Footer = () => {
  return (
    <footer id="footer-section" className="relative bg-[#261410] w-full min-h-[60vh] lg:h-[90vh] xl:h-[70vh] text-white px-4 lg:px-50 py-8 lg:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img src={logo} alt="Chill 99 Logo" className="w-full h-auto object-contain max-w-[300px]" />
            </div>

            {/* Working Hours */}
            <div className="text-center md:text-left">
              <h3 className="text-[var(--green-primary)] text-lg lg:text-xl xl:text-2xl font-semibold mb-6 lg:mb-10 italic">
                Working Hours & Services
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Sunday - Monday", value: "10:00 AM - 09:30 PM" },
                  { label: "Delivery", value: "Takeout" },
                  { label: "Dine-in", value: "Outdoor Seating" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="font-medium text-base lg:text-xl">{item.label}</span>
                    </div>
                    <p className="text-[#A1887F] text-sm lg:text-base font-medium md:ml-4">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h3 className="text-[var(--green-primary)] text-lg lg:text-xl font-semibold mb-6 lg:mb-10 italic">
                Contact Us
              </h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Location", content: "22 Leyn Baan St, Galle, Sri Lanka" },
                  { icon: Mail, title: "Email", content: "chill99allefort@gmail.com" },
                  { icon: Phone, title: "Phone", content: "+94 77 602 8828" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-7 text-[#A1887F] flex-shrink-0" />
                    <div className="text-center md:text-left">
                      <h4 className="font-medium text-base lg:text-xl mb-1">{item.title}</h4>
                      <p className="text-[#A1887F] text-sm lg:text-base font-medium">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="text-center md:text-left">
              <h3 className="text-[var(--green-primary)] text-lg lg:text-xl font-semibold mb-6 lg:mb-10 italic">
                Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto md:mx-0">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer relative group"
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-[var(--green-primary)] text-center">
            <p className="text-white text-sm lg:text-base">
              Copyright © 2025 Chill99. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}
