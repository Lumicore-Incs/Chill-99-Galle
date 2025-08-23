import { allMenuItems } from '../constants/menuData';

// Import all the static images used across the app
import aboutBg from '../assets/about-bg.png';
import aboutImg from '../assets/about.png';
import about01 from '../assets/about01.jpg';
import banner03 from '../assets/banner03.jpg';
import booking01 from '../assets/booking-01.jpg';
import booking02 from '../assets/booking-02.jpg';
import booking03 from '../assets/booking-03.jpg';
import beverage from '../assets/beverage.jpg';
import chillLogo from '../assets/chill-99-logo.png';
import headerBanner from '../assets/header-banner.jpg';
import headerBanner02 from '../assets/header-banner-02.jpg';
import headerBanner03 from '../assets/header-banner-03.jpg';
import imagecaro01 from '../assets/imagecaro-01.jpg';
import imagecaro02 from '../assets/imagecaro-02.jpg';
import imagecaro03 from '../assets/imagecaro-03.jpg';
import imagecaro04 from '../assets/imagecaro-04.png';
import imagecaro05 from '../assets/imagecaro-05.png';
import imagecaro06 from '../assets/imagecaro-06.jpg';
import imageside from '../assets/imageside.jpg';
import menubanner from '../assets/menubanner.png';
import popularBg from '../assets/popular-bg.png';
import saladMain from '../assets/salad-main.jpg';
import secondbanner from '../assets/second-banner.jpg';
import soup from '../assets/soup.jpg';
import coffee4 from '../assets/coffee4.jpg';

// Route-specific image collections
export const routeImages = {
  home: [
    chillLogo,
    headerBanner,
    headerBanner02,
    headerBanner03,
    aboutBg,
    aboutImg,
    about01,
    imagecaro01,
    imagecaro02,
    imagecaro03,
    imagecaro04,
    imagecaro05,
    imagecaro06,
    booking01,
    booking02,
    booking03,
  ],
  menu: [
    menubanner,
    secondbanner,
    popularBg,
    soup,
    saladMain,
    imageside,
    imagecaro01,
    imagecaro06,
    coffee4,
    beverage,
    ...allMenuItems.map(item => item.image),
  ],
  gallery: [
    banner03,
    // Add gallery specific images here when available
  ],
  feedback: [
    // Add feedback specific images here when available
  ],
};

// All critical images that should be preloaded
export const criticalImages = [
  chillLogo,
  headerBanner,
  menubanner,
  // Add other critical images that appear above the fold
];

// Get images for a specific route
export const getRouteImages = (route: string): string[] => {
  switch (route) {
    case '/':
    case '/home':
      return routeImages.home;
    case '/menu':
      return routeImages.menu;
    case '/gallery':
      return routeImages.gallery;
    case '/feedback':
    case '/feed-back':
      return routeImages.feedback;
    default:
      return criticalImages;
  }
};
