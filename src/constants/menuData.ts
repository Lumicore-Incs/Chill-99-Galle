import affogatoFrappeImg from "../assets/affogato-frappe.jpg";
import americanoImg from "../assets/americano.jpg";
import avacadoPoch from "../assets/avacado-toast-wt-poch-egg.jpg";
import avacadoScrumbled from "../assets/avacado-toast-wt-scrumbled-egg.jpg";
import beefShawarma from "../assets/beef-shawarma.jpg";
import blueberryCheesecakeImg from "../assets/blueberry-cheese-cake.jpg";
import cafeMochaImg from "../assets/cafe-mocha.jpg";
import cappuccinoImg from "../assets/cappuccino.jpg";
import caramelMachaImg from "../assets/caramel-macha.jpg";
import cesarSalad from "../assets/cesar salad.jpg";
import cheeseCornDog from "../assets/cheese-corn-dog.jpg";
import chickenBiriyani from "../assets/chicken-biriyani.jpg";
import koreanChickenRamen from "../assets/chicken-ramen.jpg";
import chickenRice from "../assets/chicken-rice.jpg";
import chickenShawarma from "../assets/chicken-shawarma.jpg";
import chocolateHoneyCornDog from "../assets/choco-with-honey.jpg";
import chocolateCornDog from "../assets/chocolate-corn-dog.jpg";
import clubSandwitch from "../assets/club-sandwitch.jpg";
import creamBoleImg from "../assets/cream-bole.jpg";
import doubleChocChipCakeImg from "../assets/double-choko-chip-cake.jpg";
import dubaiExpressoImg from "../assets/dubai-expresso.jpg";
import eggRice from "../assets/egg-rice.jpg";
import expressoImg from "../assets/expresso.jpg";
import friedBananaIceCreamImg from "../assets/fried-banana-ice-cream.jpg";
import greenSalad from "../assets/green-salad.jpg";
import iceLatteImg from "../assets/ice-latte.jpg";
import iceCappuccinoImg from "../assets/iced-cappuchino.jpg";
import latteImg from "../assets/latte.jpg";
import mixRice from "../assets/mix-rice.jpg";
import mongolianRice from "../assets/mongolian-rice.jpg";
import muttonBiriyani from "../assets/mutton-biriyani.jpg";
import muttonShawarma from "../assets/mutton-shawarma.jpg";
import nasiGoranRice from "../assets/nasi-gurang.jpg";
import nutellaStrawberryImg from "../assets/nutell-straberry.jpg";
import nutellaStrawBananaImg from "../assets/nutella-banana-strawberry.jpg";
import nutellaBananaImg from "../assets/nutella-banana.jpg";
import nutellaKitkatFerreroImg from "../assets/nutella-kitkat-ferraro-rocher.jpg";
import nutellaKitkatHoneyOreoImg from "../assets/nutella-kitkat-honey-oreo.jpg";
import nutellaKitkatImg from "../assets/nutella-kitkat.jpg";
import mixFruitImg from "../assets/nutella-mix-fruit.jpg";
import nutellaImg from "../assets/nutella.jpg";
import passionCheesecakeImg from "../assets/passion-cheese-cake.jpg";
import redVelvetCakeImg from "../assets/red-velevt-cake.jpg";
import image1 from "../assets/seafood-broth.jpg";
import koreanSeafoodRamen from "../assets/seafood-ramen.jpg";
import seafoodRice from "../assets/seafood-rice.jpg";
import seafoodShawarma from "../assets/seafood-shawarma.jpg";
import mixSalad from "../assets/sl-special-mix-salad.jpg";
import image3 from "../assets/sl-special-mix-vege-soup.jpg";
import traditionalKottu from "../assets/sl-traditional-kottu.jpg";
import image2 from "../assets/soup.jpg";
import specialMixIceCreamImg from "../assets/spcial-mix-ice-cream.jpg";
import spicyChickenChipsImg from "../assets/spicy-chicken-waffles.jpg";
import spicyCornDog from "../assets/spicy-conr-dog.jpg";
import surfTurfPlatter from "../assets/surf-and-turf.jpg";
import image4 from "../assets/tom-yum-soup.jpg";
import fruitPlateImg from "../assets/traditional-fruit-plate.jpg";

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
  // {
  //   id: 6,
  //   image: image2,
  //   title: "Cream Soup Of Pumkin",
  //   price: 1200.0,
  //   category: "main_course",
  // },

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
    category: "main_course",
  },
  {
    id: 27,
    image: chickenBiriyani,
    title: "Chicken Biriyani",
    price: 2500.0,
    category: "main_course",
  },
  {
    id: 28,
    image: clubSandwitch,
    title: "Chill 99 Special Club Sandwich",
    price: 1500.0,
    category: "main_course",
  },
  {
    id: 29,
    image: surfTurfPlatter,
    title: "Chill 99 Special Surf and Turf Platter",
    price: 8000.0,
    category: "main_course",
  },
  {
    id: 30,
    image: traditionalKottu,
    title: "Sri Lankan Traditional Koththu",
    price: 1400.0,
    category: "main_course",
  },
  {
    id: 31,
    image: nutellaImg,
    title: "Nutella",
    price: 2500.0,
    category: "waffle",
  },
  {
    id: 32,
    image: nutellaStrawberryImg,
    title: "Nutella + Strawberry",
    price: 1200.0,
    category: "waffle",
  },
  {
    id: 33,
    image: nutellaBananaImg,
    title: "Nutella + Banana",
    price: 1300.0,
    category: "waffle",
  },
  {
    id: 34,
    image: nutellaStrawBananaImg,
    title: "Nutella + Strawberry + Banana",
    price: 1600.0,
    category: "waffle",
  },
  {
    id: 35,
    image: nutellaKitkatImg,
    title: "Nutella + Kit kat",
    price: 1400.0,
    category: "waffle",
  },
  {
    id: 36,
    image: nutellaKitkatHoneyOreoImg,
    title: "Nutella + Kit Kat + Honey + Oreo",
    price: 1500.0,
    category: "waffle",
  },
  {
    id: 37,
    image: nutellaKitkatFerreroImg,
    title: "Nutella + Kit Kat + Ferraro Rocher",
    price: 2000.0,
    category: "waffle",
  },
  {
    id: 38,
    image: mixFruitImg,
    title: "Nutella With Mix Fruit",
    price: 1900.0,
    category: "waffle",
  },
  {
    id: 39,
    image: spicyChickenChipsImg,
    title: "Spicy Chicken Waffles With Chips",
    price: 1200.0,
    category: "waffle",
  },
  {
    id: 40,
    image: creamBoleImg,
    title: "Cream Bole",
    price: 1500.0,
    category: "dessert",
  },
  {
    id: 41,
    image: redVelvetCakeImg,
    title: "Red Velvet Cake",
    price: 1200.0,
    category: "dessert",
  },
  {
    id: 42,
    image: doubleChocChipCakeImg,
    title: "Double Chocolate Chip Cake",
    price: 700.0,
    category: "dessert",
  },
  {
    id: 43,
    image: specialMixIceCreamImg,
    title: "Chill 99 Special Mix Ice Cream",
    price: 2500.0,
    category: "dessert",
  },
  {
    id: 44,
    image: friedBananaIceCreamImg,
    title: "Fried Banana with Ice Cream",
    price: 1200.0,
    category: "dessert",
  },
  {
    id: 45,
    image: fruitPlateImg,
    title: "Sri Lankan Traditional Fruit Plate",
    price: 1200.0,
    category: "dessert",
  },
  {
    id: 46,
    image: blueberryCheesecakeImg,
    title: "Blueberry Cheesecake",
    price: 1500.0,
    category: "dessert",
  },
  {
    id: 47,
    image: passionCheesecakeImg,
    title: "Passion Cheesecake",
    price: 1300.0,
    category: "dessert",
  },
  {
    id: 48,
    image: cappuccinoImg,
    title: "Cappuccino",
    price: 1000.0,
    category: "beverage",
  },
  {
    id: 49,
    image: latteImg,
    title: "Latte",
    price: 900.0,
    category: "beverage",
  },
  {
    id: 50,
    image: iceLatteImg,
    title: "Ice Latte",
    price: 950.0,
    category: "beverage",
  },
  {
    id: 51,
    image: americanoImg,
    title: "Americano",
    price: 800.0,
    category: "beverage",
  },
  {
    id: 52,
    image: dubaiExpressoImg,
    title: "Dubai Expresso",
    price: 900.0,
    category: "beverage",
  },
  {
    id: 53,
    image: expressoImg,
    title: "Expresso",
    price: 800.0,
    category: "beverage",
  },
  {
    id: 54,
    image: caramelMachaImg,
    title: "Caramel Macha",
    price: 900.0,
    category: "beverage",
  },
  {
    id: 55,
    image: cafeMochaImg,
    title: "Cafe Mocha",
    price: 1100.0,
    category: "beverage",
  },
  {
    id: 56,
    image: iceCappuccinoImg,
    title: "Ice Cappuccino",
    price: 1000.0,
    category: "beverage",
  },
  {
    id: 57,
    image: affogatoFrappeImg,
    title: "Affogato Frappe",
    price: 1200.0,
    category: "beverage",
  },
];
