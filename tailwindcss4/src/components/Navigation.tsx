// src/components/Navigation.tsx
import React from "react";
import Menu from "./Menu"; // Importujemy Menu
import ChatbotBtn from "./ChatbotBtn"; // Importujemy pierwszy przycisk
import AlertsBtn from "./AlertsBtn"; // Importujemy drugi przycisk

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      {/* Menu po lewej stronie */}
      <Menu />

      {/* Inne przyciski po prawej stronie */}
      <div className="flex space-x-4 md:flex-row md:space-x-6">
        <ChatbotBtn />
        <AlertsBtn />
      </div>
    </nav>
  );
};

export default Navigation;
