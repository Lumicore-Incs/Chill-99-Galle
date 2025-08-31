import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import aboutbg from "../assets/about-bg.png";
import cofee from "../assets/booking-01.jpg";
import mandala from "../assets/booking-02.jpg";
import thirdbanner from "../assets/booking-03.jpg";
import logo from "../assets/chill-99.png";
// banners are now loaded from src/constants/banners
import iconchoose02 from "../assets/iconchoose02.png";
import iconchoose05 from "../assets/iconchoose05.png";
import iconchoose06 from "../assets/iconchoose06.png";
import iconchoose01 from "../assets/iconschoose01.png";
import iconchoose03 from "../assets/iconschoose03.png";
import iconchoose04 from "../assets/iconschoose04.png";
import burger from "../assets/imagecaro-01.jpg";
import popularBg from "../assets/popular-bg.png";
import testimonial from "../assets/testimonialbg.png";
import whychhose from "../assets/whychoose.jpg";
import FAQ from "../components/common/FAQ";
import { FloatingContactIcons } from "../components/common/FloatingContactIcons";
import { Navbar } from "../components/common/Navbar";
import ReviewButtons from "../components/common/ReviewButtons";
import { TopLine } from "../components/common/TopLine";
import ImageCarousel from "../components/features/CarouselItem";
import { PopularMenu } from "../components/features/PopularMenu";
import { Testimonial } from "../components/features/Testimonial";
import banners from "../constants/banners";
import { useReservationNavigation } from "../utils/navigation";

import { Footer } from "../components/common/Footer";

