import React, { useEffect } from "react";
import {
  useIsFocused,
  getFocusedRouteNameFromRoute,
  StackActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { VictimScreen } from "./";
import {
  MakingInvisibleScreen,
  RidiculeScreen,
  WithholdInformationScreen,
  DoubleBindScreen,
  HeapBlameScreen,
  ObjectifyingScreen,
  ThreatOfForceScreen,
} from "./counterStrategies";

const screens = [
  { name: "MakingInvisible", screen: MakingInvisibleScreen },
  { name: "Ridicule", screen: RidiculeScreen },
  { name: "WithholdInformation", screen: WithholdInformationScreen },
  { name: "DoubleBind", screen: DoubleBindScreen },
  { name: "HeapBlame", screen: HeapBlameScreen },
  { name: "Objectifying", screen: ObjectifyingScreen },
  { name: "ThreatOfForce", screen: ThreatOfForceScreen },
];

const Stack = createStackNavigator();

export default function StackNavigator({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route);
  const isFocused = useIsFocused();

  useEffect(() => {
    const showInitialRoute =
      isFocused && routeName !== undefined && routeName !== "Victim";
    showInitialRoute && navigation.dispatch(StackActions.popToTop("Victim"));
  }, [isFocused]);

  return (
    <Stack.Navigator initialRouteName="Victim">
      <Stack.Screen
        key={`v_initial`}
        name="Victim"
        component={VictimScreen}
        options={{ headerShown: false }}
      />
      {screens.map((screen) => {
        return (
          <Stack.Screen
            key={`v_${screen.name}`}
            name={screen.name}
            component={screen.screen}
            options={{
              title: null,
              headerBackTitleVisible: false,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}
