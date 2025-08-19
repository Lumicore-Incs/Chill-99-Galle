import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import iconchoose02 from "../assets/iconchoose02.png";
import iconchoose05 from "../assets/iconchoose05.png";
import iconchoose06 from "../assets/iconchoose06.png";
import iconchoose01 from "../assets/iconschoose01.png";
import burger from "../assets/imagecaro-01.jpg";
import logo from "../assets/chill-99.png";
import testimonial from "../assets/testimonialbg.png";
import { Testimonial } from "../components/features/Testimonial";
import waffles from "../assets/imagecaro-06.jpg";
import meat from "../assets/imagecaro-04.png";
import burgerfries from "../assets/burger.jpg";
import { CalendarDays, MessagesSquare } from "lucide-react";
import mandala from "../assets/mandala.png";
import { useReservationNavigation } from "../utils/navigation";

import { Footer } from "../components/common/Footer";

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
        <span className="block">soul. We’re not just serving food — we’re setting the tone.</span>
      </>
    ),
    buttons: [
      {
        text: "Explore More",
        color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
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
        <span className="block">We’re not just hosting a workshop — we’re crafting memories.</span>
      </>
    ),
    buttons: [
      {
        text: "JOIN NOW",
        color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
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
        color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
      },
    ],
  },
];

