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
      className="w-full font-montserrat from-white via-green-50 to-green-100 py-20 px-6 md:px-20 text-center"
    >
      <h2 className="text-4xl text-black md:text-[96px] font-bold mb-4">
        {t("howItWorks.sectionTitle")}
      </h2>
      <p className="text-[40px] text-gray-700 mb-16">
        <Trans
          i18nKey="howItWorks.sectionDescription"
          components={{
            green: <span className="text-green-600 font-semibold" />,
          }}
        />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left text-black">
        {/* Post a Task */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={phones1}
            alt="Post a Task"
            className="w-40 md:w-96 h-auto"
          />
          <h3 className="text-4xl font-bold flex items-center gap-2">
            {t("howItWorks.postTaskTitle")}
            <IconLoader src="/icons/checkmark.svg" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-center">
            {t("howItWorks.postTaskDescription")}
          </p>
        </div>

        {/* Get Matched */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={phones2}
            alt="Get Matched"
            className="w-40 md:w-96 h-auto"
          />
          <h3 className="text-4xl font-bold flex items-center gap-2">
            {t("howItWorks.getMatchedTitle")}
            <IconLoader src="/icons/people.svg" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-center">
            {t("howItWorks.getMatchedDescription")}
          </p>
        </div>

        {/* Track & Pay */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={phones3}
            alt="Track & Pay"
            className="w-40 md:w-96 h-auto"
          />
          <h3 className="text-4xl font-bold flex items-center gap-2">
            {t("howItWorks.trackPayTitle")}
            <IconLoader src="/icons/card.svg" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-center">
            {t("howItWorks.trackPayDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
