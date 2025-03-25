// src/components/Navigation.tsx
import React from "react";
import Menu from "./Menu"; // Importujemy Menu
import ChatbotBtn from "./ChatbotBtn"; // Importujemy pierwszy przycisk
import AlertsBtn from "./AlertsBtn"; // Importujemy drugi przycisk
import appIcon from "../assets/navigation/app-icon.png";

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-violet-50 fixed w-[100%] left-0 z-40">
      {/* Menu po lewej stronie */}
      <Menu />

      {/* Logo */}
      <div className="absolute top-1 left-28 flex items-center z-40">
          <img
            src={appIcon}
            alt="Menu"
            className="w-1/5 mt-1"
          />
          <h1 className="text-3xl font-bold ml-[-15px]">Gymwave</h1>
      </div>

      {/* Inne przyciski po prawej stronie */}
      <div className="flex space-x-4 md:flex-row md:space-x-6">
        <ChatbotBtn />
        <AlertsBtn />
      </div>
    </nav>
  );
};

export default Navigation;
