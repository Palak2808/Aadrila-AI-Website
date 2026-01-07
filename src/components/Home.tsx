import HeroSection from "./HeroSection";
import Industries from "./Industries";
import ProductsSection from "./ProductsSection";
import BlogsSection from "./BlogsSection";
import bg from "../assets/headerBg.jpg";
import ContactPage from "./ContactPage";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <Industries />
      <ProductsSection />
      <BlogsSection />
      <ContactPage />
    </>
  );
}
