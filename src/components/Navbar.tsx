import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { scrollToSection } from "../utils/scrollToSection";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="w-full backdrop-blur-md px-4 lg:px-20 fixed top-0 z-50">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Aadrila Technologies" className="h-12 w-36" />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium text-gray-700">
          <li
            onClick={() => navigate("/")}
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
            onClick={() => handleScroll("blogs")}
            className="cursor-pointer hover:text-blue-600"
          >
            Contact Us
          </li>

          <Link to="/about" className="hover:text-blue-600">
            About Us
          </Link>
        </ul>

        {/* CTA */}
        <button className="bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 transition text-white px-6 py-2.5 rounded-full text-sm font-medium">
          Get a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
