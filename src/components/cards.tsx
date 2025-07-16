import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Cards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="for-whom"
      className="w-full font-montserrat px-3 md:px-24 flex flex-col gap-6"
    >
      {/* Úvodní část */}
      <div className="bg-white/70 border-[#25BE62] border shadow-lg rounded-[30px] md:rounded-[50px] flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="flex-1 py-10 md:py-40 px-4 md:px-10 flex flex-col justify-center text-center md:text-left gap-6">
          <h2 className="text-4xl md:text-8xl font-bold text-black">
            {t("cards.sectionTitle")}
          </h2>
          <p className="text-xl md:text-5xl text-gray-800">
            <Trans
              i18nKey="cards.sectionDescription"
              components={{
                br: <br />,
                green: <span className="text-[#25BE62]" />,
              }}
            />
          </p>
        </div>

        <div className="relative w-full md:w-auto flex items-end justify-center md:justify-end">
          <img
            src="/thinking-man.png"
            alt="thinking"
            className="w-4/5 md:w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Dvě karty: Worker a Client */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black font-montserrat">
        {/* Client Card */}
        <div className="bg-white/70 border border-[#25BE62] rounded-[30px] md:rounded-[50px] shadow-md px-6 pb-10 flex flex-col justify-between gap-6 text-center md:text-left">
          <img
            src="/client-phone.png"
            alt="Client app screenshot"
            className="w-40 md:w-[300px] self-center"
          />
          <div>
            <h3 className="text-4xl md:text-8xl font-bold mb-6">
              {t("cards.clientTitle")}
            </h3>
            <p className="text-base md:text-xl">
              <Trans i18nKey="cards.clientText" components={{ br: <br /> }} />
            </p>
          </div>
        </div>

        {/* Worker Card */}
        <div className="bg-white/70 border border-[#25BE62] rounded-[30px] md:rounded-[50px] shadow-md px-6 pt-10 flex flex-col justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-4xl md:text-8xl font-bold mb-6">
              {t("cards.workerTitle")}
            </h3>
            <p className="text-base md:text-xl">
              <Trans i18nKey="cards.workerText" components={{ br: <br /> }} />
            </p>
          </div>
          <img
            src="/worker-phone.png"
            alt="Worker app screenshot"
            className="w-40 md:w-[300px] self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
