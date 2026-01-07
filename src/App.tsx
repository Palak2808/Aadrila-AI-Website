import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import bg from "./assets/headerBg.jpg";
import ProductsSection from "./components/ProductsSection";
import Industries from "./components/Industries";
import BlogsSection from "./components/BlogsSection";
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
    </div>
  );
}

export default App;
