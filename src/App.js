import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Activities from "./components/Activities";
import SocialMedia from "./components/SocialMedia";
import Rankers from "./components/Rankers";
import AboutPrincipal from "./components/AboutPrincipal";
import Faculty from "./components/Faculty";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "./styles.css";

function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Rankers />
      <Activities />
      <SocialMedia />
      <AboutPrincipal />
      <Faculty />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
