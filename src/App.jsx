import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Home/Hero";
import SearchBar from "./pages/Home/SearchBar";
import PopularServices from "./pages/Home/PopularServices";
import HowItWorks from "./pages/Home/HowItWorks";
import FeaturedProfessionals from "./pages/Home/FeaturedProfessionals";
import ProfessionalCTA from "./pages/Home/ProfessionalCTA";
import WhyChooseUs from "./pages/Home/WhyChooseUs";
import CustomerReviews from "./pages/Home/CustomerReviews";
import Newsletter from "./pages/Home/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularServices />
      <HowItWorks />
      <FeaturedProfessionals />
      <ProfessionalCTA />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />  
      <Footer />
    </>
  );
}

export default App;