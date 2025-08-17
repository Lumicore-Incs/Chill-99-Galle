import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";
import banner from "../assets/menubanner.png";
import image1 from "../assets/imagecaro-01.jpg";
import image2 from "../assets/soup.jpg";
import image3 from "../assets/biriyani.jpg";
import image4 from "../assets/spagetty.jpg";
import formimg1 from "../assets/imageside.jpg";
import formimg2 from "../assets/imagecaro-01.jpg";
import secondbanner from "../assets/second-banner.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { Footer } from "../components/common/Footer";
import popularBg from "../assets/popular-bg.png";
import waffles1 from "../assets/imagecaro-06.jpg";

interface MenuItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    image: image1,
    title: "Chill 99 Special Burger ",
    price: 4500.0,
  },
  {
    id: 2,
    image: image2,
    title: "Cream Soup Of Pumkin",
    price: 1200.0,
  },
  {
    id: 3,
    image: image3,
    title: "Chicken Biriyani ",
    price: 2500.0,
  },
  {
    id: 4,
    image: image4,
    title: "Spegati Carbonara",
    price: 3000.0,
  },
  {
    id: 5,
    image: image1,
    title: "Chill 99 Special Burger ",
    price: 4500.0,
  },
  {
    id: 6,
    image: image2,
    title: "Cream Soup Of Pumkin",
    price: 1200.0,
  },
];

export const Menu = () => {
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
        <div className="flex flex-col text-center lg:text-left max-w-4xl">
          <div className="mb-3">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              Savor Every Bite at Chill 99
            </h1>
          </div>
          <div className="mb-5">
            <p className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium">
              Browse our selection of freshly crafted dishes made to delight
              your taste buds.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1F0D09] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Choose Best Dishes
          </p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Soup & Salad Selection
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-5">
            <div className="w-full bg-[#31201BF0] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <div className="lg:gap-5 w-full flex flex-col">
                {menuItems.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                        Rs. {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img
                src={image2}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-5">
            <div className="w-full flex justify-center">
              <img
                src={image2}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg"
              />
            </div>
            <div className="w-full bg-[#31201BF0] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <div className="lg:gap-5 w-full flex flex-col">
                {menuItems.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                        Rs. {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
          <button className="flex items-center gap-3 px-4 lg:px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer">
            BOOK A SPOT <FaChevronRight />
          </button>
        </div>
      </section>

      <section className="bg-[#31201B] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Choose Best Dishes
          </p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Chill 99 Restaurant Menu
          </h2>
        </div>
        {/* menu select bar */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-4 py-2 rounded-lg bg-[#1F0D09] hover:bg-[#81685F] transition-all duration-500">
            Main Course
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1F0D09] hover:bg-[#81685F] transition-all duration-500">
            Pasta
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1F0D09] hover:bg-[#81685F] transition-all duration-500">
            Rice
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1F0D09] hover:bg-[#81685F] transition-all duration-500">
            Shawarma
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1F0D09] hover:bg-[#81685F] transition-all duration-500">
            Burger
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1F0D09] hover:bg-[#81685F] transition-all duration-500">
            Corn Dog
          </button>
        </div>

        <div className="w-full bg-[#1F0D09] flex flex-col items-center justify-between py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
            {menuItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                    Rs. {item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F0D09] w-full min-h-screen flex items-center justify-center relative">
        {/* Left image */}
        <img
          src={formimg1}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-right"
        />

        {/* Center form */}
        <div className="w-full lg:w-2/4 px-6 lg:px-16 py-12 flex flex-col items-center text-center text-white bg-[#1F0D09]">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Booking Table
          </p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[#FFD580] font-semibold mb-8">
            Make Your Reservation
          </h2>

          {/* Form fields */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <select className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
            <input
              type="date"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="time"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
          </form>

          <div className="flex items-center text-sm sm:text-base lg:text-lg font-medium mt-6">
            <button className="flex items-center gap-3 px-4 lg:px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer">
              BOOKING TABLE <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right image */}
        <img
          src={formimg2}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-left"
        />
      </section>

      <section className="bg-[#1F0D09] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8" style={{
          backgroundImage: `linear-gradient(to right, #1F0D09C9, #1F0D09C9), url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">
            Choose Best Dishes
          </p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
             Waffle & Desert Menu
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center justify-center flex-col lg:flex-row gap-5">
            <div className="w-full bg-[#00000051] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                        Rs. {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:w-[50%] w-full h-100">
              <img
                src={waffles1}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col lg:flex-row-reverse gap-5">
            <div className="w-full bg-[#00000051] py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#B39A91] font-medium text-base lg:text-lg">
                        Rs. {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:w-[50%] w-full h-100">
              <img
                src={waffles1}
                alt="Why choose us"
                className="w-full max-w-md lg:w-[90%] rounded-lg h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
