import coffee3 from "../assets/coffee3.jpg";
import coffee4 from "../assets/coffee4.jpg";
import coffee5 from "../assets/coffee5.jpg";
import coffee6 from "../assets/coffee6.jpg";
import image1 from "../assets/seafood-broth.jpg";
import image3 from "../assets/sl-special-mix-vege-soup.jpg";
import image2 from "../assets/soup.jpg";
import image4 from "../assets/tom-yum-soup.jpg";

export interface MenuItem {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

export const allMenuItems: MenuItem[] = [
  {
    id: 1,
    image: image1,
    title: "Seafood Broth",
    price: 950.0,
    category: "soup",
  },
  {
    id: 2,
    image: image2,
    title: "Cream Soup Of Pumkin",
    price: 1200.0,
    category: "soup",
  },
  {
    id: 3,
    image: image3,
    title: "Sri Lankan Special Mix Vegetable Soup",
    price: 850.0,
    category: "soup",
  },
  {
    id: 4,
    image: image4,
    title: "Tom Yum Soup",
    price: 1300.0,
    category: "soup",
  },
  {
    id: 5,
    image: image1,
    title: "Chill 99 Special Burger ",
    price: 4500.0,
    category: "burger",
  },
  {
    id: 6,
    image: image2,
    title: "Cream Soup Of Pumkin",
    price: 1200.0,
    category: "main course",
  },
  {
    id: 7,
    image: coffee3,
    title: "Cappuccino",
    price: 650.0,
    category: "beverage",
  },
  {
    id: 8,
    image: coffee4,
    title: "Iced Coffee",
    price: 700.0,
    category: "beverage",
  },
  {
    id: 9,
    image: coffee5,
    title: "Latte",
    price: 750.0,
    category: "beverage",
  },
  {
    id: 10,
    image: coffee6,
    title: "Mocha",
    price: 800.0,
    category: "beverage",
  },
];
