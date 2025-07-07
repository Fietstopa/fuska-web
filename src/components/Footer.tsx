import React, { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import CustomInput from "./CustomInput";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full font-montserrat text-black py-16 px-6 md:px-24 ">
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-12 items-center md:items-start text-center md:text-left">
        {/* Logo + Description */}
        <div className="flex flex-col gap-6 flex-1 items-center md:items-start">
          <img src="/logo.png" alt="Fuska Logo" className="w-32" />
          <p className="text-base text-white">
            © New platform for ordering services
          </p>
          <p className="text-base text-white">Fuška s.r.o. 2025</p>

          <div className="w-full max-w-sm mt-4">
            <CustomInput
              placeholder="account1@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => alert("Submitted!")}
              buttonText="Let me know"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 flex flex-col items-center md:items-start text-white">
          <h3 className="text-3xl font-semibold mb-6">Menu</h3>
          <ul className="space-y-2 text-xl">
            <li>For whom</li>
            <li>About app</li>
            <li>How works</li>
            <li>App for</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 flex flex-col items-center md:items-start text-white">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <div className="flex gap-6 text-3xl">
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
            <FaTelegram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
