import React from "react";
import { icons } from "../../Styles/StyleSheet";
import PageLayout from "../_shared/pageLayout";
import { scenarios } from "../_shared/scenarios";
import translations from "../../translations";

const { victimIcon } = icons;

export function VictimScreen({ navigation }) {
  const scenarioArray = scenarios("victim");
  return (
    <PageLayout
      icon={victimIcon}
      items={scenarioArray}
      title={translations.t("v_title")}
      content={translations.t("v_text")}
      navigation={navigation}
    />
  );
}
