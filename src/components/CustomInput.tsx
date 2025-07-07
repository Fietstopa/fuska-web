import React from "react";

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onClick?: () => void;
  buttonText?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = "Enter email",
  type = "text",
  value,
  onChange,
  className = "",
  onClick,
  buttonText = "Let me know",
}) => {
  return (
    <div className="flex items-center bg-[#262CC0] text-white items-stretch rounded-full px-2 py-2 md:px-6 md:py-6 w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-transparent outline-none font-montserrat placeholder-white text-white md:text-2xl w-full ${className}`}
      />
      <button
        onClick={onClick}
        className="ml-2 bg-white text-black rounded-full px-2 py-2 md:px-6 md:py-5 text-sm md:text-xl font-semibold hover:bg-gray-100 transition whitespace-nowrap"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CustomInput;
