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
    <div className="w-full h-full bg-[#331711] flex flex-col items-center justify-between py-10 gap-10 px-10 rounded-lg">
      <div className="grid grid-cols-2 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="flex items-center gap-5">
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 object-cover"
            />
            <div>
              <h3
                className="text-[30px] font-medium mb-2 text-white"
                style={{ fontFamily: "Mulish, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#B39A91] font-medium text-xl"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Rs. {item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-3 rounded-lg cursor-pointer text-[var(--green-primary)]">
        Explore More <FaChevronRight />
      </button>
    </div>
  );
};
