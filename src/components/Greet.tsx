import React from "react";
import { Trans } from "react-i18next";

const Greet: React.FC = () => {
  return (
    <h1 className="text-3xl md:text-[96px] px-6 md:px-24 font-montserrat font-bold text-black text-left py-10 md:py-30">
      <Trans
        i18nKey="greet.title"
        components={{
          strong: <span className="font-bold" />,
          green: <span className="text-[#26BE63]" />,
        }}
      />
    </h1>
  );
};

export default Greet;
