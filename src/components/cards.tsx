import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="w-full font-montserrat  md:px-24 flex flex-col gap-6">
      {/* Úvodní část */}
      <div className="bg-white/70 border-[#25BE62] border-1 gap-70 rounded-[50px] shadow-lg flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="flex-1 py-40 px-10 flex flex-col justify-center">
          <h2 className="text-8xl font-bold text-black mb-20">
            Who is this for?
          </h2>
          <p className="text-5xl text-gray-800">
            We connect those who provide services with those who seek them.
            <br />
            <span className="text-[#25BE62]">
              Fast, convenient, without intermediaries
            </span>
          </p>
        </div>

        <div className="relative w-full md:w-auto flex items-end justify-end">
          <img src="/thinking-man.png" alt="thinking" className="w-100" />
        </div>
      </div>

      {/* Dvě karty: Worker a Client */}
      <div className="grid grid-cols-1  font-montserrat text-black md:grid-cols-2 gap-6">
        {/* Client Card */}
        <div className=" bg-white/70 rounded-[50px]  border-[#25BE62] border-1 shadow-md px-6 pb-10 flex flex-col justify-between gap-6">
          <img
            src="/client-phone.png"
            alt="Client app screenshot"
            className="w-40 md:w-128 self-center"
          />
          <div>
            <h3 className="text-8xl pb-16 font-bold">Client</h3>
            <p className="text-xl">
              Need something fixed, cleaned, or delivered?
              <br />
              No more Googling — everything is in one place
            </p>
          </div>
        </div>

        {/* Worker Card */}
        <div className=" bg-white/70  border-[#25BE62] border-1  rounded-[50px] shadow-md px-6 pt-10 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-8xl py-6 font-bold">Worker</h3>
            <p className="text-xl">
              Do you want stable orders in your city?
              <br />
              Tell us your skills – we’ll connect you with clients
            </p>
          </div>
          <img
            src="/worker-phone.png"
            alt="Worker app screenshot"
            className="w-40 md:w-128 self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
