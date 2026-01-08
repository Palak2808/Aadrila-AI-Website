import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { scrollToSection } from "../utils/scrollToSection";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="w-full backdrop-blur-md px-4 lg:px-20 fixed top-0 z-50 bg-white/70">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => {
            setOpen(false);
            handleScroll("home");
          }}
        >
          <img
            src={logo}
            alt="Aadrila Technologies"
            className="h-12 w-32 lg:w-36"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium text-gray-700">
          <li
            onClick={() => handleScroll("home")}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </li>

          <li
            onClick={() => handleScroll("industries")}
            className="cursor-pointer hover:text-blue-600"
          >
            Industries
          </li>

          <li
            onClick={() => handleScroll("products")}
            className="cursor-pointer hover:text-blue-600"
          >
            Products
          </li>

          <li
            onClick={() => handleScroll("blogs")}
            className="cursor-pointer hover:text-blue-600"
          >
            Blog
          </li>

          <li
            onClick={() => handleScroll("contact")}
            className="cursor-pointer hover:text-blue-600"
          >
            Contact Us
          </li>

          <li
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:text-blue-600"
          >
            About Us
          </li>
        </ul>

        {/* CTA (Desktop only) */}
        <button className="hidden md:block bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 transition text-white px-6 py-2.5 rounded-full text-sm font-medium">
          Get a Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li onClick={() => handleScroll("home")}>Home</li>
            <li onClick={() => handleScroll("industries")}>Industries</li>
            <li onClick={() => handleScroll("products")}>Products</li>
            <li onClick={() => handleScroll("blogs")}>Blog</li>
            <li onClick={() => handleScroll("contact")}>Contact Us</li>
            <Link to="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>

            <button className="mt-4 bg-[#3E6EB4] text-white py-2.5 rounded-full">
              Get a Demo
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
