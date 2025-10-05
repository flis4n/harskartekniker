
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./bottomNavigator";
import PrivacyPolicyScreen from '../Screens/HomeScreen/PrivacyPolicyScreen';

const Stack = createNativeStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id="RootStack">
      <Stack.Screen name="Tabs" component={BottomNavigator} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
}


