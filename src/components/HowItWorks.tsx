import React from "react";
import { useTranslation, Trans } from "react-i18next";
import IconLoader from "../components/IconLoader";
import phones1 from "../../public/two_phones.png";
import phones2 from "../../public/two_phones2.png";
import phones3 from "../../public/two_phones3.png";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className="w-full font-montserrat from-white via-green-50 to-green-100 py-20 px-6 md:px-20 text-center min-h-screen h-screen max-h-screen flex flex-col"
    >
      {/* Nadpisová část */}
      <div className="flex flex-col text-black justify-center items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          {t("howItWorks.sectionTitle")}
        </h2>
        <p className="text-2xl md:text-4xl text-gray-700 ">
          <Trans
            i18nKey="howItWorks.sectionDescription"
            components={{
              green: <span className="text-green-600 font-semibold" />,
            }}
          />
        </p>
      </div>

      {/* Tři kroky - tento kontejner bude růst a zabírat zbývající prostor */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black h-auto max-w-8xl w-full px-4">
          {/* Post a Task */}
          <div className="flex flex-col items-center gap-4 md:gap-6 h-full">
            <div className="h-48 md:h-64 lg:h-80 flex items-center justify-center">
              <img
                src={phones1}
                alt="Post a Task"
                className="w-auto max-w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-2">
                {t("howItWorks.postTaskTitle")}
                <IconLoader
                  src="/icons/checkmark.svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-center">
                {t("howItWorks.postTaskDescription")}
              </p>
            </div>
          </div>

          {/* Get Matched */}
          <div className="flex flex-col items-center gap-4 md:gap-6 h-full">
            <div className="h-48 md:h-64 lg:h-80 flex items-center justify-center">
              <img
                src={phones2}
                alt="Get Matched"
                className="w-auto max-w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-2">
                {t("howItWorks.getMatchedTitle")}
                <IconLoader
                  src="/icons/people.svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-center">
                {t("howItWorks.getMatchedDescription")}
              </p>
            </div>
          </div>

          {/* Track & Pay */}
          <div className="flex flex-col items-center gap-4 md:gap-6 h-full">
            <div className="h-48 md:h-64 lg:h-80 flex items-center justify-center">
              <img
                src={phones3}
                alt="Track & Pay"
                className="w-auto max-w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-2">
                {t("howItWorks.trackPayTitle")}
                <IconLoader
                  src="/icons/card.svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-center">
                {t("howItWorks.trackPayDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
