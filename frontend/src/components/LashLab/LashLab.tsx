import About from "../About/About";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";

export default function LashLab() {
  return (
    <div className="flex flex-col min-h-screen bg-lashwhite font-poppins">
        <Header />
        <HeroSection />
        {/* <About /> */}
        {/* <Services /> */}
    </div>
  )
}
