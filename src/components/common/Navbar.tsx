import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/chill-99.png";
import { useReservationNavigation } from "../../utils/navigation";
// Helper to scroll to footer
const scrollToFooter = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleReservationClick = useReservationNavigation(navigate);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between bg-[var(--color-navbar)] px-4 lg:px-20 py-3">
      <div>
        <img src={logo} alt="chill-99-logo" className="w-12 h-12 lg:w-20 lg:h-20" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <nav className="text-white flex space-x-6 font-semibold text-xl lg:text-2xl">
          <a href="/" className="hover:text-[var(--green-primary)] transition-all duration-500">
            Home
          </a>
          <a href="/menu" className="hover:text-[var(--green-primary)] duration-500 transition-all">
            Menu
          </a>
          <a
            href="/gallery"
            className="hover:text-[var(--green-primary)] duration-500 transition-all"
          >
            Gallery
          </a>
          <a
            href="/feed-back"
            className="hover:text-[var(--green-primary)] duration-500 transition-all"
          >
            Feedback
          </a>
          <button
            type="button"
            onClick={scrollToFooter}
            className="hover:text-[var(--green-primary)] duration-500 transition-all bg-transparent border-none cursor-pointer px-0 text-inherit font-inherit"
            style={{ background: "none" }}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:block">
        <button
          onClick={handleReservationClick}
          className="bg-[var(--green-primary)] text-[var(--color-topline)] text-md py-2 px-5 rounded-lg font-semibold cursor-pointer hover:bg-[var(--green-dark)] transition-all duration-500"
        >
          BOOK A TABLE
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-17 left-0 w-full bg-[var(--color-navbar)] lg:hidden z-50">
          <nav className="flex flex-col p-4 space-y-4 text-white font-semibold">
            <a
              href="/"
              onClick={handleMobileNavClick}
              className="hover:text-[var(--green-primary)] transition-all duration-500 py-3 text-lg min-h-[44px] flex items-center"
            >
              Home
            </a>
            <a
              href="/menu"
              onClick={handleMobileNavClick}
              className="hover:text-[var(--green-primary)] duration-500 transition-all py-3 text-lg min-h-[44px] flex items-center"
            >
              Menu
            </a>
            <a
              href="/gallery"
              onClick={handleMobileNavClick}
              className="hover:text-[var(--green-primary)] duration-500 transition-all py-3 text-lg min-h-[44px] flex items-center"
            >
              Gallery
            </a>
            <a
              href="/feed-back"
              onClick={handleMobileNavClick}
              className="hover:text-[var(--green-primary)] duration-500 transition-all py-3 text-lg min-h-[44px] flex items-center"
            >
              Feedback
            </a>
            <button
              type="button"
              onClick={() => {
                scrollToFooter();
                handleMobileNavClick();
              }}
              className="hover:text-[var(--green-primary)] duration-500 transition-all py-3 text-lg min-h-[44px] flex items-center bg-transparent border-none cursor-pointer px-0 text-inherit font-inherit"
              style={{ background: "none" }}
            >
              Contact
            </button>
            <button
              onClick={() => {
                handleReservationClick();
                handleMobileNavClick();
              }}
              className="bg-[var(--green-primary)] text-[var(--color-topline)] text-lg py-3 px-5 rounded-lg font-semibold cursor-pointer hover:bg-[var(--green-dark)] transition-all duration-500 mt-4 min-h-[44px]"
            >
              BOOK A TABLE
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};
