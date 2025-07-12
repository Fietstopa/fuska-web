import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CustomInput from "./CustomInput";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // spustí při prvním načtení
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ANIMACE HEADLINŮ
  const headline1Variants = {
    hidden: isDesktop ? { y: -150, opacity: 0 } : { y: -50, opacity: 0 },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0 },
    },
  };

  const headline2Variants = {
    hidden: isDesktop ? { y: -150, opacity: 0 } : { y: 50, opacity: 0 },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };
  let phone1Initial, phone1WhileInView, phone2Initial, phone2WhileInView;
  if (isDesktop) {
    phone1Initial = { x: "-10vw", opacity: 0 };
    phone1WhileInView = { x: "2vw", y: "-10vh", rotate: -5, opacity: 1 };

    phone2Initial = { x: "50vw", opacity: 0 };
    phone2WhileInView = { x: "-12vw", opacity: 1 };
  }

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
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
          className="text-[64px]    md:text-[128px] lg:text-[164px] xl:text-[200px] font-montserrat font-bold leading-[1.1] text-center"
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
        <div className="w-full flex justify-center relative  mb-16 overflow-visible">
          <motion.img
            src="/phone1.png"
            alt="Phone 1"
            className="w-[55%] md:w-3/5 h-auto object-contain z-20 relative -mr-[5%] md:-mr-20"
            initial={phone1Initial}
            whileInView={phone1WhileInView}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: isDesktop ? 0.8 : 0.5, ease: "easeOut" }}
            draggable={false}
            style={{ pointerEvents: "none" }}
          />

          <motion.img
            src="/phone2.png"
            alt="Phone 2"
            className="w-[45%] md:w-3/7 h-auto object-contain z-10 relative"
            initial={phone2Initial}
            whileInView={phone2WhileInView}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: isDesktop ? 0.8 : 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            draggable={false}
            style={{ pointerEvents: "none" }}
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