export const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const navigate = useNavigate();
  const handleReservationClick = useReservationNavigation(navigate);

  const handleBannerChange = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const current = banners[bannerIndex];

  return (
    <div className="w-full overflow-x-hidden relative">
      <TopLine />
      <Navbar />

      {/* Hero Banner */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[80vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${current.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
        onClick={handleBannerChange}
        onTouchStart={handleBannerChange}
      >
        <div className="flex flex-col text-center lg:text-left max-w-4xl">
          <div className="mb-3">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              {current.title}
            </h1>
          </div>
          <div className="mb-5">
            <p className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium">
              {current.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-[var(--color-topline)] items-center justify-center lg:justify-start gap-3 text-sm sm:text-base lg:text-lg font-medium">
            {current.buttons.map((btn, idx) => (
              <button
                key={idx}
                className={`${btn.color} flex items-center gap-3 px-6 lg:px-8 py-4 rounded-lg cursor-pointer w-full sm:w-auto justify-center min-h-[48px] min-w-[160px]`}
              >
                {btn.text} <FaChevronRight />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        className="text-white flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-50 py-12 lg:py-0 min-h-[70vh] lg:min-h-[100vh] bg-[#261410]"
        style={{
          backgroundImage: `linear-gradient(to right, #261410E5, #261410E5), url(${aboutbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
          <h2 className="font-medium text-lg">ABOUT US</h2>
          <p className="text-[var(--green-primary)] font-semibold italic text-2xl sm:text-3xl lg:text-4xl mb-3">
            Where tradition meets taste in the heart of Galle Fort.
          </p>
          <p className="max-w-[500px] text-base sm:text-lg lg:text-xl mx-auto lg:mx-0">
            <span className="font-bold">Chill 99</span> is a cozy eatery nestled in the heart of{" "}
            <span className="font-bold">Galle Fort, Sri Lanka.</span>
            <br className="hidden lg:block" />
            Celebrated for its flavorful meals, hearty comfort food, freshly made snacks, and
            homemade treats, it's a favorite stop for both locals and travelers. Whether you're
            craving a warm brunch, a savory bite, or a sweet indulgence, Chill 99 serves up
            satisfying dishes in a relaxed, stylish setting — the perfect escape from the everyday
            bustle.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={about} alt="About Chill 99" className="w-full max-w-md lg:max-w-lg" />
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
            className="flex items-center gap-3 px-6 lg:px-8 py-4 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center"
          >
            BOOK A SPOT <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="bg-[var(--color-navbar)] min-h-[400px] lg:h-[571px] w-full flex items-center justify-center">
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
        <div className="flex flex-col items-center text-center">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Dishes</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Chill 99 – Customer Favorites
          </h2>
        </div>
        <div className="w-full max-w-6xl">
          <PopularMenu />
        </div>
      </section>

      {/* Table Booking Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-50 py-8 lg:py-0 min-h-[40vh] lg:h-[271px] bg-[#1F0D09]"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09BA, #1F0D09BA), url(${thirdbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center lg:text-left">
          <p className="font-medium text-lg lg:text-xl mb-2">Need a Table On Chill 99</p>
          <h2 className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Booking Table For Your & Family Members
          </h2>
        </div>
        <div className="flex items-center text-sm sm:text-base lg:text-lg font-medium">
          <button
            onClick={handleReservationClick}
            className="flex items-center gap-3 px-6 lg:px-8 py-4 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center"
          >
            BOOK A TABLE <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#261410] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-center text-white gap-8">
        <div className="w-full lg:w-[40%] flex justify-center">
          <img src={whychhose} alt="Why choose us" className="w-full max-w-md lg:w-[80%]" />
        </div>
        <div className="flex flex-col items-start w-full lg:w-[60%] gap-6">
          <div className="text-center lg:text-left">
            <p className="text-lg lg:text-xl font-medium text-[#FAF3E0] mb-2">Why Choose Us</p>
            <h2 className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Your perfect café escape in Galle Fort.
            </h2>
          </div>

          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start gap-3 text-center sm:text-left"
            >
              <img
                src={iconchoose01}
                alt=""
                className="w-8 h-8 mx-auto sm:mx-0 mt-2 flex-shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="text-[#FAF3E0] font-bold text-lg lg:text-xl xl:text-2xl mb-2">
                  Signature Dishes, Freshly Prepared Daily
                </h3>
                <p className="text-base lg:text-lg font-normal">
                  Enjoy a range of handcrafted dishes, made with bold flavors, fresh ingredients,
                  and a whole lot of care.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories */}
      <section className="w-full min-h-[400px] lg:h-[441px] bg-[#31201B] px-4 lg:px-50 flex items-center justify-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
          {[
            { title: "Cafe Menu", icon: iconchoose02 },
            { title: "Coffee Menu", icon: iconchoose05 },
            { title: "Beverages", icon: iconchoose06 },
          ].map((item, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="relative w-full min-h-[80vh] lg:min-h-[100vh] flex flex-col bg-[#31201B] text-white px-4 lg:px-50 py-12 lg:py-20 gap-8 lg:gap-16"
        style={{
          backgroundImage: `linear-gradient(to right, #2D1B17C9, #2D1B17C9), url(${testimonial})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <img
            src={logo}
            alt="Chill 99 Logo"
            className="hidden lg:block absolute top-10 left-30 w-32 lg:w-50 h-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#FAF3E0] font-medium text-lg lg:text-xl mb-2">Customer Feedback</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--green-primary)] italic">
              What Our Clients Say
            </h2>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <Testimonial />
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#230700FC] min-h-[250px] lg:h-[300px] w-full flex flex-col lg:flex-row items-center justify-around lg:justify-between px-4 lg:px-50 py-8 lg:py-10 text-white gap-8 lg:gap-0">
        {[
          { number: "120+", title: "Happy Customers", subtitle: "Sweet smiles, daily." },
          { number: "350+", title: "Dishes Served", subtitle: "Flavors with Feeling." },
          { number: "50+", title: "Positive Reviews", subtitle: "A local and tourist favorite." },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <h3 className="text-[#F4C430] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">
              {stat.number}
            </h3>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{stat.title}</h4>
            <p className="text-base lg:text-xl font-medium">{stat.subtitle}</p>
          </div>
        ))}
      </section>

      {/* Blog/Updates Section */}
      <section className="bg-[#2D1B17] w-full min-h-[80vh] lg:min-h-[100vh] flex flex-col px-4 lg:px-50 py-8 lg:py-10 gap-8 lg:gap-10 text-[#F5F5F5]">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[#FAF3E0] font-medium text-lg lg:text-xl mb-2">
            Get Every Single Update
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--green-primary)] italic">
            Fresh updates, straight from Chill 99
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Weekly Taste Drops", image: waffles },
            { title: "New Burger Just Dropped", image: burgerfries },
            { title: "Flavor of the Month V Meat Classic", image: meat },
          ].map((update, index) => (
            <div
              key={index}
              className="relative w-full h-64 lg:h-[400px] overflow-hidden rounded-lg cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${update.image})`,
                }}
              />
              <div className="absolute inset-4 lg:inset-8 flex flex-col items-center justify-end text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--green-primary)] tracking-wide mb-3">
                  {update.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-5 text-xs lg:text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4" />
                    <p className="font-semibold">July 9, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessagesSquare className="w-4" />
                    <p className="font-semibold">Comments (22)</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <button className="flex items-center gap-3 rounded-md cursor-pointer text-[var(--green-primary)] border border-[var(--green-primary)] py-3 px-6 lg:px-8 hover:bg-[var(--green-primary)] hover:text-[var(--color-topline)] transition-all duration-300 min-h-[48px] min-w-[160px] justify-center">
            Explore More <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Workshop Banner */}
      <section
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
