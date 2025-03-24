import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Obrazy dla kategorii (możesz dodać tutaj wszystkie obrazy, które będą używane w aplikacji)
import fitnesImage from "../../../assets/upcoming/fitness.svg";
import foodImage from "../../../assets/upcoming/food.svg";
import wokroutImage from "../../../assets/upcoming/workout.svg";
import yogaImage from "../../../assets/upcoming/yoga.webp";

// Zdefiniowanie typu dla wydarzenia
interface Event {
  title: string;
  category: string;
  date: string;
  address: string;
  backgroundColor: string;
}

// Zdefiniowanie danych w formacie JSON
const upcomingEvents: Event[] = [
  {
    title: "Fitness",
    category: "FITNESS",
    date: "Today at 2:45 PM",
    address: "Aleja Pokoju",
    backgroundColor: "bg-violet-50", // Kolor tła karty
  },
  {
    title: "Gym Wokrout",
    category: "WOKROUT",
    date: "Tomorrow at 3:00 PM",
    address: "Warszawska 25",
    backgroundColor: "bg-blue-50", // Kolor tła karty
  },
  {
    title: "Yoga",
    category: "YOGA",
    date: "Next Week at 4:15 PM",
    address: "Krakowska 12",
    backgroundColor: "bg-green-50", // Kolor tła karty
  },
  {
    title: "Food",
    category: "FOOD",
    date: "Next Month at 10:30 AM",
    address: "Pogodne 8",
    backgroundColor: "bg-red-50", // Kolor tła karty
  },
  {
    title: "Workout 2",
    category: "FITNESS",
    date: "Today at 6:00 PM",
    address: "Lechitów 33",
    backgroundColor: "bg-yellow-50", // Kolor tła karty
  },
];

// Mapa kategorii do obrazków
const categoryImages: Record<string, string> = {
  FITNESS: fitnesImage,
  FOOD: foodImage,
  YOGA: yogaImage,
  WOKROUT: wokroutImage,
  
};

const Upcoming: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 20 },
  });

  return (
    <div className="font-dmsans mx-auto">
      <h2 className="text-xl text-zinc-900 font-dmsans font-bold mb-6 px-8">Nadchodzące</h2>
      <div ref={sliderRef} className="keen-slider pb-24 pl-8 overflow-visible !important">
        {upcomingEvents.map((event, index) => {
          // Dynamically select image based on category
          const eventImage = categoryImages[event.category] || fitnesImage; // Fallback to a default image if the category is not found
          
          return (
            <div
              key={index}
              className={`keen-slider__slide relative ${event.backgroundColor} p-6 rounded-3xl shadow-lg min-w-[150px] h-[200px] overflow-visible !important z-10 hover:cursor-grab active:cursor-grabbing`}
            >
              {/* Tytuł */}
              <h3 className="text-lg font-bold z-50">{event.title}</h3>

              {/* Kategoria */}
              <span className="absolute top-5 right-6 text-sm font-semibold text-indigo-600 bg-white px-4 py-1.5 rounded-full z-50">
                {event.category}
              </span>

              {/* Data */}
              <p className="text-zinc-900 font-medium pt-1 z-50">{event.date}</p>

              {/* Adres */}
              <p className="text-zinc-600 absolute bottom-5 left-5 z-50"> 
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-6 h-6"
                />
                {event.address}
              </p>

              {/* Obrazek 3D (dynamicznie na podstawie kategorii) */}
              <img
                src={eventImage}  // Wywołanie obrazu na podstawie kategorii
                className="absolute -bottom-10 right-5 z-40 !important max-w-[200px]"
                alt={event.category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
