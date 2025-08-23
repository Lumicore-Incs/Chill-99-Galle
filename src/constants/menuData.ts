import avacadoPoch from "../assets/avacado-toast-wt-poch-egg.jpg";
import avacadoScrumbled from "../assets/avacado-toast-wt-scrumbled-egg.jpg";
import beefShawarma from "../assets/beef-shawarma.jpg";
import cesarSalad from "../assets/cesar salad.jpg";
import cheeseCornDog from "../assets/cheese-corn-dog.jpg";
// import chickenBiriyani1 from "../assets/chicken-biriyani-1.jpg";
// import chickenBiriyani2 from "../assets/chicken-biriyani-2.jpg";
import koreanChickenRamen from "../assets/chicken-ramen.jpg";
import chickenRice from "../assets/chicken-rice.jpg";
import chickenShawarma from "../assets/chicken-shawarma.jpg";
import chocolateHoneyCornDog from "../assets/choco-with-honey.jpg";
import chocolateCornDog from "../assets/chocolate-corn-dog.jpg";
import coffee3 from "../assets/coffee3.jpg";
import coffee4 from "../assets/coffee4.jpg";
import coffee5 from "../assets/coffee5.jpg";
import eggRice from "../assets/egg-rice.jpg";
import greenSalad from "../assets/green-salad.jpg";
// import koththu1 from "../assets/koththu-1.jpg";
// import koththu2 from "../assets/koththu-2.jpg";
import mixRice from "../assets/mix-rice.jpg";
import mongolianRice from "../assets/mongolian-rice.jpg";
import muttonBiriyani from "../assets/mutton-biriyani.jpg";
import muttonShawarma from "../assets/mutton-shawarma.jpg";
import nasiGoranRice from "../assets/nasi-gurang.jpg";
import image1 from "../assets/seafood-broth.jpg";
import koreanSeafoodRamen from "../assets/seafood-ramen.jpg";
import seafoodRice from "../assets/seafood-rice.jpg";
import seafoodShawarma from "../assets/seafood-shawarma.jpg";
import mixSalad from "../assets/sl-special-mix-salad.jpg";
import image3 from "../assets/sl-special-mix-vege-soup.jpg";
import image2 from "../assets/soup.jpg";
import spicyCornDog from "../assets/spicy-conr-dog.jpg";
// import surfTurfPlatter from "../assets/surf-turf-platter.jpg";
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
    image: greenSalad,
    title: "Green Salad",
    price: 750.0,
    category: "salad",
  },
  {
    id: 6,
    image: cesarSalad,
    title: "Caesar Salad",
    price: 1100.0,
    category: "salad",
  },
  {
    id: 7,
    image: mixSalad,
    title: "Sri Lankan Special Mix Salad",
    price: 1400.0,
    category: "salad",
  },
  {
    id: 8,
    image: avacadoPoch,
    title: "Avocado Toast with Poached Egg",
    price: 1800.0,
    category: "salad",
  },
  {
    id: 9,
    image: avacadoScrumbled,
    title: "Avocado Toast with Scrambled Egg",
    price: 2000.0,
    category: "salad",
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

  // Rice Menu Items
  {
    id: 10,
    image: chickenRice,
    title: "Chicken Rice",
    price: 1500.0,
    category: "rice",
  },
  {
    id: 11,
    image: eggRice,
    title: "Egg Rice",
    price: 1200.0,
    category: "rice",
  },
  {
    id: 12,
    image: mixRice,
    title: "Mix Rice",
    price: 2200.0,
    category: "rice",
  },
  {
    id: 13,
    image: mongolianRice,
    title: "Mongolian Rice",
    price: 2500.0,
    category: "rice",
  },
  {
    id: 14,
    image: seafoodRice,
    title: "Sea Food Rice",
    price: 2000.0,
    category: "rice",
  },
  {
    id: 15,
    image: nasiGoranRice,
    title: "Nasi Goran rice",
    price: 2200.0,
    category: "rice",
  },
  {
    id: 16,
    image: chickenShawarma,
    title: "Chicken Shawarma",
    price: 2500.0,
    category: "shawarma",
  },
  {
    id: 17,
    image: beefShawarma,
    title: "Beef Shawarma",
    price: 2200.0,
    category: "shawarma",
  },
  {
    id: 18,
    image: muttonShawarma,
    title: "Mutton Shawarma",
    price: 2700.0,
    category: "shawarma",
  },
  {
    id: 19,
    image: koreanChickenRamen,
    title: "Korean Chicken Ramen Noodles",
    price: 1500.0,
    category: "shawarma",
  },
  {
    id: 20,
    image: seafoodShawarma,
    title: "Sea Food Shawarma",
    price: 3000.0,
    category: "shawarma",
  },
  {
    id: 21,
    image: koreanSeafoodRamen,
    title: "Korean Sea Food Ramen Noodles",
    price: 1900.0,
    category: "shawarma",
  },
  {
    id: 22,
    image: chocolateCornDog,
    title: "Chocolate Corn Dog",
    price: 750.0,
    category: "corn_dog",
  },
  {
    id: 23,
    image: spicyCornDog,
    title: "Spicy Corn Dog",
    price: 850.0,
    category: "corn_dog",
  },
  {
    id: 24,
    image: chocolateHoneyCornDog,
    title: "Chocolate with Honey Corn Dog",
    price: 900.0,
    category: "corn_dog",
  },
  {
    id: 25,
    image: cheeseCornDog,
    title: "Cheese Cron Dog",
    price: 950.0,
    category: "corn_dog",
  },
  {
    id: 26,
    image: muttonBiriyani,
    title: "Mutton Biriyani",
    price: 2700.0,
    category: "burger",
  },
  // {
  //   id: 24,
  //   image: chickenBiriyani1,
  //   title: "Chicken Biriyani",
  //   price: 2500.0,
  //   category: "burger",
  // },
  // {
  //   id: 25,
  //   image: chickenBiriyani2,
  //   title: "Chicken Biriyani",
  //   price: 2500.0,
  //   category: "burger",
  // },
  // {
  //   id: 26,
  //   image: surfTurfPlatter,
  //   title: "Chill 99 Special Surf and Turf Platter",
  //   price: 8000.0,
  //   category: "burger",
  // },
  // {
  //   id: 27,
  //   image: koththu1,
  //   title: "Sir Lankan Traditional Koththu",
  //   price: 1400.0,
  //   category: "koththu",
  // },
  // {
  //   id: 28,
  //   image: koththu2,
  //   title: "Sir Lankan Traditional Koththu",
  //   price: 1400.0,
  //   category: "koththu",
  // },
];
