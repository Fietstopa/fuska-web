import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  // Univerzální animace, které se přizpůsobí velikosti obrazovky
  const headline1Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const headline2Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  // Animace telefonů s responzivními hodnotami
  const phone1Animation = {
    initial: { x: "-10%", opacity: 0 },
    animate: {
      x: "2%",
      y: "-10%",
      rotate: -5,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const, // or use specific easing function
      },
    },
  };

  const phone2Animation = {
    initial: { x: "10%", opacity: 0 },
    animate: {
      x: "-12%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="w-full bg-cover bg-center text-white flex flex-col"
    >
      <div className="flex-1 px-6 md:px-24 pt-20 md:pt-24 flex flex-col justify-center">
        {/* H1 NADPIS */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[64px] md:text-[128px] lg:text-[164px] xl:text-[200px] font-montserrat font-bold leading-[1.1] text-center"
        >
          <motion.span variants={headline1Variants} className="block">
            {t("hero.headline1")}
          </motion.span>
          <motion.span
            variants={headline2Variants}
            className="block mt-[-10px]"
          >
            {t("hero.headline2")}
          </motion.span>
        </motion.h1>

        {/* MOBILY */}
        <div className="w-full flex justify-center relative mb-16 overflow-visible">
          <motion.img
            src="/phone1.png"
            alt="Phone 1"
            className="w-[55%] md:w-3/5 h-auto object-contain z-20 relative -mr-[5%] md:-mr-20"
            initial={phone1Animation.initial}
            whileInView={phone1Animation.animate}
            viewport={{ once: true, amount: 0.5 }}
            style={{ pointerEvents: "none" }}
            draggable={false}
          />

          <motion.img
            src="/phone2.png"
            alt="Phone 2"
            className="w-[45%] md:w-3/7 h-auto object-contain z-10 relative"
            initial={phone2Animation.initial}
            whileInView={phone2Animation.animate}
            viewport={{ once: true, amount: 0.5 }}
            style={{ pointerEvents: "none" }}
            draggable={false}
          />
        </div>

        {/* GRID SEKCE */}
        <div className="grid w-full py-10 md:py-30 gap-8 grid-cols-1 md:grid-cols-[3fr_2fr] items-start">
          <h2 className="text-[40px] md:text-[96px] 2xl:text-[120px] font-semibold font-montserrat leading-tight text-left">
            {t("hero.subheadline")}
          </h2>

          <div className="flex flex-col items-start gap-14">
            <CustomInput
              placeholder={t("hero.inputPlaceholder")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => alert("Submitted!")}
              buttonText={t("hero.buttonText")}
            />

            <p className="text-base md:text-3xl text-left font-inter text-black">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
