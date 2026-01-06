import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import bg from "./assets/headerBg.jpg";
import ProductsSection from "./components/ProductsSection";
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
      <ProductsSection />
    </div>
  );
}

export default App;
