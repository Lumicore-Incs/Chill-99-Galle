import React from "react";
import banner2 from "../assets/header-banner-02.jpg";
import banner3 from "../assets/header-banner-03.jpg";
import banner1 from "../assets/header-banner.jpg";
import newProductImage from "../assets/imagecaro-06.jpg";
import uberLogo from "../assets/uber-logo.svg";

export interface BannerButton {
  text: string;
  color: string;
  href?: string;
  icon?: React.ReactElement | null;
}

export interface Banner {
  image: string;
  title: React.ReactElement;
  subtitle: React.ReactElement;
  buttons: BannerButton[];
}

const banners: Banner[] = [
  {
    image: banner1,
    title: (
      <>
        Chill 99 - Your
        <br />
        Everyday Escape
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
        text: "Order now",
        color: "bg-[#05A357] hover:bg-[#059e4e] transition-all duration-500",
        href: "https://www.ubereats.com/lk/store/chill-99-galle-fort-galle/Uy9eNDD1VGq5rv6BTOMk-A?srsltid=AfmBOopcnc5JJKxHWa-Tp-sFn0LwZCVJE98R15M5PM6LFSsVwTcSYtmJ",
        icon: (
          <img src={uberLogo} alt="Uber Eats" style={{ height: "30px", borderRadius: "6px" }} />
        ),
      },
      {
        text: "Book a Table",
        color: "bg-[#FFD580] text-[#31201B] hover:bg-[#e6c16b] transition-all duration-500",
        href: "/menu#reservation-section",
        icon: null,
      },
    ],
  },
  {
    image: newProductImage,
    title: (
      <>
        <span className="text-[var(--green-primary)]">New</span> — Mango Tango Pancake
      </>
    ),
    subtitle: (
      <>
        A limited-time breakfast special: fluffy pancakes topped with fresh mango, coconut cream,
        <span className="block">
          and a drizzle of caramel — sweet mornings, made unforgettable.
        </span>
      </>
    ),
    buttons: [
      {
        text: "View on Menu",
        color: "bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500",
        href: "/menu#new-products",
      },
    ],
  },
  {
    image: banner2,
    title: <>Workshop Seats For You & Your Loved Ones</>,
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
    title: <>Breakfast Reservation – Share the Morning Together</>,
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

export default banners;
