import {
  masterSupressionTechniquesEn,
  masterSupressionTechniquesSv,
} from "./techniques";
import { explanationsEn, explanationsSv } from "./explanations";

export const techniquesEn = {
  t_title: "What are supression techniques?",
  t_content: `Suppression techniques are methods used to exercise negative power over others. They are interactions in which personal boundaries are crossed to create power imbalances. Some incidents are so subtle that they are hard to recognize and leave us seeking fault with ourselves, while others are so brazen that they leave us too stunned to respond.\n\nThe app focuses on seven suppression techniques:`,
  t_source: `Illustration of {{technique}}. Image by Milla Lepistö.`,
  ...masterSupressionTechniquesEn,
  ...explanationsEn,
};

export const techniquesSv = {
  t_title: "Vad är härskartekniker?",
  t_content: `Härskartekniker är olika maktprocesser som används för att utöva negativ makt över andra. Idag talas det ofta om sju härskartekniker:`,
  t_source: `Illustration av {{technique}}. Bild av Milla Lepistö.`,
  ...masterSupressionTechniquesSv,
  ...explanationsSv,
};
