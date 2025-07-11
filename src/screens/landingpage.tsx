import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import IphoneCarousel from "../components/IphoneCarousel";
import Cards from "../components/cards";
import EarlyAccessSection from "../components/EarlyAccessSection";
import CustomInput from "../components/CustomInput";
import ComingSoonSection from "../components/ComingSoon";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import HeroSection from "../components/HeroSection";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const phone1Initial = isDesktop
    ? { x: -200, rotate: 24, opacity: 0 }
    : { x: 0, rotate: 0, opacity: 1 };

  const phone1WhileInView = isDesktop
    ? { x: 50, rotate: 0, opacity: 1 }
    : { x: 0, rotate: 0, opacity: 1 };

  const phone2Initial = isDesktop
    ? { x: 200, y: 0, rotate: -10, opacity: 0 }
    : { x: 0, y: 0, rotate: 0, opacity: 1 };

  const phone2WhileInView = isDesktop
    ? { x: -200, y: 200, rotate: 5, opacity: 1 }
    : { x: 0, y: 0, rotate: 0, opacity: 1 };
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
        <h1 className="text-3xl md:text-[96px] px-6 md:px-24 font-montserrat font-bold text-black text-left py-10 md:py-30">
          Everything you need <br />
          in <span className="text-[#26BE63]">one app</span>
        </h1>

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
