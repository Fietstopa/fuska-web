import React, { useState } from "react";
import CustomInput from "./CustomInput";

const EarlyAccessSection: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full border border-[#25BE62] rounded-[50px] font-montserrat bg-white from-white via-green-50 to-green-100  ">
      <div className="    backdrop-blur-xl shadow-md grid md:grid-cols-2 items-center px-8 md:px-20 ">
        {/* Textová část */}
        <div className="text-black py-14 h-full flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl font-bold leading-tight">
            First come <br />
            <span className="text-[#68CE8E]">first served</span>
          </h2>
          <p className="text-2xl  md:text-4xl my-10 ">
            Fuška is currently in development.
            <br />
            Join our early access list and help <br /> shape the way people get
            the things <br /> done — together.
          </p>
          <div className="w-3/4">
            <CustomInput
              placeholder="account1@gmail.com"
              type="email"
              className=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => alert("Submitted!")}
              buttonText="Let me know"
            />
          </div>
        </div>

        {/* Obrázek */}
        <div className="flex justify-center items-end h-full">
          <img
            src="/phone-click.png"
            alt="Phone in hand"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
