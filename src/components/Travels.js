import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
  {
    destination:"Youssef",
    country: "Planète Alpha",
    photo:
      "https://i.skyrock.net/4200/69794200/pics/2803846991_small_1.jpg",
    distance:"30 km de la planete Terre"
  },
  {
    destination:"Solene",
    country: "Planète Beta",
    photo:
      "https://i.skyrock.net/4200/69794200/pics/2803846991_small_1.jpg",
    distance:"400000 km de la planete Terre"
  },
  {
    destination:"Andry",
    country: "Planète gamma",
    photo:
      "https://i.skyrock.net/4200/69794200/pics/2803846991_small_1.jpg",
    distance:"500000 km de la planete Terre"
  },
  {
    destination:"Vulcain",
    country: "Planète Zerda",
    photo:
      "https://i.skyrock.net/4200/69794200/pics/2803846991_small_1.jpg",
    distance:"600000 km de la planete Terre"
  },
  {
    destination:"Vulcain",
    country: "Planète ypsylone",
    photo:
      "https://i.skyrock.net/4200/69794200/pics/2803846991_small_1.jpg",
    distance:"700000 km de la planete Terre"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
))}
  </div>
);

export default Travels;