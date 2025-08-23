import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import coffee4 from "../assets/coffee4.jpg";
import formimg2 from "../assets/imagecaro-01.jpg";
import waffles1 from "../assets/imagecaro-06.jpg";
import formimg1 from "../assets/imageside.jpg";
import banner from "../assets/menubanner.png";
import popularBg from "../assets/popular-bg.png";
import saladMain from "../assets/salad-main.jpg";
import secondbanner from "../assets/second-banner.jpg";
import image2 from "../assets/soup.jpg";
import { FloatingContactIcons } from "../components/common/FloatingContactIcons";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";
import { allMenuItems } from "../constants/menuData";
import { useReservationNavigation } from "../utils/navigation";

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("main_course");
  const navigate = useNavigate();
  const handleReservationClick = useReservationNavigation(navigate);

  // Form state
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
    setSnackbar({ ...snackbar, open: false });
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      showSnackbar("Please fill in all required fields", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
        message: `Reservation request from ${formData.fullName} for ${formData.guests} on ${formData.date} at ${formData.time}. Contact: ${formData.phone}, Email: ${formData.email}`,
      };

      await emailjs.send(
        "service_ga0l9mu",
        "template_i110m2w",
        templateParams,
        "p1sWGViGQPTgg6qBM"
      );

      showSnackbar("Reservation request sent successfully! We'll contact you soon.", "success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        guests: "1 Person",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      showSnackbar("Failed to send reservation request. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-x-hidden relative lg:pt-20">
      <TopLine />
      <Navbar />
      <FloatingContactIcons />

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
          className="flex flex-col text-center lg:text-left max-w-4xl relative left-[-20%]"
        >
          <div className="mb-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight"
            >
              Savor Every Bite at Chill 99
            </motion.h1>
          </div>
          <div className="mb-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium"
            >
              Browse our selection of freshly crafted dishes made to delight your taste buds.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#1F0D09] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Dishes</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Soup & Salad Selection
          </h2>
        </motion.div>
        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-between flex-col lg:flex-row gap-5"
          >
            <div className="w-full bg-[#31201BF0] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <div className="lg:gap-5 w-full flex flex-col">
                {allMenuItems
                  .filter((item) => item.category === "soup")
                  .slice(0, 4)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.2 + item.id * 0.05 }}
                      className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                    >
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 + item.id * 0.05 }}
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                          Rs. {item.price.toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full flex justify-center"
            >
              <motion.img
                src={image2}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-between flex-col-reverse lg:flex-row gap-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="w-full flex justify-center"
            >
              <motion.img
                src={saladMain}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              />
            </motion.div>
            <div className="w-full bg-[#31201BF0] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <div className="lg:gap-5 w-full flex flex-col">
                {allMenuItems
                  .filter((item) => item.category === "salad")
                  .slice(0, 5)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.2 + item.id * 0.05 }}
                      className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                    >
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 + item.id * 0.05 }}
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                          Rs. {item.price.toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breakfast Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-50 py-8 lg:py-0 min-h-[40vh] lg:h-[271px] bg-[#1F0D09]"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09BA, #1F0D09BA), url(${secondbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center lg:text-left">
          <p className="font-medium text-lg lg:text-xl mb-2">
            Start your day with a cozy breakfast at Chill 99.
          </p>
          <h2 className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Breakfast Reservation – Share the Morning Together
          </h2>
        </div>
        <div className="flex items-center text-sm sm:text-base lg:text-lg font-medium">
          <button
            onClick={handleReservationClick}
            className="flex items-center gap-3 px-4 lg:px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer"
          >
            BOOK A SPOT <FaChevronRight />
          </button>
        </div>
      </section>

      <section className="bg-[#31201B] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Dishes</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Chill 99 Restaurant Menu
          </h2>
        </motion.div>
        {/* menu select bar */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {[
            { label: "Main Course", value: "main_course" },
            { label: "Pasta", value: "pasta" },
            { label: "Rice", value: "rice" },
            { label: "Shawarma", value: "shawarma" },
            { label: "Burger", value: "burger" },
            { label: "Corn Dog", value: "corn_dog" },
          ].map((cat) => (
            <button
              key={cat.value}
              className={`px-4 py-2 rounded-lg transition-all duration-500 ${
                selectedCategory === cat.value ? "bg-[#81685F]" : "bg-[#1F0D09] hover:bg-[#81685F]"
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="w-full bg-[#1F0D09] flex flex-col items-center justify-between py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full"
          >
            {allMenuItems
              .filter((item) => item.category === selectedCategory)
              .map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 + item.id * 0.05 }}
                  className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 + item.id * 0.05 }}
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                      Rs. {item.price.toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized Reservation Form Section */}
      <section
        className="bg-[#1F0D09] w-full min-h-screen flex items-center justify-center relative"
        id="reservation-section"
      >
        {/* Left image - Hidden on mobile and tablet */}
        <img
          src={formimg1}
          alt=""
          className="hidden lg:block w-1/4 min-h-screen object-cover object-right"
        />

        {/* Center form - Full width on mobile, constrained on desktop */}
        <div className="w-full lg:w-2/4 px-4 sm:px-6 lg:px-16 py-8 lg:py-12 flex flex-col items-center text-center text-white bg-[#1F0D09]">
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Booking Table
          </p>
          <h2 className="italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#FFD580] font-semibold mb-6 lg:mb-8">
            Make Your Reservation
          </h2>

          {/* Form - Single column on mobile, two columns on larger screens */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-lg lg:max-w-none"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white placeholder-gray-300 min-h-[48px]"
              required
            />
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
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
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white min-h-[48px]"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="p-4 text-base rounded bg-transparent border border-[#E5E7EB] focus:outline-none focus:border-[var(--green-primary)] text-white min-h-[48px]"
              required
            />
          </form>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center gap-3 px-6 lg:px-8 py-4 text-base lg:text-lg font-semibold rounded-lg transition-all duration-500 cursor-pointer min-h-[48px] min-w-[200px] justify-center ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[var(--green-primary)] hover:bg-[var(--green-dark)]"
              }`}
            >
              {isSubmitting ? "SENDING..." : "BOOK TABLE"} <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right image - Hidden on mobile and tablet */}
        <img
          src={formimg2}
          alt=""
          className="hidden lg:block w-1/4 min-h-screen object-cover object-left"
        />
      </section>

      {/* Material-UI Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            backgroundColor:
              snackbar.severity === "success"
                ? "#FFD580"
                : snackbar.severity === "error"
                ? "#f44336"
                : snackbar.severity === "warning"
                ? "#ff9800"
                : "#2196f3",
            color: snackbar.severity === "success" ? "#1F0D09" : "white",
            "& .MuiAlert-icon": {
              color: snackbar.severity === "success" ? "#1F0D09" : "white",
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <section
        className="bg-[#1F0D09] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09C9, #1F0D09C9), url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Beverages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center mt-12"
        >
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Coffee</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[#FFD580] font-bold mb-8">
            Hot & Cold Expresso
          </h2>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-4">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <motion.img
              src={coffee4}
              alt="Coffee"
              className="w-full max-w-md lg:w-[90%] rounded-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
          </motion.div>
          <div className="w-full bg-[#00000051] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full"
            >
              {allMenuItems
                .filter((item) => item.category === "beverage")
                .map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 + item.id * 0.05 }}
                    className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.3 + item.id * 0.05 }}
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                        Rs. {item.price.toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#1F0D09] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09C9, #1F0D09C9), url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* waffles Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Dishes</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Waffle & Desert Menu
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center flex-col lg:flex-row gap-5"
          >
            <div className="w-full bg-[#00000051] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full"
              >
                {allMenuItems
                  .filter((item) => item.category === "waffle")
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.2 + item.id * 0.05 }}
                      className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                    >
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 + item.id * 0.05 }}
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                          Rs. {item.price.toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex justify-center lg:w-[50%] w-full h-100"
            >
              <motion.img
                src={waffles1}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg h-auto object-cover"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center flex-col lg:flex-row-reverse gap-5"
          >
            <div className="w-full bg-[#00000051] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full"
              >
                {allMenuItems
                  .filter((item) => item.category === "dessert")
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.2 + item.id * 0.05 }}
                      className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                    >
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 + item.id * 0.05 }}
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                          Rs. {item.price.toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex justify-center lg:w-[50%] w-full h-100"
            >
              <motion.img
                src={waffles1}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg h-auto object-cover"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
