import image1 from "../../assets/imagecaro-01.jpg";
import image2 from "../../assets/soup.jpg";
import image3 from "../../assets/biriyani.jpg";
import image4 from "../../assets/spagetty.jpg";
import { FaChevronRight } from "react-icons/fa6";

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
];
export const PopularMenu = () => {
  return (
    <div className="w-full bg-[#331711] flex flex-col items-center justify-between py-6 lg:py-10 gap-6 lg:gap-10 px-4 lg:px-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover rounded-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-[#B39A91] font-medium text-base lg:text-xl">
                Rs. {item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-3 rounded-lg cursor-pointer text-[var(--green-primary)] hover:text-[var(--green-dark)] transition-colors">
        Explore More <FaChevronRight />
      </button>
    </div>
  );
};
