import emailjs from "@emailjs/browser";
import { useState } from "react";
import formimg2 from "../assets/imagecaro-01.jpg";
import formimg1 from "../assets/imageside.jpg";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";

import banner from "../assets/gallery/background-image.jpg";
import bun01 from "../assets/gallery/bun-01.jpg";
import bun02 from "../assets/gallery/bun-02.jpg";
import imagecaro01 from "../assets/gallery/imagecaro-01.jpg";
import pancake from "../assets/gallery/pancake.jpg";
import pie from "../assets/gallery/pie.jpg";
import sandwich01 from "../assets/gallery/sandwich-01.jpg";
import sandwich04 from "../assets/gallery/sandwich-04.jpg";
import sandwitch02 from "../assets/gallery/sandwitch-02.jpg";
import sandwitch03 from "../assets/gallery/sandwitch-03.jpg";

const galleryImageData = [
  { src: bun01, name: "Chill 99 Waffle Fries" },
  { src: bun02, name: "Salmon Sandwich" },
  { src: imagecaro01, name: "Waffle Burger" },
  { src: pancake, name: "Loaded Fries" },
  { src: pie, name: "Chill 99 Special Sandwich" }, // Center tile with label
  { src: sandwich01, name: "Burger Platter" },
  { src: sandwich04, name: "Classic Burger" },
  { src: sandwitch02, name: "Strawberry Dessert" },
  { src: sandwitch03, name: "Salad Bowl" },
];

export const Gallery = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "1 Person",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to generate sample data
  const generateSampleData = () => {
    const sampleData = {
      fullName: "John Doe",
      email: "dev.mg4@gmail.com",
      phone: "+1-555-123-4567",
      guests: "2 People",
      date: "2025-08-25", // A week from today
      time: "19:30", // 7:30 PM
    };

    setFormData(sampleData);
    console.log("📝 Sample data generated:", sampleData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("🔥 handleSubmit function called!");
    e.preventDefault();
    console.log("📝 Form data:", formData);
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.date ||
        !formData.time
      ) {
        console.log("❌ Validation failed - missing fields");
        alert("Please fill in all required fields!");
        setIsSubmitting(false);
        return;
      }

      console.log("✅ Validation passed - sending via EmailJS...");

      // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL IDs
      const serviceId = "service_ga0l9mu"; // Get from EmailJS dashboard
      const templateId = "template_i110m2w"; // Get from EmailJS dashboard
      const publicKey = "p1sWGViGQPTgg6qBM"; // Get from EmailJS dashboard

      // Prepare template parameters for EmailJS (simplified approach)
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        customer_name: formData.fullName,
        customer_email: formData.email,
        customer_phone: formData.phone,
        guest_count: formData.guests,
        reservation_date: formData.date,
        reservation_time: formData.time,
        reply_to: formData.email,
        message: `New reservation request from ${formData.fullName} for ${formData.guests} on ${formData.date} at ${formData.time}. Contact: ${formData.phone} (${formData.email})`
      };

      console.log("📧 Sending email with EmailJS...");

      try {
        // Send email using EmailJS
        const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

        console.log("✅ EmailJS Success:", result);

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          guests: "1 Person",
          date: "",
          time: "",
        });

        alert("🎉 Reservation sent successfully! You will receive a confirmation email shortly.");
      } catch (emailError) {
        console.error("❌ EmailJS Error:", emailError);

        alert("❌ Failed to send reservation. Please try again or contact us directly at mg4.aca@gmail.com");
      }
    } catch (error) {
      console.error("Error processing reservation:", error);
      alert(
        "Sorry, there was an error processing your reservation. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-x-hidden relative">
      <TopLine />
      <Navbar />

      {/* Hero Banner */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[80vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      >
        <div className="flex flex-col text-center lg:text-left absolute left-[10%]">
          <div className="mb-3">
            <h1 className="text-2xl sm:text-3xl lg:text-[60px] font-bold leading-tight">
              A Taste of Moments at <br />
              Chill 99
            </h1>
          </div>
          <div className="mb-5">
            <p className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium">
              A gallery of flavors, made to please both your eyes and your appetite{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#1F0D09] w-full px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <div className="flex flex-col items-center text-center mb-8">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Our Photo Gallery</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Looks Our Photo Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {galleryImageData.map((img, idx) => (
            <div
              key={idx}
              className="bg-[#31201B] rounded-lg overflow-hidden shadow-lg flex items-center justify-center relative group"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#31201BBF" }}
              >
                <span
                  className="px-6 py-2 rounded text-[#ffcc7d] text-lg font-semibold shadow-lg"
                  style={{ minWidth: "150px", textAlign: "center" }}
                >
                  {img.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Section (copied from Menu.tsx) */}
      <section
        id="reservation-section"
        className="bg-[#1F0D09] w-full min-h-screen flex items-center justify-center relative"
      >
        {/* Left image */}
        <img
          src={formimg1}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-right"
        />

        {/* Center form */}
        <div
          className="w-full lg:w-2/4 px-6 lg:px-16 py-12 flex flex-col items-center text-center text-white bg-[#1F0D09]"
          style={{ height: "100vh", borderTop: "1px solid #FFD580" }}
        >
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Booking Table</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[#FFD580] font-semibold mb-8">
            Make Your Reservations
          </h2>

          {/* Sample Data Button */}
          <div className="mb-4">
            <button
              type="button"
              onClick={generateSampleData}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300"
            >
              📝 Fill Sample Data
            </button>
          </div>

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />

            <div className="flex items-center text-sm sm:text-base lg:text-lg font-medium mt-6 md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => console.log("🔘 Button clicked directly!")}
                className="flex items-center gap-3 px-4 lg:px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "BOOKING TABLE"}
              </button>
            </div>
          </form>
        </div>

        {/* Right image */}
        <img
          src={formimg2}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-left"
        />
      </section>

      <Footer />
    </div>
  );
};
