import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";
import banner from "../assets/header-banner.png";
import aboutbg from "../assets/about-bg.png";
import about from "../assets/about.png"
import { FaChevronRight } from "react-icons/fa6";

export const Home = () => {
  return (
    <div className="w-full overflow-x-hidden h-screen">
      <TopLine />
      <Navbar />
      {/* banner */}
      <section
        className=" text-white flex items-center justify-between px-50"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="flex flex-col">
          <div className="mb-3">
            <p className="text-[50px] font-bold">
              Chill 99 - Your<span className="block">Everyday Escape</span>
            </p>
          </div>
          <div className="mb-5">
            <p className="text-xl italic text-[var(--green-primary)] font-medium">
              Delicious bites, cozy feels, and a space that feeds your
              <span className="block">
                soul. We’re not just serving food — we’re setting the tone.
              </span>
            </p>
          </div>
          <div className="flex text-white items-center gap-3 text-lg font-medium">
            <button className="bg-[var(--green-primary)] flex items-center gap-3 px-5 py-2 rounded-lg">
              Explore More <FaChevronRight />
            </button>
            <button className="bg-[#5B443F] flex items-center gap-3 px-5 py-2 rounded-lg">
              Get Delivery <FaChevronRight />
            </button>
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
    </div>
  );
};
