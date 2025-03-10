import { Speaker, speakers } from "./speakers";

export type Panel = {
  name: string;
  desc: string;
  timeStart?: string;
  timeEnd?: string;
  speakers: { speaker: Speaker; timeStart?: string; timeEnd?: string }[];
};

export const panels: Panel[] = [
  {
    name: "Perspectives",
    desc: "Our point of view is never a carbon copy of another person's. We are each individual and therefore we each bring a unique perspective. By bringing people together, we are able to broaden our own horizons and satiate our need to expand our knowledge.",
    speakers: [
      { speaker: speakers[6] },
      { speaker: speakers[0] },
      { speaker: speakers[7] },
    ],
  },
  {
    name: "Patterns",
    desc: "There is an intrinsic need to organise our understanding of culture, politics, history and society. Many before us have identified sequences and found relatability from a vast expanse of knowledge.",
    speakers: [
      { speaker: speakers[5] },
      { speaker: speakers[9] },
      { speaker: speakers[2] },
    ],
  },
  {
    name: "Pathways",
    desc: "We have come a long way and we are following in the footsteps of others. Interdisciplinarity is a natural byproduct of academic research, especially research that is not confined to strict disciplinary borders. Yet, there is one question we must always consider: where will the path take us next?",
    speakers: [
      { speaker: speakers[3] },
      { speaker: speakers[1] },
      { speaker: speakers[4] },
    ],
  },
];
