import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import CustomInput from "./CustomInput";

const EarlyAccessSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  return (
    <section className="w-full rounded-[30px] md:rounded-[50px] border border-[#25BE62] font-montserrat bg-white from-white via-green-50 to-green-100">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-10 md:py-20 gap-y-10">
        {/* Textová část */}
        <div className="text-black flex flex-col justify-center text-center md:text-left gap-4">
          <h2 className="text-4xl md:text-8xl font-bold leading-tight">
            <Trans
              i18nKey="earlyAccess.headline"
              components={{ green: <span className="text-[#68CE8E]" /> }}
            />
          </h2>
          <p className="text-lg md:text-4xl my-4 md:my-10 leading-relaxed">
            <Trans
              i18nKey="earlyAccess.description"
              components={{ br: <br className="hidden md:block" /> }}
            />
          </p>
          <div className="w-full md:w-3/4 mx-auto md:mx-0">
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

        {/* Obrázek */}
        <div className="flex justify-center items-end h-full">
          <img
            src="/phone-click.png"
            alt="Phone in hand"
            className="w-4/5 md:w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
