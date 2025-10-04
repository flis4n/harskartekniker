import { counterStrategiesEn, counterStrategiesSv } from "./counterStrategies";
import { scenariosEn, scenariosSv } from "./scenarios";

export const observerEn = {
  o_title: "Support Strategies",
  o_text: `Click on the example that comes closest to what you have witnessed and practice intervening against suppression techniques.\n\nWhat happened?`,
  ...scenariosEn,
  ...counterStrategiesEn,
};

export const observerSv = {
  o_title: "Bekräftartekniker",
  o_text: `Har du sett någon bli utsatt för en härskarteknik? Välj passande situation från listan för att få tips på hur du kan ge personen stöd.\n\nVad hände?`,
  ...scenariosSv,
  ...counterStrategiesSv,
};
