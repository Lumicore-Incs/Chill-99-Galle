import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import formimg2 from "../assets/imagecaro-01.jpg";
import formimg1 from "../assets/imageside.jpg";
import { FloatingContactIcons } from "../components/common/FloatingContactIcons";
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
    <div className="w-full overflow-x-hidden relative lg:pt-20">
      <TopLine />
      <Navbar />
      <FloatingContactIcons />

      {/* Hero Banner with Enhanced Animations */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[96vh] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      >
        {/* Animated background overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col text-center lg:text-left absolute left-[10%] z-10"
        >
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="text-2xl sm:text-3xl lg:text-[60px] font-bold leading-tight"
            >
              A Taste of Moments at <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[var(--green-primary)]"
              >
                Chill 99
              </motion.span>
            </motion.h1>
          </motion.div>
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium"
            >
              A gallery of flavors, made to please both your eyes and your appetite{" "}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-[var(--green-primary)] rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-3 h-3 bg-[#FFD580] rounded-full opacity-70"
          animate={{
            y: [10, -10, 10],
            scale: [1, 1.3, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </section>

      {/* Enhanced Gallery Section with Modern Animations */}
      <section className="bg-[#1F0D09] w-full px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8 relative">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #FFD580 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col items-center text-center mb-8 relative z-10"
        >
          <motion.p
            className="text-base md:text-lg lg:text-xl text-[#FAF3E0] font-medium mb-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Photo Gallery
          </motion.p>
          <motion.h2
            className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold"
            initial={{ opacity: 0, y: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Look at Our Photo Gallery
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="w-24 h-1 bg-[var(--green-primary)] mt-4"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Gallery Carousel with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 80,
          }}
          className="relative z-10 w-full"
        >
          <GalleryCarousel images={galleryImageData} />
        </motion.div>
      </section>

      {/* Enhanced Reservation Section with Modern Animations */}
      <section
        id="reservation-section"
        className="bg-[#1F0D09] w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 border border-[var(--green-primary)] rounded-full opacity-30" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FFD580] rounded-full opacity-30" />
        </motion.div>

        {/* Left image with enhanced animations */}
        <motion.img
          src={formimg1}
          alt=""
          className="hidden lg:block w-1/3 min-h-screen object-cover object-right"
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 80,
          }}
        />

        {/* Center form with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full lg:w-2/4 px-4 sm:px-6 lg:px-16 py-8 lg:py-12 flex flex-col items-center text-center text-white bg-[#1F0D09] relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-[#FAF3E0] font-medium mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Booking Table
            </motion.p>
            <motion.h2
              className="italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#FFD580] font-semibold mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              Make Your Reservations
            </motion.h2>
          </motion.div>

          {/* Enhanced form with staggered animations */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-lg lg:max-w-none"
          >
            {[
              { name: "fullName", placeholder: "Full Name", type: "text" },
              { name: "email", placeholder: "Email Address", type: "email" },
              { name: "phone", placeholder: "Phone Number", type: "tel" },
              { name: "guests", placeholder: "Number of Guests", type: "select" },
              { name: "date", placeholder: "Date", type: "date" },
              { name: "time", placeholder: "Time", type: "time" },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required
                    className="p-4 text-base rounded bg-[#1F0D09] border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white min-h-[48px] w-full transition-all duration-300 hover:border-[#FFD580]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3 People">3 People</option>
                    <option value="4 People">4 People</option>
                    <option value="5 People">5 People</option>
                    <option value="6+ People">6+ People</option>
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    required
                    className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px] w-full transition-all duration-300 hover:border-[#FFD580]"
                  />
                )}
              </motion.div>
            ))}

            <motion.div
              className="lg:col-span-2 flex justify-center mt-6"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut",
              }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                onClick={() => console.log("🔘 Button clicked directly!")}
                className="flex items-center gap-3 px-6 lg:px-8 py-4 text-base lg:text-lg font-semibold rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] min-w-[200px] justify-center relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated button background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--green-primary)] to-[var(--green-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">
                  {isSubmitting ? "SENDING..." : "BOOKING TABLE"}
                </span>
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Right image with enhanced animations */}
        <motion.img
          src={formimg2}
          alt=""
          className="hidden md:block w-1/3 min-h-screen object-cover object-left"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 80,
          }}
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
