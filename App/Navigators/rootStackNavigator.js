import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";

import AttackerStackNavigator from "../Screens/AttackerScreen/attackerStackNavigator";
import VictimStackNavigator from "../Screens/VictimScreen/victimStackNavigator";
import ObserverStackNavigator from "../Screens/ObserverScreen/observerStackNavigator";
import TechniquesStackNavigator from "../Screens/TechniquesScreen/stackNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Victim" component={VictimStackNavigator} />
      <Stack.Screen name="Observer" component={ObserverStackNavigator} />
      <Stack.Screen name="Attacker" component={AttackerStackNavigator} />
      <Stack.Screen name="Techniques" component={TechniquesStackNavigator} />
    </Stack.Navigator>
  );
}
