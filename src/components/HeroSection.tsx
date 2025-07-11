import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
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
    <div className="w-full bg-cover bg-center text-white flex flex-col">
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
            {t("hero.headline1")}
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
            {t("hero.headline2")}
          </motion.span>
        </motion.h1>

        {/* Mobily */}
        <div className="w-full flex justify-center relative mt-[-100px] md:mt-[-200px] mb-16">
          <motion.img
            src="/phone1.png"
            alt="Phone 1"
            className="w-4/5 md:w-3/5 h-auto object-contain z-20 relative -mr-10 md:-mr-20"
            initial={phone1Initial}
            whileInView={phone1WhileInView}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.img
            src="/phone2.png"
            alt="Phone 2"
            className="w-2/3 md:w-3/7 h-auto object-contain z-10"
            initial={phone2Initial}
            whileInView={phone2WhileInView}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
        </div>

        {/* Grid */}
        <div className="grid w-full py-10 md:py-30 gap-8 grid-cols-1 md:grid-cols-[3fr_2fr] items-start">
          <h2 className="text-[40px] md:text-[96px] 2xl:md:text-[120px] font-semibold font-montserrat leading-tight text-left">
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

            <p className="text-base md:text-xl text-left font-inter text-black">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
