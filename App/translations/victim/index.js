import { counterStrategiesEn, counterStrategiesSv } from "./counterStrategies";
import { scenariosEn, scenariosSv } from "./scenarios";

export const victimEn = {
  v_title: "Counter Strategies",
  v_text: `Click on the example that best describes your situation and practice countering suppression techniques.\n\nWhat happened?`,
  ...scenariosEn,
  ...counterStrategiesEn,
};

export const victimSv = {
  v_title: "Motstrategier",
  v_text: `Här får du tips på vad du kan göra om du har blivit utsatt för en härskarteknik. Välj den situation från listan som stämmer bäst in på det du varit med om.\n\nVad hände?`,
  ...scenariosSv,
  ...counterStrategiesSv,
};
