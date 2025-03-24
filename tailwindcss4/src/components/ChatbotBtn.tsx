// src/components/Button1.tsx
import React from "react";
import MessageIcon from "../assets/navigation/MessageIcon.svg";

const ChatbotBtn: React.FC = () => {
  return (
    <button className="p-2 bg-white  rounded-full border border-gray-200 hover:bg-gray-200 duration-300 cursor-pointer">
        <img src={MessageIcon} alt="Menu" className="w-6 h-6" />
    </button>
  );
};

export default ChatbotBtn;
