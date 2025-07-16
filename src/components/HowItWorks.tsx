import React from "react";
import IconLoader from "../components/IconLoader"; // Uprav cestu podle struktury
import phones1 from "../../public/two_phones.png";
import phones2 from "../../public/two_phones2.png";
import phones3 from "../../public/two_phones3.png";
const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full font-montserrat from-white via-green-50 to-green-100 py-20 px-6 md:px-20 text-center"
    >
      <h2 className="text-4xl text-black md:text-[96px] font-bold mb-4">
        How Fuška works?
      </h2>
      <p className="text-[40px] text-gray-700 mb-16">
        Find help in just{" "}
        <span className="text-green-600 font-semibold">a few taps</span> — fast,
        simple, and reliable
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
            Post a Task
            <IconLoader src="/icons/checkmark.svg" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-center">
            Tell us what you need — cleaning, repairs, moving, or more. Just add
            a few details and set your budget.
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
            Get Matched
            <IconLoader src="/icons/people.svg" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-center">
            Receive offers from rated specialists nearby. Pick the one that fits
            your schedule and needs.
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
            Track &amp; Pay
            <IconLoader src="/icons/card.svg" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-center">
            Chat directly, track progress, and pay securely — all in-app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
