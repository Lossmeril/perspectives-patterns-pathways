export type Speaker = {
  id: string;
  name: string;
  role: string;
  color: string;
};

export const speakers: Speaker[] = [
  {
    id: "michal",
    name: "Michal Špitálský",
    role: "Filmmaker and designer",
    color: "grass",
  },
  { id: "gareth", name: "Gareth Matthews", role: "Filmmaker", color: "red" },
  {
    id: "sarria",
    name: "Sarria Nguyen",
    role: "Graphic designer",
    color: "blue",
  },
  { id: "chloe", name: "Chloe", role: "", color: "orange" },
  { id: "taylor", name: "Taylor", role: "", color: "yellow" },
];
