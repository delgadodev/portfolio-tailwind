import rickandmorty from "./assets/rickandmorty.png";
import todoapp from "./assets/todoapp.png";
import weatherapp from "./assets/weatherapp.png";
import adviceapp from "./assets/adviceapp.png";
import presupuest from "./assets/adminpresup.png"

import pacientesveterinaria from "./assets/pacientesveterinaria.png";
export const proyectos = [
  {
    id: "1",
    name: "Administrador de Pacientes Veterinaria",
    description:
      "Administrador de Pacientes is a web application that allows you to create, edit and delete patients",
    image: pacientesveterinaria,
    url: "https://administrador-pacientes-veterinaria.vercel.app/",
    stack: ["React", "TailwindCSS"],
  },
  {
    id: "2",
    name: "Control Presupuesto",
    description:
      "Control Presupuesto is a web application that allows you to create, edit and delete expenses",
    image: presupuest,
    url: "https://administrador-gastos-vert.vercel.app/",
    stack: ["React", "TailwindCSS", "LS"],
  },

  {
    id: "3",
    name: "Rick and Morty",
    description:
      "Rick and Morty is a web application that allows you to search for characters from the series",
    image: rickandmorty,
    url: "https://delightful-fudge-72a817.netlify.app",
    stack: ["React", "TailwindCSS"],
  },
  {
    id: "4",
    name: "Todo App",
    description:
      "Todo App is a web application that allows you to create, edit and delete tasks",
    image: todoapp,
    url: "https://bespoke-cactus-583fe2.netlify.app",
    stack: ["React", "TailwindCSS"],
  },
  {
    id: "5",
    name: "Weather App",
    description:
      "Weather App is a web application that allows you to search for the weather of a city",
    image: weatherapp,
    url: "https://weather-e39ijrnt3-xhungen.vercel.app",
    stack: ["React", "TailwindCSS"],
  },
  {
    id: "6",

    name: "Advice App",
    description:
      "Advice App is a web application that allows you to search for advice",
    image: adviceapp,
    url: "https://kaleidoscopic-frangipane-9b3514.netlify.app",
    stack: ["React", "TailwindCSS"],
  },
];
