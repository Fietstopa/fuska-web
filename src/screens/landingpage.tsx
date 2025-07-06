import { motion } from "framer-motion";
import React from "react";
import Navbar from "../components/navbar";
import IphoneCarousel from "../components/IphoneCarousel";
import Cards from "../components/cards";

import EarlyAccessSection from "../components/EarlyAccessSection";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import ComingSoonSection from "../components/ComingSoon";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div
        className=" w-full  bg-cover bg-center  text-white flex flex-col"
        style={{ backgroundImage: "url('/blob.png')" }}
      >
        <Navbar />

        <div className="flex-1 px-24 pt-24  flex flex-col justify-center">
          {/* Nadpis */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-[200px] font-montserrat font-bold leading-[1.1] text-center"
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
          <div className="w-full flex justify-center relative mt-[-200px] mb-16">
            {/* Levý mobil */}
            <motion.img
              src="/phone1.png"
              alt="Phone 1"
              initial={{ x: -200, rotate: 24, opacity: 0 }}
              whileInView={{ x: 50, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-3/5 h-auto object-contain z-20 relative -mr-20"
            />
            {/* Pravý mobil */}
            <motion.img
              src="/phone2.png"
              alt="Phone 2"
              initial={{ x: 200, y: 0, rotate: -10, opacity: 0 }}
              whileInView={{ x: -200, y: 200, rotate: 5, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="w-3/7 h-auto object-contain z-10"
            />
          </div>

          {/* Grid */}
          <div className="grid w-full py-30 gap-8 grid-cols-[3fr_2fr] items-start">
            <h2 className="text-[96px] font-semibold font-montserrat leading-tight text-left">
              Work. Hustle. Connect
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

              <p className="text-xl text-left font-inter text-black">
                Looking for a handyman or want to earn with your skills? We're
                building an app that will transform the services market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Další obsah mimo pozadí */}
      <div className="min-h-screen  bg-white">
        {/* Další sekce */}
        <h1 className="text-[96px] px-24 font-montserrat font-bold text-black text-left py-30">
          Everything you need <br />
          in <span className="text-[#26BE63]">one app</span>
        </h1>{" "}
        <div></div>
        <div className="py-220">
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
          ></IphoneCarousel>
        </div>
        <div
          className=" w-full bg-cover bg-center bg-no-repeat text-white flex flex-col"
          style={{ backgroundImage: "url('/blob2.png')" }}
        >
          <Cards></Cards>
        </div>
        <div
          className=" w-full bg-cover bg-center bg-no-repeat text-white flex flex-col"
          style={{ backgroundImage: "url('/blob3.png')" }}
        >
          {" "}
          <HowItWorks></HowItWorks>{" "}
          <div className="px-24">
            <EarlyAccessSection></EarlyAccessSection>
            <ComingSoonSection></ComingSoonSection>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
