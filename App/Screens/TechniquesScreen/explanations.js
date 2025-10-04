import React from "react";
import translations from "../../translations";
import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function MakingInvisibleScreen() {
  return (
    <CounterStrategyLayout
      id="makingInvisible"
      title={translations.t("t_makingInvisibleTitle")}
      content={translations.t("t_makingInvisibleContent")}
    />
  );
}

export function RidiculeScreen() {
  return (
    <CounterStrategyLayout
      id="ridicule"
      title={translations.t("t_ridiculeTitle")}
      content={translations.t("t_ridiculeContent")}
    />
  );
}

export function WithholdInformationScreen() {
  return (
    <CounterStrategyLayout
      id="withholdInformation"
      title={translations.t("t_withholdInformationTitle")}
      content={translations.t("t_withholdInformationContent")}
    />
  );
}

export function DoubleBindScreen() {
  return (
    <CounterStrategyLayout
      id="doubleBind"
      title={translations.t("t_doubleBindTitle")}
      content={translations.t("t_doubleBindContent")}
    />
  );
}

export function HeapBlameScreen() {
  return (
    <CounterStrategyLayout
      id="heapBlame"
      title={translations.t("t_heapBlameTitle")}
      content={translations.t("t_heapBlameContent")}
    />
  );
}

export function ObjectifyingScreen() {
  return (
    <CounterStrategyLayout
      id="objectifying"
      title={translations.t("t_objectifyingTitle")}
      content={translations.t("t_objectifyingContent")}
    />
  );
}

export function ThreatOfForceScreen() {
  return (
    <CounterStrategyLayout
      id="threatOfForce"
      title={translations.t("t_threatOfForceTitle")}
      content={translations.t("t_threatOfForceContent")}
    />
  );
}
