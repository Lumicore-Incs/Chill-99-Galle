import { useState } from "react";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";
import banner1 from "../assets/header-banner.png";
import banner2 from "../assets/header-banner-02.png";
import banner3 from "../assets/header-banner-03.png";
import aboutbg from "../assets/about-bg.png";
import secondbanner from "../assets/second-banner.png"
import about from "../assets/about.png"
import { FaChevronRight } from "react-icons/fa6";
import ImageCarousel from "../components/features/CarouselItem";

const banners = [
  {
    image: banner1,
    title: <>Chill 99 - Your<span className="block">Everyday Escape</span></>,
    subtitle: <>Delicious bites, cozy feels, and a space that feeds your
      <span className="block">soul. We’re not just serving food — we’re setting the tone.</span></>,
    buttons: [
      { text: "Explore More", color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500" },
      { text: "Get Delivery", color: "bg-[#5B443F] text-white" }
    ]
  },
  {
    image: banner2,
    title: <>Workshop Seats For You &<span className="block">Your Loved Ones</span></>,
    subtitle: <>Inspiring moments, shared creativity, and a space to grow together.
      <span className="block">We’re not just hosting a workshop — we’re crafting memories.</span></>,
    buttons: [
      { text: "JOIN NOW", color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500" },
    ]
  },
  {
    image: banner3,
    title: <>Breakfast Reservation – Share<span className="block">the Morning Together</span></>,
    subtitle: <>Warm sips, hearty bites, and mornings made meaningful. We’re
      <span className="block">not just serving breakfast — we’re starting your day with care.</span></>,
    buttons: [
      { text: "BOOK A SPOT", color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500" },
    ]
  }
];

export const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const handleBannerChange = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const current = banners[bannerIndex];

  return (
    <div className="w-full overflow-x-hidden h-screen">
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
          cursor: "pointer"
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
            <p className="text-xl italic text-[var(--green-primary)] font-medium">{current.subtitle}</p>
          </div>
          <div className="flex text-[var(--color-topline)] items-center gap-3 text-lg font-medium">
            {current.buttons.map((btn, idx) => (
              <button key={idx} className={`${btn.color} flex items-center gap-3 px-5 py-2 rounded-lg`}>
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
          <img src={about} alt=""/>
        </div>
      </section>

      {/* second banner */}
      <section className="text-white flex items-center justify-between px-50" style={{
          backgroundImage: `linear-gradient(to right, #1F0D09BA, #1F0D09BA), url(${secondbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "271px",
        }}>
          <div>
            <p className="font-medium text-xl">Start your day with a cozy breakfast at Chill 99.</p>
            <h1 className="text-[var(--green-primary)] italic font-semibold text-[40px]">Breakfast Reservation – Share<span className="block">the Morning Together</span></h1>
          </div>
          <div className="flex text-[var(--color-topline)] items-center text-lg font-medium">
            <button className="flex items-center gap-3 px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500">
                BOOK A SPOT <FaChevronRight />
              </button>
          </div>
        </section>
        {/* image carousel */}
        <section className="bg-[var(--color-navbar)] h-[571px] w-full flex items-center justify-center">
          <ImageCarousel/>
        </section>
    </div>
  );
};
