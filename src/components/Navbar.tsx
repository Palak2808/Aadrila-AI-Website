import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="w-full backdrop-blur-md px-4 lg:px-20">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Aadrila Technologies" className="h-9 w-auto" />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium text-gray-700">
          <Link to="/">Home</Link>
          <li>Industries</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <Link to="/about">About Us</Link>
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
