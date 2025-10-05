// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './App/Navigators/bottomNavigator';
import RootStackNavigator from "./App/Navigators/rootStackNavigator";
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

function getLocale() {
  const [locale] = Localization.getLocales(); // v17 API
  // välj svensk UI om språk=sv, annars engelska
  return locale?.languageCode === 'sv' ? 'sv-SE' : 'en-US';
}

export default function App() {
  i18n.locale = getLocale();
  i18n.fallbacks = true;
  // i18n.translations = { 'sv-SE': {...}, 'en-US': {...} } // om du har översättningar

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