export const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const navigate = useNavigate();
  const handleReservationClick = useReservationNavigation(navigate);

  const handleBannerChange = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  // Set up automatic banner rotation
  useEffect(() => {
    const intervalId = setInterval(handleBannerChange, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const current = banners[bannerIndex];

  return (
    <div className="w-full overflow-x-hidden relative lg:pt-20">
      <TopLine />
      <Navbar />
      <FloatingContactIcons />

      {/* Hero Banner */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[96vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${current.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
          transition: "background-image 0.7s ease-in-out",
        }}
        onClick={handleBannerChange}
        onTouchStart={handleBannerChange}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row text-left max-w-4xl left-[-20%] relative"
        >
          <img src={logo} alt="Chill 99 Logo" style={{ height: "11vw", marginRight: "16px" }} />
          <div>
            <div className="mb-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center text-left text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight"
                style={{ color: "#ffc000" }}
              >
                {current.title}
              </motion.h1>
            </div>
            <div className="mb-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium"
              >
                {current.subtitle}
              </motion.p>
            </div>
            <div className="flex flex-col sm:flex-row text-[var(--color-topline)] items-center justify-center lg:justify-start gap-3 text-sm sm:text-base lg:text-lg font-medium">
              {current.buttons.map((btn, idx) =>
                btn.href ? (
                  <motion.a
                    key={idx}
                    href={btn.href}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={`${btn.color} flex items-center gap-3 px-6 lg:px-8 rounded-lg cursor-pointer w-full sm:w-auto justify-center min-h-[48px] min-w-[160px]`}
                  >
                    {btn.icon && btn.icon} {btn.text} <FaChevronRight />
                  </motion.a>
                ) : (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={`${btn.color} flex items-center gap-3 px-6 lg:px-8 rounded-lg cursor-pointer w-full sm:w-auto justify-center min-h-[48px] min-w-[160px]`}
                  >
                    {btn.icon && btn.icon} {btn.text} <FaChevronRight />
                  </motion.button>
                )
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section
        className="text-white flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-50 py-12 lg:py-0 min-h-[70vh] lg:min-h-[100vh] bg-[#261410]"
        style={{
          backgroundImage: ` url(${aboutbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col text-center lg:text-left"
        >
          <h2 className="font-medium text-lg">ABOUT US</h2>
          <p className="text-[var(--green-primary)] font-semibold italic text-2xl sm:text-3xl lg:text-4xl mb-3">
            Where tradition meets taste in the heart of Galle Fort.
          </p>
          <p className=" text-base sm:text-lg lg:text-xl mx-auto lg:mx-0 w-2/4">
            <span className="font-bold">Chill 99 Galle Fort</span>
            is a charming café Nestled in the scenic village of Galle Fort, in the heart of Galle,
            Southern Province, Sri Lanka, Chill 99 Galle Fort is a delightful oasis of calm and
            tranquility. This charming cafe is renowned for its wide variety of pastry items,
            different cappuccino, coffee, amazing taste bubble tea refreshing beverages, and more,
            making it a beloved destination for locals and visitors alike. As you step into Chill 99
            Galle Fort, you are greeted with a warm and inviting atmosphere, perfect for escaping
            the hustle and bustle of everyday life. The cafe's interior is cozy yet stylish, with
            comfortable seating arrangements and tasteful decor that creates a serene ambiance.
          </p>
        </motion.div>
      </section>

      {/* Breakfast Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-stretch min-h-[40vh] lg:h-[271px] overflow-hidden"
        style={{
          backgroundImage: ` url(${cofee})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section - Breakfast Spread Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 relative"
        ></motion.div>

        {/* Right Section - Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-12 py-8 lg:py-12"
          style={{
            // background: `linear-gradient(135deg, #8B4513, #654321)`,
            position: "relative",
            right: "-1rem",
          }}
        >
          <div className=" lg:text-left px-1 text-center">
            <p className="font-medium text-lg lg:text-xl mb-3 text-white">
              Start your day with a cozy breakfast at Chill 99.
            </p>
            <h2 className="text-[#FFD700] font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-wide">
              BREAKFAST RESERVATION
            </h2>
            <p className="text-white font-medium text-lg lg:text-xl">SHARE THE MORNING TOGETHER</p>
          </div>

      <motion.button
        onClick={() => handleReservationClick("breakfast")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1 px-6 lg:px-2 py-4 rounded-lg bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center text-white font-semibold"
          >
            BOOK A SPOT <FaChevronRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Image Carousel */}
      <section className="bg-[var(--color-navbar)] min-h-[400px] lg:h-[60vh] w-full flex items-center justify-center">
        <ImageCarousel />
      </section>

      {/* Best Dishes */}
      <section
        className="text-white flex flex-col px-4 lg:px-50 py-10 items-center justify-center gap-8 min-h-[80vh] lg:min-h-[100vh] bg-[#230700]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700C4, #230700C4), url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Dishes</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Chill 99 – Customer Favorites
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-6xl"
        >
          <PopularMenu />
        </motion.div>
      </section>

      {/* Table Booking Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-stretch min-h-[40vh] lg:h-[271px] overflow-hidden"
        style={{
          backgroundImage: ` url(${thirdbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section - Breakfast Spread Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 relative"
        ></motion.div>

        {/* Right Section - Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-12 py-8 lg:py-12"
          style={{
            // background: `linear-gradient(135deg, #8B4513, #654321)`,
            position: "relative",
            right: "-1rem",
          }}
        >
          <div className=" lg:text-left px-1 text-center">
            <p className="font-medium text-lg lg:text-xl mb-3 text-white">
              Need a Table On Chill 99.
            </p>
            <h2 className="text-[#FFD700] font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-wide">
              Booking Table For Your & Family Members
            </h2>
            <p className="text-white font-medium text-lg lg:text-xl">SHARE THE MORNING TOGETHER</p>
          </div>

          <motion.button
            onClick={() => handleReservationClick("rice-and-curry")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1 px-6 lg:px-2 py-4 rounded-lg bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center text-white font-semibold"
          >
            BOOK A TABLE <FaChevronRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-[#261410] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-center text-white gap-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-[40%] flex justify-center"
        >
          <motion.img
            src={whychhose}
            alt="Why choose us"
            className="w-full max-w-md lg:w-[80%]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-start w-full lg:w-[60%] gap-6"
        >
          <div className="text-center lg:text-left">
            <p className="text-lg lg:text-xl font-medium text-[#FAF3E0] mb-2">Why Choose Us</p>
            <h2 className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Your perfect café escape in Galle Fort.
            </h2>
          </div>

          {[
            {
              icon: iconchoose01,
              title: "Signature Dishes, Freshly Prepared Daily",
              desc: "Enjoy a range of handcrafted dishes, made with bold flavors, fresh ingredients, and a whole lot of care.",
            },
            {
              icon: iconchoose02,
              title: "Coffee That Warms the Soul",
              desc: "From smooth cappuccinos to bold espresso – we brew every cup with care.",
            },
            {
              icon: iconchoose03,
              title: "Bubble Tea, Bursting with Flavor",
              desc: "Discover your new favorite drink among our unique and refreshing bubble tea blends.",
            },
            {
              icon: iconchoose04,
              title: "A Cozy Escape in Galle Fort",
              desc: "Relax in a warm, stylish setting tucked inside the historic beauty of Galle Fort.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="flex flex-col sm:flex-row items-start gap-3 text-center sm:text-left"
            >
              <img src={item.icon} alt="" className="w-8 h-8 mx-auto sm:mx-0 mt-2 flex-shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-[#FAF3E0] font-bold text-lg lg:text-xl xl:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg font-normal">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Menu Categories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full min-h-[400px] lg:h-[441px] bg-[#31201B] px-4 lg:px-50 flex items-center justify-center py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
          {[
            { title: "Cafe Menu", icon: iconchoose02 },
            { title: "Coffee Menu", icon: iconchoose05 },
            { title: "Beverages", icon: iconchoose06 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative w-full h-48 lg:h-64 overflow-hidden rounded-lg cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${burger})`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <img src={item.icon} alt="" className="w-8 h-8 lg:w-12 lg:h-12 mb-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--green-primary)] tracking-wide">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-4 lg:inset-8 border-2 border-[var(--green-primary)] opacity-80" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[80vh] lg:min-h-[100vh] flex flex-col bg-[#31201B] text-white px-4 lg:px-50 py-12 lg:py-20 gap-8 lg:gap-16"
        style={{
          backgroundImage: `linear-gradient(to right, #2D1B17C9, #2D1B17C9), url(${testimonial})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center flex justify-between max-sm:block">
          <img
            src={logo}
            alt="Chill 99 Logo"
            className="hidden lg:block top-10 left-30 w-32 lg:w-50 h-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-[#FAF3E0] font-medium text-lg lg:text-xl mb-2">Customer Feedback</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--green-primary)] italic">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="mt-4 flex items-center justify-center">
            <ReviewButtons />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex items-center justify-center w-full"
        >
          <Testimonial />
        </motion.div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-[#230700FC] min-h-[250px] lg:h-[300px] w-full flex flex-col lg:flex-row items-center justify-around lg:justify-between px-4 lg:px-50 py-8 lg:py-10 text-white gap-8 lg:gap-0"
      >
        {[
          { number: "120+", title: "Happy Customers", subtitle: "Sweet smiles, daily." },
          { number: "350+", title: "Dishes Served", subtitle: "Flavors with Feeling." },
          { number: "50+", title: "Positive Reviews", subtitle: "A local and tourist favorite." },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-[#F4C430] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">
              {stat.number}
            </h3>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{stat.title}</h4>
            <p className="text-base lg:text-xl font-medium">{stat.subtitle}</p>
          </motion.div>
        ))}
      </motion.section>

      <FAQ />

      {/* Workshop Banner */}
      {/* <section
        className="text-white flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-50 py-8 lg:py-0 min-h-[40vh] lg:h-[271px] bg-[#B39A91]"
        style={{
          backgroundImage: `linear-gradient(to right, #311F1ADE, #311F1ADE), url(${mandala})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center lg:text-left">
          <p className="font-medium text-lg lg:text-xl mb-2">
            Workshop Slots Filling Fast – Book Now!
          </p>
          <h2 className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Workshop Seats For You & Your Loved Ones
          </h2>
        </div>
        <div className="flex items-center text-sm sm:text-base lg:text-lg font-medium">
          <button className="flex items-center gap-3 px-6 lg:px-8 py-4 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center">
            JOIN NOW <FaChevronRight />
          </button>
        </div>
      </section> */}

      <section
        className="text-white flex flex-col lg:flex-row items-stretch min-h-[40vh] lg:h-[271px] overflow-hidden"
        style={{
          backgroundImage: ` url(${mandala})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section - Breakfast Spread Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 relative"
        ></motion.div>

        {/* Right Section - Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-12 py-8 lg:py-12"
          style={{
            // background: `linear-gradient(135deg, #8B4513, #654321)`,
            position: "relative",
            right: "-1rem",
          }}
        >
          <div className=" lg:text-left px-1 text-center">
            <p className="font-medium text-lg lg:text-xl mb-3 text-white">
              Workshop Slots Filling Fast – Book Now!.
            </p>
            <h2 className="text-[#FFD700] font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-wide">
              Workshop Seats For You & Your Loved Ones
            </h2>
            <p className="text-white font-medium text-lg lg:text-xl">SHARE THE MORNING TOGETHER</p>
          </div>

          <motion.button
            onClick={() => handleReservationClick("workshop")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1 px-6 lg:px-2 py-4 rounded-lg bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center text-white font-semibold"
          >
            BOOK A TABLE <FaChevronRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
