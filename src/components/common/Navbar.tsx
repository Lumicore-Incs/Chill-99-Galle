import logo from "../../assets/chill-99.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[var(--color-navbar)] px-20 py-3">
      <div>
        <img src={logo} alt="chill-99-logo" className="w-20 h-20" />
      </div>
      <div>
        <nav className="text-white flex space-x-6 font-semibold text-2xl">
          <Link to="/" className="hover:text-[var(--green-primary)] transition-all duration-500">Home</Link>
          <Link to="/menu" className="hover:text-[var(--green-primary)] duration-500 transition-all">Menu</Link>
          <Link to="/gallery" className="hover:text-[var(--green-primary)] duration-500 transition-all">Gallery</Link>
          <Link to="/feedback" className="hover:text-[var(--green-primary)] duration-500 transition-all">About</Link>
          <Link to="/contact" className="hover:text-[var(--green-primary)] duration-500 transition-all">Contact</Link>
        </nav>
      </div>
      <div>
        <button className="bg-[var(--green-primary)] text-[var(--color-topline)] text-md py-2 px-5 rounded-lg font-semibold cursor-pointer hover:bg-[var(--green-dark)] transition-all duration-500">
          BOOK A TABLE
        </button>
      </div>
    </div>
  );
};
