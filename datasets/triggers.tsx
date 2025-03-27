export type TriggerWarning = {
  id: string;
  text: string;
};

export const triggerWarnings: TriggerWarning[] = [
  { id: "language", text: "Strong language" },
  { id: "strobe", text: "Flashing imagery" },
  { id: "fear", text: "Disturbing imagery" },
  // { id: "violence", text: "Violence" },
  { id: "child-violence", text: "Violence towards children" },
  { id: "gender-based-violence", text: "Gender-based violence" },
  { id: "15-plus", text: "Suitable for ages 15 and up" },
];
