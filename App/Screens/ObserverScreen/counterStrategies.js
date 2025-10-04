import React from "react";
import translations from "../../translations";
import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function MakingInvisibleScreen() {
  return (
    <CounterStrategyLayout
      id="makingInvisible"
      title={translations.t("o_makingInvisibleTitle")}
      subTitle={translations.t("o_makingInvisibleSubTitle")}
      content={translations.t("o_makingInvisibleContent")}
    />
  );
}

export function RidiculeScreen() {
  return (
    <CounterStrategyLayout
      id="ridicule"
      title={translations.t("o_ridiculeTitle")}
      subTitle={translations.t("o_ridiculeSubTitle")}
      content={translations.t("o_ridiculeContent")}
    />
  );
}

export function WithholdInformationScreen() {
  return (
    <CounterStrategyLayout
      id="withholdInformation"
      title={translations.t("o_withholdInformationTitle")}
      subTitle={translations.t("o_withholdInformationSubTitle")}
      content={translations.t("o_withholdInformationContent")}
    />
  );
}

export function DoubleBindScreen() {
  return (
    <CounterStrategyLayout
      id="doubleBind"
      title={translations.t("o_doubleBindTitle")}
      subTitle={translations.t("o_doubleBindSubTitle")}
      content={translations.t("o_doubleBindContent")}
    />
  );
}

export function HeapBlameScreen() {
  return (
    <CounterStrategyLayout
      id="heapBlame"
      title={translations.t("o_heapBlameTitle")}
      subTitle={translations.t("o_heapBlameSubTitle")}
      content={translations.t("o_heapBlameContent")}
    />
  );
}

export function ObjectifyingScreen() {
  return (
    <CounterStrategyLayout
      id="objectifying"
      title={translations.t("o_objectifyingTitle")}
      subTitle={translations.t("o_objectifyingSubTitle")}
      content={translations.t("o_objectifyingContent")}
    />
  );
}

export function ThreatOfForceScreen() {
  return (
    <CounterStrategyLayout
      id="threatOfForce"
      title={translations.t("o_threatOfForceTitle")}
      subTitle={translations.t("o_threatOfForceSubTitle")}
      content={translations.t("o_threatOfForceContent")}
    />
  );
}
