import React from "react";
import { icons } from "../../Styles/StyleSheet";
import PageLayout from "../_shared/pageLayout";
import { scenarios } from "../_shared/scenarios";
import translations from "../../translations";

const { observerIcon } = icons;

export function ObserverScreen({ navigation }) {
  const scenarioArray = scenarios("observer");
  return (
    <PageLayout
      icon={observerIcon}
      items={scenarioArray}
      title={translations.t("o_title")}
      content={translations.t("o_text")}
      navigation={navigation}
    />
  );
}
