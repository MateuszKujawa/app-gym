import React from "react";
import Notification from "../assets/navigation/NotificationIcon.svg";

const AlertsBtn: React.FC = () => {
  return (
    <button className="p-2 bg-white  rounded-full border border-gray-200 hover:bg-gray-200 duration-300 cursor-pointer">
      <img src={Notification} alt="Menu" className="w-6 h-6" />
    </button>
  );
};

export default AlertsBtn;
