import { useState } from "react";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";
import banner1 from "../assets/header-banner.jpg";
import banner2 from "../assets/header-banner-02.jpg";
import banner3 from "../assets/header-banner-03.png";
import aboutbg from "../assets/about-bg.png";
import secondbanner from "../assets/second-banner.jpg";
import thirdbanner from "../assets/banner03.jpg";
import about from "../assets/about.png";
import whychhose from "../assets/whychoose.jpg";
import popularBg from "../assets/popular-bg.png";
import { FaChevronRight } from "react-icons/fa6";
import ImageCarousel from "../components/features/CarouselItem";
import { PopularMenu } from "../components/features/PopularMenu";
import iconchoose01 from "../assets/iconschoose01.png";
import iconchoose02 from "../assets/iconchoose02.png";
import iconchoose03 from "../assets/iconschoose03.png";
import iconchoose04 from "../assets/iconschoose04.png";
import iconchoose05 from "../assets/iconchoose05.png";
import iconchoose06 from "../assets/iconchoose06.png";
import burger from "../assets/imagecaro-01.jpg";
import beverage from "../assets/beverage.jpg";
import coffee from "../assets/cofee.jpg";
import gal1 from "../assets/cofee2.jpg"
import gal2 from "../assets/coffee3.jpg"
import gal3 from "../assets/coffee4.jpg"
import gal4 from "../assets/coffee5.jpg"
import gal5 from "../assets/coffee6.jpg"
import logo from "../assets/chill-99.png";
import testimonial from "../assets/testimonialbg.png";
import { Testimonial } from "../components/features/Testimonial";
import waffles from "../assets/imagecaro-06.jpg";
import meat from "../assets/imagecaro-04.png";
import burgerfries from "../assets/burger.jpg";
import calender from "../assets/calender.png";
import msg from "../assets/msg.png";
import mandala from "../assets/mandala.png";

import { MapPin, Mail, Phone } from "lucide-react";

const galleryImages = [gal1, coffee, gal2, gal3, gal4, gal5];

const banners = [
  {
    image: banner1,
    title: (
      <>
        Chill 99 - Your<span className="block">Everyday Escape</span>
      </>
    ),
    subtitle: (
      <>
        Delicious bites, cozy feels, and a space that feeds your
        <span className="block">
          soul. We’re not just serving food — we’re setting the tone.
        </span>
      </>
    ),
    buttons: [
      {
        text: "Explore More",
        color:
          "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
      },
      { text: "Get Delivery", color: "bg-[#5B443F] text-white" },
    ],
  },
  {
    image: banner2,
    title: (
      <>
        Workshop Seats For You &<span className="block">Your Loved Ones</span>
      </>
    ),
    subtitle: (
      <>
        Inspiring moments, shared creativity, and a space to grow together.
        <span className="block">
          We’re not just hosting a workshop — we’re crafting memories.
        </span>
      </>
    ),
    buttons: [
      {
        text: "JOIN NOW",
        color:
          "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
      },
    ],
  },
  {
    image: banner3,
    title: (
      <>
        Breakfast Reservation – Share
        <span className="block">the Morning Together</span>
      </>
    ),
    subtitle: (
      <>
        Warm sips, hearty bites, and mornings made meaningful. We’re
        <span className="block">
          not just serving breakfast — we’re starting your day with care.
        </span>
      </>
    ),
    buttons: [
      {
        text: "BOOK A SPOT",
        color:
          "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
      },
    ],
  },
];

