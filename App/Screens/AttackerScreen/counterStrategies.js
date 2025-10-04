import React from "react";
import translations from "../../translations";
import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function MakingInvisibleScreen() {
  return (
    <CounterStrategyLayout
      id="makingInvisible"
      title={translations.t("a_makingInvisibleTitle")}
      subTitle={translations.t("a_makingInvisibleSubTitle")}
      content={translations.t("a_makingInvisibleContent")}
    />
  );
}

export function RidiculeScreen() {
  return (
    <CounterStrategyLayout
      id="ridicule"
      title={translations.t("a_ridiculeTitle")}
      subTitle={translations.t("a_ridiculeSubTitle")}
      content={translations.t("a_ridiculeContent")}
    />
  );
}

export function WithholdInformationScreen() {
  return (
    <CounterStrategyLayout
      id="withholdInformation"
      title={translations.t("a_withholdInformationTitle")}
      subTitle={translations.t("a_withholdInformationSubTitle")}
      content={translations.t("a_withholdInformationContent")}
    />
  );
}

export function DoubleBindScreen() {
  return (
    <CounterStrategyLayout
      id="doubleBind"
      title={translations.t("a_doubleBindTitle")}
      subTitle={translations.t("a_doubleBindSubTitle")}
      content={translations.t("a_doubleBindContent")}
    />
  );
}

export function HeapBlameScreen() {
  return (
    <CounterStrategyLayout
      id="heapBlame"
      title={translations.t("a_heapBlameTitle")}
      subTitle={translations.t("a_heapBlameSubTitle")}
      content={translations.t("a_heapBlameContent")}
    />
  );
}

export function ObjectifyingScreen() {
  return (
    <CounterStrategyLayout
      id="objectifying"
      title={translations.t("a_objectifyingTitle")}
      subTitle={translations.t("a_objectifyingSubTitle")}
      content={translations.t("a_objectifyingContent")}
    />
  );
}

export function ThreatOfForceScreen() {
  return (
    <CounterStrategyLayout
      id="threatOfForce"
      title={translations.t("a_threatOfForceTitle")}
      subTitle={translations.t("a_threatOfForceSubTitle")}
      content={translations.t("a_threatOfForceContent")}
    />
  );
}
