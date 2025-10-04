import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./App/Navigators/bottomNavigator";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

const getLocale = () => {
  const currentLocale = Localization.locale;
  const appLocale = currentLocale.includes("sv") ? "sv-SV" : "en-US";
  return appLocale;
};

export default App = () => {
  i18n.locale = getLocale();
  i18n.fallbacks = true;

  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};
