import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import CustomInput from "./CustomInput";

const EarlyAccessSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  return (
    // Container s 100vh a paddingem
    <div className="h-screen w-full p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
      <section className="w-full h-full rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] border border-[#25BE62] font-montserrat bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
          {/* Text Content */}
          <div className="text-black flex flex-col justify-center text-center lg:text-left px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-16 order-2 lg:order-1">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] sm:leading-[1.15] lg:leading-tight mb-3 sm:mb-4 lg:mb-6">
              <Trans
                i18nKey="earlyAccess.headline"
                components={{ green: <span className="text-[#68CE8E]" /> }}
              />
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed lg:leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-none lg:max-w-[90%] mx-auto lg:mx-0">
              <Trans
                i18nKey="earlyAccess.description"
                components={{
                  br: <br className="hidden sm:block" />,
                }}
              />
            </p>

            {/* Input Section */}
            <div className="w-full sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto lg:mx-0">
              <CustomInput
                placeholder={t("earlyAccess.placeholder")}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => alert("Submitted!")}
                buttonText={t("earlyAccess.buttonText")}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center lg:items-end h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[600px] h-full flex items-center lg:items-end justify-center">
              <img
                src="/phone-click.png"
                alt="Phone in hand"
                className="w-full h-auto object-contain max-h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccessSection;
