import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import formimg2 from "../assets/imagecaro-01.jpg";
import formimg1 from "../assets/imageside.jpg";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";
import { GalleryCarousel } from "../components/features/GalleryCarousel";

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

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to show snackbar
  const showSnackbar = (message: string, severity: "success" | "error" | "warning" | "info") => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  // Function to close snackbar
  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Handle hash navigation to reservation section
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#reservation-section") {
      const element = document.getElementById("reservation-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

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
        showSnackbar("Please fill in all required fields!", "error");
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
        message: `New reservation request from ${formData.fullName} for ${formData.guests} on ${formData.date} at ${formData.time}. Contact: ${formData.phone} (${formData.email})`,
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

        showSnackbar("Reservation sent successfully!", "success");
      } catch (emailError) {
        console.error("❌ EmailJS Error:", emailError);

        showSnackbar(
          "❌ Failed to send reservation. \nPlease try again or contact us directly at mg4.aca@gmail.com",
          "error"
        );
      }
    } catch (error) {
      console.error("Error processing reservation:", error);
      showSnackbar(
        "Sorry, there was an error processing your reservation. Please try again or contact us directly.",
        "error"
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
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[96vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center lg:text-left absolute left-[10%]"
        >
          <div className="mb-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-[60px] font-bold leading-tight"
            >
              A Taste of Moments at <br />
              Chill 99
            </motion.h1>
          </div>
          <div className="mb-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium"
            >
              A gallery of flavors, made to please both your eyes and your appetite{" "}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Mobile-Optimized Gallery */}
      <section className="bg-[#1F0D09] w-full px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <p className="text-base md:text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Our Photo Gallery
          </p>
          <h2 className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Look at Our Photo Gallery
          </h2>
        </motion.div>
        <GalleryCarousel images={galleryImageData} />
      </section>

      {/* Mobile-Optimized Reservation Section */}
      <section
        id="reservation-section"
        className="bg-[#1F0D09] w-full min-h-screen flex items-center justify-center relative"
      >
        {/* Left image - Hidden on mobile and tablet */}
        <img
          src={formimg1}
          alt=""
          className="hidden lg:block w-1/4 min-h-screen object-cover object-right"
        />

        {/* Center form - Full width on mobile, constrained on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-2/4 px-4 sm:px-6 lg:px-16 py-8 lg:py-12 flex flex-col items-center text-center text-white bg-[#1F0D09]"
        >
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Booking Table
          </p>
          <h2 className="italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#FFD580] font-semibold mb-6 lg:mb-8">
            Make Your Reservations
          </h2>

          {/* Sample Data Button - Hidden on small screens */}
          <div className="mb-4 hidden sm:block">
            <motion.button
              type="button"
              onClick={generateSampleData}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 min-h-[44px]"
            >
              📝 Fill Sample Data
            </motion.button>
          </div>

          {/* Form fields - Single column on mobile, two columns on larger screens */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-lg lg:max-w-none"
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px]"
            />
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              className="p-4 text-base rounded bg-[#1F0D09] border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white min-h-[48px]"
            >
              <option value="1 Person">1 Person</option>
              <option value="2 People">2 People</option>
              <option value="3 People">3 People</option>
              <option value="4 People">4 People</option>
              <option value="5 People">5 People</option>
              <option value="6+ People">6+ People</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white min-h-[48px]"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white min-h-[48px]"
            />

            <div className="lg:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => console.log("🔘 Button clicked directly!")}
                className="flex items-center gap-3 px-6 lg:px-8 py-4 text-base lg:text-lg font-semibold rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] min-w-[200px] justify-center"
              >
                {isSubmitting ? "SENDING..." : "BOOKING TABLE"}
              </button>
            </div>
          </motion.form>
        </motion.div>

        {/* Right image */}
        <img
          src={formimg2}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-left"
        />
      </section>

      <Footer />

      {/* Material-UI Snackbar for alerts */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            width: "100%",
            whiteSpace: "pre-line", // This allows \n to create line breaks
            "&.MuiAlert-filledSuccess": {
              backgroundColor: "#FFD580", // Green for success
              color: "#1f1c18ff", // Golden text
              "& .MuiAlert-icon": {
                color: "#a1a09eff",
              },
            },
            "&.MuiAlert-filledError": {
              backgroundColor: "#8B4513", // Warm brown for errors (matches theme)
              color: "#FFD580", // Golden text
              "& .MuiAlert-icon": {
                color: "#FFD580",
              },
            },
            "&.MuiAlert-filledWarning": {
              backgroundColor: "#FF8C00", // Warm orange for warnings
              color: "#1F0D09", // Dark text for contrast
              "& .MuiAlert-icon": {
                color: "#1F0D09",
              },
            },
            "&.MuiAlert-filledInfo": {
              backgroundColor: "#31201B", // Theme dark color for info
              color: "#FFD580", // Golden text
              "& .MuiAlert-icon": {
                color: "#FFD580",
              },
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
