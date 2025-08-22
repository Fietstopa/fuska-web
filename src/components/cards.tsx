import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Cards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="for-whom"
      className="w-full font-montserrat px-2 sm:px-4 py-4 md:px-8 lg:px-12 xl:px-18 2xl:px-24 grid gap-y-4 sm:gap-y-6 grid-rows-[1fr_2fr] min-h-screen h-screen max-h-screen"
    >
      {/* Úvodní část - zabírá 1/3 výšky */}
      <div className="bg-white/70 border-[#25BE62] border shadow-lg rounded-3xl sm:rounded-[40px] md:rounded-[50px] flex flex-col sm:flex-row items-stretch overflow-hidden">
        <div className="flex-1 py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center sm:text-left gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-black">
            {t("cards.sectionTitle")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-gray-800">
            <Trans
              i18nKey="cards.sectionDescription"
              components={{
                br: <br className="hidden sm:block" />,
                green: <span className="text-[#25BE62]" />,
              }}
            />
          </p>
        </div>

        <div className="relative w-full sm:w-auto flex items-end justify-center sm:justify-end">
          <img
            src="/thinking-man.png"
            alt="thinking"
            className="w-32 sm:w-40 md:w-48 h-auto object-contain"
          />
        </div>
      </div>

      {/* Dvě karty: Worker a Client - zabírá 2/3 výšky */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-black font-montserrat">
        {/* Client Card */}
        <div className="bg-white/70 border border-[#25BE62] rounded-3xl sm:rounded-[40px] md:rounded-[50px] shadow-md px-4 sm:px-6 pb-6 sm:pb-10 flex flex-col justify-between gap-4 sm:gap-6 text-center sm:text-left h-full">
          <img
            src="/client-phone.png"
            alt="Client app screenshot"
            className="w-32 sm:w-40 md:w-[300px] self-center"
          />
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {t("cards.clientTitle")}
            </h3>
            <p className="text-sm sm:text-base md:text-xl">
              <Trans
                i18nKey="cards.clientText"
                components={{ br: <br className="hidden sm:block" /> }}
              />
            </p>
          </div>
        </div>

        {/* Worker Card */}
        <div className="bg-white/70 border border-[#25BE62] rounded-3xl sm:rounded-[40px] md:rounded-[50px] shadow-md px-4 sm:px-6 pt-6 sm:pt-10 flex flex-col justify-between gap-4 sm:gap-6 text-center sm:text-left h-full">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {t("cards.workerTitle")}
            </h3>
            <p className="text-sm sm:text-base md:text-xl">
              <Trans
                i18nKey="cards.workerText"
                components={{ br: <br className="hidden sm:block" /> }}
              />
            </p>
          </div>
          <img
            src="/worker-phone.png"
            alt="Worker app screenshot"
            className="w-32 sm:w-40 md:w-[300px] self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
