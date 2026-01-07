import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import bg from "./assets/headerBg.jpg";
import ProductsSection from "./components/ProductsSection";
import Industries from "./components/Industries";
import BlogsSection from "./components/BlogsSection";
import ContactPage from "./components/ContactPage";
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
