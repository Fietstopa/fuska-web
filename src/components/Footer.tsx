import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import { useState } from "react";
import CustomInput from "./CustomInput"; // ujisti se, že cesta sedí

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full  text-black py-16 md:px-24">
      <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
        {/* Logo + Description */}
        <div className="flex flex-col gap-4 flex-1">
          <img src="/logo.png" alt="Fuska Logo" className="w-32" />

          <p className="text-base">© New platform for ordering services</p>
          <p className="text-base">Company 2025</p>

          {/* Custom Input + Button */}
          <div className="t">
            <CustomInput
              placeholder="account1@gmail.com"
              type="email"
              className=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => alert("Submitted!")}
              buttonText="Let me know"
            />{" "}
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1  text-white">
          <h3 className="text-3xl font-semibold mb-8">Menu</h3>
          <ul className="space-y-2 text-base">
            <li>For whom</li>
            <li>About app</li>
            <li>How works</li>
            <li>App for</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-8 text-white">Contact</h3>
          <div className="flex gap-4 text-lg text-white">
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
