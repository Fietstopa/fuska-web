import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

const ComingSoonSection: React.FC = () => {
  const { t } = useTranslation();

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-01T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="when"
      className="w-full py-16 md:py-24 font-montserrat relative overflow-hidden"
    >
      <h2 className="text-4xl md:text-8xl text-black font-bold leading-tight mb-10 text-center md:text-left">
        <Trans i18nKey="comingSoon.headline" components={{ br: <br /> }} />
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Textová část vlevo */}
        <div className="flex-1 w-full text-black">
          <div className="flex flex-col gap-16 md:gap-24 text-lg md:text-4xl">
            <div>
              <p className="text-left">{t("comingSoon.launchQuestion")}</p>
              <p className="text-right">{t("comingSoon.launchAnswer")}</p>
            </div>

            <div>
              <p className="text-left">{t("comingSoon.iosAndroidQuestion")}</p>
              <div className="flex justify-end gap-4 mt-2">
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="h-10 md:h-12"
                />
                <img
                  src="/googleplay.png"
                  alt="Google Play"
                  className="h-10 md:h-12"
                />
              </div>
            </div>

            <div>
              <p className="text-left">{t("comingSoon.freeQuestion")}</p>
              <p className="text-right">
                <Trans
                  i18nKey="comingSoon.freeAnswer"
                  components={{
                    underline: (
                      <span className="underline underline-offset-2" />
                    ),
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Obrázky telefonů */}
        <div className="flex-1 relative flex justify-center z-0 items-center">
          <div className="flex gap-12 justify-center relative">
            <motion.img
              src="/phone-right.png"
              alt="Phone 1"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-40 md:w-58 h-auto object-contain"
            />
            <img
              src="/arrow-curve.png"
              alt="Arrow"
              className="absolute top-[-6rem] md:top-[-18rem] right-0 md:right-48 w-16 md:w-32"
            />
            <motion.img
              src="/phone-left.png"
              alt="Phone 2"
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 100, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="w-40 md:w-58 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Countdown box */}
      <div className="bg-[#F8FFFA] border border-[#60CF8C] font-montserrat rounded-[30px] md:rounded-[50px] px-6 md:px-8 py-16 md:py-24 w-full max-w-5xl mx-auto text-center mt-16 z-999">
        <h3 className="text-2xl md:text-4xl font-semibold text-[#26BE63] mb-8">
          {t("comingSoon.comingSoonLabel")}
        </h3>
        <div className="grid grid-cols-4 text-[#26BE63] text-2xl md:text-4xl font-bold divide-x divide-[#34AC69]">
          <div className="px-4 py-4">
            <p>{timeLeft.days}</p>
            <p className="text-sm md:text-xl text-[#8CCFA] font-light mt-2">
              {t("comingSoon.countdown.days")}
            </p>
          </div>
          <div className="px-4 py-4">
            <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
            <p className="text-sm md:text-xl text-[#8CCFA] font-light mt-2">
              {t("comingSoon.countdown.hours")}
            </p>
          </div>
          <div className="px-4 py-4">
            <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
            <p className="text-sm md:text-xl text-[#8CCFA] font-light mt-2">
              {t("comingSoon.countdown.minutes")}
            </p>
          </div>
          <div className="px-4 py-4">
            <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
            <p className="text-sm md:text-xl text-[#8CCFA] font-light mt-2">
              {t("comingSoon.countdown.seconds")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
