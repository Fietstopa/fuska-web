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

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div
        className="w-full bg-cover bg-center text-white flex flex-col"
        style={{ backgroundImage: "url('/blob.png')" }}
      >
        <Navbar />

        <div className="flex-1 px-6 md:px-24 pt-20 md:pt-24 flex flex-col justify-center">
          {/* Nadpis */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-[64px] md:text-[200px] font-montserrat font-bold leading-[1.1] text-center"
          >
            <motion.span
              variants={{
                hidden: { y: -200, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0 },
                },
              }}
              className="block"
            >
              New app
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { y: -200, opacity: 0 },
                visible: {
                  y: -200,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
              className="block"
            >
              Is coming
            </motion.span>
          </motion.h1>

          {/* Mobily */}
          <div className="w-full flex justify-center relative mt-[-100px] md:mt-[-200px] mb-16">
            {/* Levý mobil */}
            <motion.img
              src="/phone1.png"
              alt="Phone 1"
              initial={{ x: -200, rotate: 24, opacity: 0 }}
              whileInView={{ x: 50, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-4/5 md:w-3/5 h-auto object-contain z-20 relative -mr-10 md:-mr-20"
            />
            {/* Pravý mobil */}
            <motion.img
              src="/phone2.png"
              alt="Phone 2"
              initial={{ x: 200, y: 0, rotate: -10, opacity: 0 }}
              whileInView={{ x: -200, y: 200, rotate: 5, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="w-2/3 md:w-3/7 h-auto object-contain z-10"
            />
          </div>

          {/* Grid */}
          <div className="grid w-full py-10 md:py-30 gap-8 grid-cols-1 md:grid-cols-[3fr_2fr] items-start">
            <h2 className="text-[40px] md:text-[96px] 2xl:md:text-[120px] font-semibold font-montserrat leading-tight text-left">
              Work. Hustle. <br /> Connect
            </h2>

            <div className="flex flex-col items-start gap-14">
              <CustomInput
                placeholder="account1@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => alert("Submitted!")}
                buttonText="Let me know"
              />

              <p className="text-base md:text-xl text-left font-inter text-black">
                Looking for a handyman or want to earn with your skills? We're
                building an app that will transform the services market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Další obsah mimo pozadí */}
      <div className="min-h-screen bg-white">
        {/* Další sekce */}
        <h1 className="text-[40px] md:text-[96px] px-6 md:px-24 font-montserrat font-bold text-black text-left py-10 md:py-30">
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
          <div className="px-6 md:px-24">
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
