import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { victimEn, victimSv } from "./victim";
import { homeEn, homeSv } from "./home";
import { observerEn, observerSv } from "./observer";
import { attackerEn, attackerSv } from "./attacker";
import { techniquesEn, techniquesSv } from "./techniques";
import { navigatorsEn, navigatorsSv } from "./navigators";

i18n.translations = {
  en: {
    ...homeEn,
    ...victimEn,
    ...observerEn,
    ...attackerEn,
    ...techniquesEn,
    ...navigatorsEn,
  },
  sv: {
    ...homeSv,
    ...victimSv,
    ...observerSv,
    ...attackerSv,
    ...techniquesSv,
    ...navigatorsSv,
  },
};

export default i18n;
