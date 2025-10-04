import translations from "../../translations";
import { getData, getKeys } from "./filters";

export const scenarios = (source) => {
  const keys = getKeys(source);
  let index = 0;
  const list = keys.map((scenario) => {
    const data = getData(scenario.toLowerCase());
    const obj = {
      id: `${index}-${scenario}`,
      value: translations.t(String(scenario)),
      counterStrategy: data.navigation,
      color: data.color,
    };
    index += 1;
    return obj;
  });
  return list;
};
