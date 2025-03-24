import React, { useState } from "react";
import { motion } from "framer-motion";
import categoryIcon from "../assets/navigation/Category.svg";
import sidebarleft from "../assets/navigation/show-sidebar-horiz-svgrepo-com.svg";
import profileImg from "../assets/navigation/default-user-image.png";
import appIcon from "../assets/navigation/app-icon.png";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faGear,
  faArrowRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 500);
    } else {
      setShowContent(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative font-dmsans font-medium z-50">
      {/* Przycisk otwierania menu */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-200 duration-300 cursor-pointer fixed top-4 left-4"
      >
        <img src={categoryIcon} alt="Menu" className="w-6 h-6" />
      </button>

      {/* Animowane menu */}
      <motion.div
        initial={{ width: 40, height: 40, borderRadius: "50%" }}
        animate={
          isOpen
            ? { width: "100vw", height: "100vh", borderRadius: "0%" }
            : { width: 40, height: 40, borderRadius: "50%" }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed left-0 top-0 bg-white dark:bg-zinc-900 text-white flex flex-col items-start justify-start pt-24 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Przycisk zamykania menu - pojawia się po pełnym otwarciu */}
        {showContent && (
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-10 p-2 hover:scale-110 duration-300 cursor-pointer z-50"
          >
            <img src={sidebarleft} alt="Close" className="w-6 h-6" />
          </button>
        )}

        <div className="absolute top-3 left-4 flex items-center">
          <img
            src={appIcon}
            alt="Menu"
            className="w-1/6 abolute top-0 left-0"
          />
          <h1 className="text-3xl font-bold ml-[-5px]">Gymwave</h1>
        </div>

        {/* Linki nawigacyjne - pojawiają się dopiero po pełnym otwarciu */}
        {showContent && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-6 text-lg w-full"
          >
            <li className="mr-8 ml-4">
              <a
                href="/"
                className={`block px-6 py-2 bg-transparent border border-transparent hover:border-zinc-600 hover:shadow-xl shadow-black/20 rounded-lg relative group overflow-hidden text-lg text-white duration-200 ${
                  location.pathname === "/" || location.pathname === "/home"
                    ? "bg-zinc-900 border-zinc-600 shadow-lg shadow-black/50"
                    : ""
                }`}
              >
                <span className="relative z-10">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="w-6 h-6 text-indigo-500 pr-5"
                  />
                  Home
                </span>

                {/* Poświata za ikoną */}
                <div
                  className={`absolute left-[-190px] inset-0 bg-gradient-to-r from-zinc-800 via-indigo-800 to-zinc-900 w-full transition-all duration-300 ${
                    location.pathname === "/" || location.pathname === "/home"
                      ? "opacity-25"
                      : "opacity-0"
                  } group-hover:opacity-25 group-focus:opacity-25 z-0`}
                ></div>
              </a>
            </li>

            <li className="mr-8 ml-4">
              <a
                href=""
                className="block px-6 py-2 bg-transparent border border-transparent hover:border-zinc-600 hover:shadow-lg shadow-black/50 rounded-lg relative group overflow-hidden text-lg text-white duration-200"
              >
                <span className="relative z-10">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-6 h-6 text-cyan-400 pr-5"
                  />
                  Konto
                </span>

                {/* Poświata za ikoną */}
                <div className="absolute left-[-180px] inset-0 bg-gradient-to-r from-zinc-800 via-cyan-800 to-zinc-900 w-full transition-all duration-300 opacity-0 group-hover:opacity-25 group-focus:opacity-25 z-0"></div>
              </a>
            </li>

            <li className="mr-8 ml-4">
              <a
                href=""
                className="block px-6 py-2 bg-transparent border border-transparent hover:border-zinc-600 hover:shadow-lg shadow-black/50 rounded-lg relative group overflow-hidden text-lg text-white duration-200"
              >
                <span className="relative z-10">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="w-6 h-6 text-violet-500 pr-5"
                  />
                  Ustawienia
                </span>

                {/* Poświata za ikoną */}
                <div className="absolute left-[-200px] inset-0 bg-gradient-to-r from-zinc-800 via-violet-700 to-zinc-900 w-full transition-all duration-300 opacity-0 group-hover:opacity-15 group-focus:opacity-15 z-0"></div>
              </a>
            </li>

            <hr className="text-zinc-700" />

            <div className="mr-8 ml-4 rounded-lg p-4 relative flex flex-col justify-center items-start shadow-lg shadow-black/50 bg-zinc-800">
              <div className="flex space-x-4 items-center justify-start">
                <div className="flex justify-center items-center relative">
                  <img
                    src={profileImg}
                    className="h-10 w-10 rounded-full object-cover"
                    alt="Profile"
                  />
                  <span className="absolute bottom-[-3px] right-[-3px] h-4 w-4 bg-green-400 rounded-full border-3 border-zinc-800"></span>
                </div>

                <div>
                  <span className="absolute right-4 top-4 bg-emerald-400 text-black rounded-md px-3 text-center text-[15px] font-bold">
                    Free
                  </span>
                  <h1>Mateusz Kujawa</h1>
                  <h2 className="text-xs text-zinc-400">
                    mat.kujawa2003@gmail.com
                  </h2>
                </div>
              </div>

              <button className="border rounded-md border-zinc-600 py-2 w-full text-[16px] mt-6 mx-auto cursor-pointer hover:bg-zinc-700/50">
                Ulepsz do wersji Pro
              </button>
            </div>

            <div className="flex absolute bottom-5 w-full pl-4 pr-8 space-x-6 items-center">
              <button className="w-full px-2 py-4 bg-zinc-800 hover:bg-zinc-700 hover:border-violet-500 hover:shadow-violet-800/50 hover:shadow-lg duration-300 text-white text-center text-bold rounded-lg cursor-pointer border-violet-500/25 border-2">
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="w-6 h-6 text-violet-500 pr-5"
                />
                Zaloguj się
              </button>
              <button className="w-full px-2 py-4 bg-zinc-800 hover:bg-zinc-700 hover:border-violet-500 hover:shadow-violet-800/50 hover:shadow-lg duration-300 text-white text-center text-bold rounded-lg cursor-pointer border-violet-500/25 border-2">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  className="w-6 h-6 text-violet-500 pr-5"
                />
                Zarejestruj się
              </button>
            </div>
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
