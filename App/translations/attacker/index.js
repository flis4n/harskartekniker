import { counterStrategiesEn, counterStrategiesSv } from "./counterStrategies";
import { scenariosEn, scenariosSv } from "./scenarios";

export const attackerEn = {
  a_title: "Accountability Strategies",
  a_text: `Click on the example that comes closest to how you have behaved to practice holding yourself accountable for using suppression techniques.\n\nWhat happened?`,
  ...scenariosEn,
  ...counterStrategiesEn,
};

export const attackerSv = {
  a_title: "Vad gör jag nu?",
  a_text: `Här får du råd och tips på vad du kan göra om du själv använt en härskarteknik. Välj den situation från listan som stämmer bäst.`,
  ...scenariosSv,
  ...counterStrategiesSv,
};
