import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import IphoneCarousel from "../components/IphoneCarousel";
import Cards from "../components/cards";
import EarlyAccessSection from "../components/EarlyAccessSection";
import ComingSoonSection from "../components/ComingSoon";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import HeroSection from "../components/HeroSection";
import Greet from "../components/Greet";

const LandingPage: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 500); // Zpoždění 500ms

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className="w-full bg-cover bg-center text-white flex flex-col"
        style={{ backgroundImage: "url('/blob.png')" }}
      >
        <Navbar />
        <HeroSection></HeroSection>{" "}
      </div>

      {/* Další obsah mimo pozadí */}
      <div className="min-h-screen bg-white">
        {/* Další sekce */}
        <Greet></Greet>
        <div className="py-2 md:py-16 md:py-[820px]">
          <IphoneCarousel
            screenshots={[
              "/shots/ss1.png",
              "/shots/ss2.png",
              "/shots/ss3.png",
              "/shots/ss4.png",
              "/shots/ss5.png",
              "/shots/ss6.png",
              "/shots/ss7.png",
              "/shots/ss8.png",
            ]}
          />
        </div>

        <div
          className="w-full bg-cover pt-10 md:py-60 bg-center bg-no-repeat text-white flex flex-col"
          style={{ backgroundImage: "url('/blob2.png')" }}
        >
          <Cards />
        </div>

        <div
          className="w-full bg-cover bg-center bg-no-repeat text-white flex flex-col"
          style={{ backgroundImage: "url('/blob3.png')" }}
        >
          <HowItWorks />
          <div className="px-4 md:px-24">
            <EarlyAccessSection />
            <ComingSoonSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
