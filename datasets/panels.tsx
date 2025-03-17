import { keynoteSpeaker, Speaker, speakers } from "./speakers";

export type Place = {
  name: string;
  address: string;
};

export const places: Place[] = [
  {
    name: "Ellison building B 003, Northumbria University",
    address: "https://maps.app.goo.gl/n3S6WbajZCDCDLmMA",
  },
  {
    name: "Sandyford 405, Northumbria University",
    address: "https://maps.app.goo.gl/EMBseZnJWZt3mucc7",
  },
];

export type Panel = {
  name: string;
  desc: string;
  timeStart?: string;
  timeEnd?: string;
  place?: Place;
  speakers: { speaker: Speaker; timeStart?: string; timeEnd?: string }[];
};

export const panels: Panel[] = [
  {
    name: "Keynote paper",
    desc: "Keynote speaker will be announced soon.",
    speakers: [{ speaker: keynoteSpeaker }],
    place: places[0],
    timeStart: "10:00 AM",
    timeEnd: "11:00 AM",
  },
  {
    name: "Perspectives",
    desc: "Our point of view is never a carbon copy of another person's. We are each individual and therefore we each bring a unique perspective. By bringing people together, we are able to broaden our own horizons and satiate our need to expand our knowledge.",
    speakers: [
      { speaker: speakers[7] },
      { speaker: speakers[1] },
      { speaker: speakers[8] },
      { speaker: speakers[0] },
    ],
    place: places[1],
    timeStart: "11:30 AM",
  },
  {
    name: "Patterns",
    desc: "There is an intrinsic need to organise our understanding of culture, politics, history and society. Many before us have identified sequences and found relatability from a vast expanse of knowledge.",
    speakers: [
      { speaker: speakers[6] },
      { speaker: speakers[10] },
      { speaker: speakers[3] },
      { speaker: speakers[9] },
    ],
    place: places[1],
  },
  {
    name: "Pathways",
    desc: "We have come a long way and we are following in the footsteps of others. Interdisciplinarity is a natural byproduct of academic research, especially research that is not confined to strict disciplinary borders. Yet, there is one question we must always consider: where will the path take us next?",
    speakers: [
      { speaker: speakers[4] },
      { speaker: speakers[2] },
      { speaker: speakers[5] },
    ],
    place: places[1],
  },
];
