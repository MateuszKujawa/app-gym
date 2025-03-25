import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dane aktywności
const dailyData = [
  { name: "00:00", value: 5 },
  { name: "06:00", value: 12 },
  { name: "12:00", value: 30 },
  { name: "18:00", value: 20 },
  { name: "23:59", value: 10 },
];

const weeklyData = [
  { name: "Pon", value: 10 },
  { name: "Wt", value: 15 },
  { name: "Śr", value: 7 },
  { name: "Czw", value: 20 },
  { name: "Pt", value: 12 },
  { name: "Sob", value: 25 },
  { name: "Nd", value: 18 },
];

const monthlyData = [
  { name: "1", value: 20 },
  { name: "5", value: 30 },
  { name: "10", value: 50 },
  { name: "15", value: 40 },
  { name: "20", value: 60 },
  { name: "25", value: 70 },
  { name: "30", value: 90 },
];

const yearlyData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 0 },
  { name: "Mar", value: 0 },
  { name: "Apr", value: 30 },
  { name: "May", value: 50 },
  { name: "Jun", value: 100 },
  { name: "Jul", value: 120 },
  { name: "Aug", value: 130 },
  { name: "Sep", value: 140 },
  { name: "Oct", value: 90 },
  { name: "Nov", value: 110 },
  { name: "Dec", value: 280 },
];

const Activities: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Tygodniowo");
  const [chartData, setChartData] = useState(weeklyData);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    switch (option) {
      case "Dziennie":
        setChartData(dailyData);
        break;
      case "Tygodniowo":
        setChartData(weeklyData);
        break;
      case "Miesięcznie":
        setChartData(monthlyData);
        break;
      case "Rocznie":
        setChartData(yearlyData);
        break;
      default:
        setChartData(weeklyData);
    }
  };

  return (
    <div className="font-dmsans w-full p-8">
      {/* Nagłówek i dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-gray-800 font-bold flex items-center pl-2">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="w-6 h-6 pr-2"
          />
          Aktywności
        </h2>
        <div className="relative z-50">
          <button
            className={`px-5 py-2 rounded-full flex items-center cursor-pointer font-semibold text-sm w-42 justify-center transition-all
                ${
                  isOpen
                    ? "bg-white border-[#0070F0] shadow-md"
                    : "bg-[#EBF4FF] border-transparent"
                } 
                hover:bg-white hover:border-[#0070F0] text-[#0070F0] border duration-200`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg w-42 overflow-hidden text-[15px] text-gray-800 border border-gray-200 animate-fade-in">
              {["Dziennie", "Tygodniowo", "Miesięcznie", "Rocznie"].map(
                (option) => (
                  <li
                    key={option}
                    className="px-5 py-2.5 hover:bg-[#e3edf8] cursor-pointer transition-all duration-200"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Wykres aktywności */}
      <div className="w-full max-w-3xl mx-auto bg-[#fff] shadow-lg shadow-black/25 rounded-2xl p-6 mt-12">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">
          {selectedOption} - Aktywność
        </h3>
        <ResponsiveContainer width="100%" height={250}>
  <AreaChart data={chartData}>
    <defs>
      <linearGradient id="gradientGray" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#18181b" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>

    {/* Ustawienie osi X z domain, aby wymusić wyświetlenie wszystkich danych */}
    <XAxis
      dataKey="name"
      tick={{ fill: "#18181b" }}
      domain={['dataMin', 'dataMax']}  // Ustawienie zakresu na min i max danych
    />

    {/* Usunięcie osi Y */}
    <YAxis hide={true} />

    <Tooltip
      contentStyle={{
        borderRadius: "10px",
        border: "1px solid #18181b",
        width: "200px",
        background: "#1b1b1b",
        color: "white",
      }}
      itemStyle={{
        color: "#fff",
      }}
      labelStyle={{
        color: "#fff",
      }}
      formatter={(value) => {
        return [
          <p>Punkty aktywności: <span style={{ color: "#18c9f5" }}>{value}</span></p>
        ];  
      }}
    />

    <Area
      type="monotone"
      dataKey="value"
      stroke="#4a4a4a"
      fill="url(#gradientGray)"
      strokeWidth={3}
      activeDot={{ r: 8 }}
    />
  </AreaChart>
</ResponsiveContainer>

      </div>
    </div>
  );
};

export default Activities;
