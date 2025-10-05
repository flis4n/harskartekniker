import React, { useEffect, useRef } from "react";
import {
  useIsFocused,
  getFocusedRouteNameFromRoute,
  StackActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TechniquesScreen } from "./";
import {
  MakingInvisibleScreen,
  RidiculeScreen,
  WithholdInformationScreen,
  DoubleBindScreen,
  HeapBlameScreen,
  ObjectifyingScreen,
  ThreatOfForceScreen,
} from "./explanations";

const screens = [
  { name: "MakingInvisible", screen: MakingInvisibleScreen },
  { name: "Ridicule", screen: RidiculeScreen },
  { name: "WithholdInformation", screen: WithholdInformationScreen },
  { name: "DoubleBind", screen: DoubleBindScreen },
  { name: "HeapBlame", screen: HeapBlameScreen },
  { name: "Objectifying", screen: ObjectifyingScreen },
  { name: "ThreatOfForce", screen: ThreatOfForceScreen },
];

const Stack = createNativeStackNavigator();

export default function StackNavigator({ navigation, route }) {
  const isFocused = useIsFocused();
  const stackRef = useRef(null);

  useEffect(() => {
      if (!isFocused) return;
      const focused = getFocusedRouteNameFromRoute(route) ?? "TechniquesMain";
      if (focused !== "TechniquesMain") {
        stackRef.current?.dispatch(StackActions.popToTop());
      }
  }, [isFocused, route]);
  return (
       <Stack.Navigator
         id="TechniquesStack" 
         ref={stackRef}     
         initialRouteName="TechniquesMain"
         screenOptions={{ headerShown: false }} 
       >
         <Stack.Screen name="TechniquesMain" component={TechniquesScreen} />
         {screens.map(({ name, screen }) => (
           <Stack.Screen key={name} name={name} component={screen} />
         ))}
       </Stack.Navigator>
     ); 

}
