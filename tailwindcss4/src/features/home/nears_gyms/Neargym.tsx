import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClockFour,
  faStar,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

interface Event {
  gym_name: string;
  distance: string;
  hours_open: string;
  address: string;
  rateing: string;
}

const nears_gyms: Event[] = [
  {
    gym_name: "B2 Fitness",
    hours_open: "7:00 - 23:00",
    distance: "12 km",
    address: "Piotrowice Słupecka 45a",
    rateing: "5.0",
  },
  {
    gym_name: "FitFun",
    hours_open: "8:00 - 23:00",
    distance: "10 km",
    address: "Aleja gówna 15",
    rateing: "4.4",
  },
  {
    gym_name: "Siłownia koszuty",
    hours_open: "10:00 - 23:00",
    distance: "3 km",
    address: "Tedeusza Śmierdziuszki 2",
    rateing: "3.1",
  },
];

const convertDistanceToNumber = (distance: string) => {
  return parseInt(distance.replace(" km", ""));
};

const Neargym: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: true, // Pozwala na płynne przeciąganie
    slides: { perView: 1.8, spacing: 35 },
    rubberband: true, // Blokuje "ciągnięcie" pustej przestrzeni
  });

  // Wyszukiwanie siłowni z najmniejszym dystansem
  const nearestGym = nears_gyms
    .map((gym) => ({
      ...gym,
      distanceInKm: convertDistanceToNumber(gym.distance),
    }))
    .sort((a, b) => a.distanceInKm - b.distanceInKm)[0];

  return (
    <div className="font-dmsans mx-auto">
      <h2 className="text-xl text-zinc-900 font-dmsans font-bold mb-4 px-8">
        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" /> Siłownie w
        twojej okolicy
      </h2>

    <p className="px-10 mb-12 font-semibold text-[16px] text-zinc-600">{nearestGym.address} - {nearestGym.gym_name}</p>

      <div
        ref={sliderRef}
        className="keen-slider pb-24 pl-8 overflow-visible !important"
      >
        {nears_gyms.map((event, index) => {
          return (
            <div
              key={index}
              className={`keen-slider__slide relative bg-white p-6 rounded-3xl shadow-lg min-w-[125px] h-[200px] overflow-visible !important z-10 hover:cursor-grab active:cursor-grabbing active:shadow-md active:shadow-indigo-500/20 `}
            >
              {/* nazwa siłowni */}
              <h3 className="text-lg font-bold z-50">{event.gym_name}</h3>

              <ul className="mt-2.5 -ml-1 text-zinc-600 space-y-1.5 text-sm">
                <li>
                  <FontAwesomeIcon
                    icon={faClockFour}
                    className="w-6 h-6 text-zinc-500 pr-2"
                  />
                  {event.hours_open}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="w-6 h-6 text-zinc-500 pr-2"
                  />
                  {event.distance}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-6 h-6 text-amber-400 pr-2"
                  />
                  {event.rateing}
                </li>
              </ul>
              <p className="text-zinc-700 text-sm text-wrap absolute bottom-5 left-4">
                <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
                {event.address}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Neargym;
