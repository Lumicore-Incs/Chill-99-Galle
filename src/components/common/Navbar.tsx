import logo from "../../assets/chill-99.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[var(--color-navbar)] px-20 py-3">
      <div>
        <img src={logo} alt="chill-99-logo" className="w-20 h-20" />
      </div>
      <div>
        <nav className="text-white flex space-x-5 font-semibold text-xl">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/feedback">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div>
        <button className="bg-[var(--green-primary)] text-white text-md py-2 px-5 rounded-xl font-semibold">
          BOOK A TABLE
        </button>
      </div>
    </div>
  );
};