export const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const handleBannerChange = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const current = banners[bannerIndex];

  return (
    <div className="w-full overflow-x-hidden h-screen relative">
      <TopLine />
      <Navbar />
      {/* banner */}
      <section
        className="text-white flex items-center justify-between px-50 transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${current.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          cursor: "pointer",
        }}
        onClick={handleBannerChange}
        onTouchStart={handleBannerChange}
      >
        <div className="flex flex-col">
          <div className="mb-3">
            {/* title */}
            <p className="text-[50px] font-bold">{current.title}</p>
          </div>
          <div className="mb-5">
            {/* subtitle */}
            <p className="text-xl italic text-[var(--green-primary)] font-medium">
              {current.subtitle}
            </p>
          </div>
          <div className="flex text-[var(--color-topline)] items-center gap-3 text-lg font-medium">
            {current.buttons.map((btn, idx) => (
              <button
                key={idx}
                className={`${btn.color} flex items-center gap-3 px-5 py-2 rounded-lg cursor-pointer`}
              >
                {btn.text} <FaChevronRight />
              </button>
            ))}
          </div>
        </div>
        <div></div>
      </section>

      {/* about us */}
      <section
        className="text-white flex items-center justify-between px-50"
        style={{
          backgroundImage: `linear-gradient(to right, #261410E5, #261410E5), url(${aboutbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-medium text-lg">ABOUT US</h1>
          <p className="text-[var(--green-primary)] font-semibold italic text-[40px] mb-3">
            Where tradition meets taste in
            <span className="block">the heart of Galle Fort.</span>
          </p>
          <p className="max-w-[500px] text-xl">
            <span className="font-bold">Chill 99</span> is a cozy eatery nestled
            in the heart of{" "}
            <span className="font-bold">Galle Fort, Sri Lanka.</span>
            <span className="block">
              Celebrated for its flavorful meals, hearty comfort food, freshly
              made snacks, and homemade treats, it’s a favorite stop for both
              locals and travelers. Whether you’re craving a warm brunch, a
              savory bite, or a sweet indulgence, Chill 99 serves up satisfying
              dishes in a relaxed, stylish setting — the perfect escape from the
              everyday bustle.
            </span>
          </p>
        </div>
        <div>
          <img src={about} alt="" />
        </div>
      </section>

      {/* second banner */}
      <section
        className="text-white flex items-center justify-between px-50"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09BA, #1F0D09BA), url(${secondbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "271px",
        }}
      >
        <div>
          <p className="font-medium text-xl">
            Start your day with a cozy breakfast at Chill 99.
          </p>
          <h1 className="text-[var(--green-primary)] italic font-semibold text-[40px]">
            Breakfast Reservation – Share
            <span className="block">the Morning Together</span>
          </h1>
        </div>
        <div className="flex text-[var(--color-topline)] items-center text-lg font-medium">
          <button className="flex items-center gap-3 px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer">
            BOOK A SPOT <FaChevronRight />
          </button>
        </div>
      </section>

      {/* image carousel */}
      <section className="bg-[var(--color-navbar)] h-[571px] w-full flex items-center justify-center">
        <ImageCarousel />
      </section>

      {/* best dishes */}
      <section
        className="text-white flex flex-col px-50 py-10 items-center justify-between gap-5"
        style={{
          backgroundImage: `linear-gradient(to right, #230700C4, #230700C4), url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-xl text-[#FAF3E0] font-medium">
            Choose Best Dishes
          </p>
          <h1 className="italic text-[40px] text-[var(--green-primary)] font-semibold">
            Chill 99 – Customer Favorites
          </h1>
        </div>
        <div>
          <PopularMenu />
        </div>
      </section>

      {/* third banner */}
      <section
        className="text-white flex items-center justify-between px-50"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09BA, #1F0D09BA), url(${thirdbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "271px",
        }}
      >
        <div>
          <p className="font-medium text-xl">Need a Table On Chill 99</p>
          <h1 className="text-[var(--green-primary)] italic font-semibold text-[40px]">
            Booking Table For Your & Family
            <span className="block">Members</span>
          </h1>
        </div>
        <div className="flex text-[var(--color-topline)] items-center text-lg font-medium">
          <button className="flex items-center gap-3 px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer">
            BOOK A TABLE <FaChevronRight />
          </button>
        </div>
      </section>

      {/* why choose */}
      <section className="bg-[#261410] w-screen h-[100vh] px-50 py-20 flex items-center justify-center text-white">
        <div className="w-[40%]">
          <img src={whychhose} alt="" className="w-[80%]" />
        </div>
        <div className="flex flex-col items-start w-[60%] gap-5">
          <div className="felx flex-col">
            <p
              className="text-xl font-medium text-[#FAF3E0]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Why Choose Us
            </p>
            <h1 className="text-[var(--green-primary)] italic font-semibold text-[40px]">
              Your perfect café escape in
              <span className="block">Galle Fort.</span>
            </h1>
          </div>

          <div className="flex felx-col items-start">
            <div
              className="flex items-start gap-3"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              <img src={iconchoose01} alt="" className="mt-2" />
              <div className="flex flex-col">
                <h1 className="text-[#FAF3E0] font-bold text-[22px]">
                  Signature Dishes, Freshly Prepared Daily
                </h1>
                <p className="text-lg font-normal">
                  Enjoy a range of handcrafted dishes, made with bold flavors,
                  fresh ingredients, and a whole lot of care.
                </p>
              </div>
            </div>
          </div>

          <div className="flex felx-col items-start">
            <div
              className="flex items-start gap-3"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              <img src={iconchoose02} alt="" className="mt-2 w-[25px]" />
              <div className="flex flex-col">
                <h1 className="text-[#FAF3E0] font-bold text-[22px]">
                  Signature Dishes, Freshly Prepared Daily
                </h1>
                <p className="text-lg font-normal">
                  Enjoy a range of handcrafted dishes, made with bold flavors,
                  fresh ingredients, and a whole lot of care.
                </p>
              </div>
            </div>
          </div>

          <div className="flex felx-col items-start">
            <div
              className="flex items-start gap-3"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              <img src={iconchoose03} alt="" className="mt-2" />
              <div className="flex flex-col">
                <h1 className="text-[#FAF3E0] font-bold text-[22px]">
                  Signature Dishes, Freshly Prepared Daily
                </h1>
                <p className="text-lg font-normal">
                  Enjoy a range of handcrafted dishes, made with bold flavors,
                  fresh ingredients, and a whole lot of care.
                </p>
              </div>
            </div>
          </div>

          <div className="flex felx-col items-start">
            <div
              className="flex items-start gap-3"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              <img src={iconchoose04} alt="" className="mt-2" />
              <div className="flex flex-col">
                <h1 className="text-[#FAF3E0] font-bold text-[22px]">
                  Signature Dishes, Freshly Prepared Daily
                </h1>
                <p className="text-lg font-normal">
                  Enjoy a range of handcrafted dishes, made with bold flavors,
                  fresh ingredients, and a whole lot of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* menu */}
      <section className="w-full h-[441px] bg-[#31201B] px-50 flex items-center justify-center gap-8">
        {/* Cafe Menu */}
        <div className="relative w-90 h-64 overflow-hidden rounded-lg cursor-pointer group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${burger})`,
            }}
          />
          <div className="absolute inset-0 bg-opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <img src={iconchoose02} alt="" className="mt-2 w-[45px]" />
            <h3 className="text-2xl font-bold text-[var(--green-primary)] tracking-wide">
              Cafe Menu
            </h3>
          </div>
          <div className="absolute inset-8 border-2 border-[var(--green-primary)] opacity-80" />
        </div>

        <div className="relative w-90 h-64 overflow-hidden rounded-lg cursor-pointer group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${coffee})`,
            }}
          />
          <div className="absolute inset-0 bg-opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <img src={iconchoose05} alt="" className="mt-2 w-[45px]" />
            <h3 className="text-2xl font-bold text-[var(--green-primary)] tracking-wide">
              Coffee Menu
            </h3>
          </div>
          <div className="absolute inset-8 border-2 border-[var(--green-primary)] opacity-80" />
        </div>

        <div className="relative w-90 h-64 overflow-hidden rounded-lg cursor-pointer group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${beverage})`,
            }}
          />
          <div className="absolute inset-0 bg-opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <img src={iconchoose06} alt="" className="mt-2 w-[50px]" />
            <h3 className="text-2xl font-bold text-[var(--green-primary)] tracking-wide">
              Beverages
            </h3>
          </div>
          <div className="absolute inset-8 border-2 border-[var(--green-primary)] opacity-80" />
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="relative w-full h-[100vh] flex flex-col bg-[#31201B] text-white px-50 py-20 gap-30"
        style={{
          backgroundImage: `linear-gradient(to right, #2D1B17C9, #2D1B17C9), url(${testimonial})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="" style={{ fontFamily: "Inter, sans-serif" }}>
          <img
            src={logo}
            alt=""
            className="absolute top-10 left-30 w-50 h-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#FAF3E0] font-medium text-xl">
              Customer Feedback
            </p>
            <h1 className="text-[40px] font-semibold text-[var(--green-primary)] italic">
              What Our Clients Say
            </h1>
          </div>
        </div>

        <div>
          <Testimonial />
        </div>
      </section>

      <section className="bg-[#230700FC] h-[300px] w-full flex items-center justify-between px-50 py-10 text-white">
        <div className="flex flex-col items-center">
          <h1
            className="text-[#F4C430] text-[50px] font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            120+
          </h1>
          <h5
            className="text-[30px] font-semibold"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Happy Customers
          </h5>
          <p
            className="text-xl font-medium"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Sweet smiles, daily.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1
            className="text-[#F4C430] text-[50px] font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            350+
          </h1>
          <h5
            className="text-[30px] font-semibold"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Dishes Served
          </h5>
          <p
            className="text-xl font-medium"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Flavors with Feeling.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1
            className="text-[#F4C430] text-[50px] font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            50+
          </h1>
          <h5
            className="text-[30px] font-semibold"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Positive Reviews
          </h5>
          <p
            className="text-xl font-medium"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            A local and tourist favorite.
          </p>
        </div>
      </section>

      <section className="bg-[#2D1B17] w-full h-[100vh] flex flex-col px-50 py-10 gap-10 text-[#F5F5F5]">
        <div
          className="flex flex-col items-center justify-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p className="text-[#FAF3E0] font-medium text-xl">
            Get Every Single Update
          </p>
          <h1 className="text-[40px] font-semibold text-[var(--green-primary)] italic">
            Fresh updates, straight from Chill 99
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="relative w-80 h-[400px] overflow-hidden rounded-lg cursor-pointer group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${waffles})`,
              }}
            />
            <div className="absolute inset-0 bg-opacity-30" />
            <div className="absolute inset-8 flex flex-col items-center justify-end text-center">
              <h3 className="text-[24px] font-bold text-[var(--green-primary)] tracking-wide">
                Weekly Taste Drops
              </h3>
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-between gap-2">
                  <img src={calender} alt="" className="w-4" />
                  <p className="text-[12px] font-semibold">July 9, 2025</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <img src={msg} alt="" className="w-4" />
                  <p className="text-[12px] font-semibold">Comments (22)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-80 h-[400px] overflow-hidden rounded-lg cursor-pointer group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${burgerfries})`,
              }}
            />
            <div className="absolute inset-0 bg-opacity-30" />
            <div className="absolute inset-8 flex flex-col items-center justify-end text-center">
              <h3 className="text-[24px] font-bold text-[var(--green-primary)] tracking-wide">
                New Burger Just Dropped
              </h3>
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-between gap-2">
                  <img src={calender} alt="" className="w-4" />
                  <p className="text-[12px] font-semibold">July 9, 2025</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <img src={msg} alt="" className="w-4" />
                  <p className="text-[12px] font-semibold">Comments (22)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-80 h-[400px] overflow-hidden rounded-lg cursor-pointer group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${meat})`,
              }}
            />
            <div className="absolute inset-0 bg-opacity-30" />
            <div className="absolute inset-8 flex flex-col items-center justify-end text-center">
              <h3 className="text-[24px] font-bold text-[var(--green-primary)] tracking-wide">
                Flavor of the Month V Meat Classic
              </h3>
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-between gap-2">
                  <img src={calender} alt="" className="w-4" />
                  <p className="text-[12px] font-semibold">July 9, 2025</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <img src={msg} alt="" className="w-4" />
                  <p className="text-[12px] font-semibold">Comments (22)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="flex items-center gap-3 rounded-md cursor-pointer text-[var(--green-primary)] border border-[var(--green-primary)] py-2 px-3">
            Explore More <FaChevronRight />
          </button>
        </div>
      </section>

      {/* fourth banner */}
      <section
        className="text-white flex items-center justify-between px-50 bg-[#B39A91]"
        style={{
          backgroundImage: `linear-gradient(to right, #311F1ADE, #311F1ADE), url(${mandala})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "271px",
        }}
      >
        <div>
          <p className="font-medium text-xl">
            Workshop Slots Filling Fast – Book Now!
          </p>
          <h1 className="text-[var(--green-primary)] italic font-semibold text-[40px]">
            Workshop Seats For You & Your
            <span className="block">Loved Ones</span>
          </h1>
        </div>
        <div className="flex text-[var(--color-topline)] items-center text-lg font-medium">
          <button className="flex items-center gap-3 px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer">
            JOIN NOW <FaChevronRight />
          </button>
        </div>
      </section>

      {/* footer */}
      <footer className="relative bg-[#261410] w-full h-[70vh] text-white px-50 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand and Working Hours */}
            {/* Logo */}
            <div>
              <img src={logo} alt="" className="w-50 h-auto" />
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-[var(--green-primary)] text-[22px] font-semibold mb-10 italic">
                Working Hours & Services
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-medium text-xl">Sunday - Monday</span>
                  </div>
                  <p className="text-[#A1887F] ml-4 text-[16px] font-medium">10:00 AM - 09:30 PM</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-medium text-xl">Delivery</span>
                  </div>
                  <p className="text-[#A1887F] ml-4 text-[16px] font-medium">Takeout</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-medium text-xl">Dine-in</span>
                  </div>
                  <p className="text-[#A1887F] ml-4 text-[16px] font-medium">Outdoor Seating</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-[var(--green-primary)] text-xl font-semibold mb-10 italic">
                Contact Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-7 text-[#A1887F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-xl mb-1">Location</h4>
                    <p className="text-[#A1887F] text-[16px] font-medium">
                      22 Leyn Baan St, Galle, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-7 text-[#A1887F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-xl mb-1">Email</h4>
                    <p className="text-[#A1887F] text-[16px] font-medium">chill99allefort@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-7 text-[#A1887F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-xl mb-1">Phone</h4>
                    <p className="text-[#A1887F] text-[16px] font-medium">+94 77 602 8828</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-[var(--green-primary)] text-xl font-semibold mb-10 italic">
                Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2">
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
          <div className="mt-12 pt-8 border-t border-[var(--green-primary)] text-center">
            <p className="text-white">
              Copyright © 2025 Chill99. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
