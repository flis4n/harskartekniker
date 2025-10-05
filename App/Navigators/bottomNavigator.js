import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "react-native-elements";
import {
  icons,
  LABEL_STYLE,
  ACTIVE_COLOR,
  ICON_COLOR,
  BACKGROUND_COLOR,
} from "../Styles/StyleSheet";

import HomeScreen from "../Screens/HomeScreen";
import VictimStackNavigator from "../Screens/VictimScreen/victimStackNavigator";
import ObserverStackNavigator from "../Screens/ObserverScreen/observerStackNavigator";
import AttackerStackNavigator from "../Screens/AttackerScreen/attackerStackNavigator";
import TechniquesStackNavigator from "../Screens/TechniquesScreen/stackNavigator";
import translations from "../translations";

const { attackerIcon, victimIcon, homeIcon, observerIcon, techniquesIcon } = icons;

const tabs = [
  { name: "Home",       component: HomeScreen,               label: "b_home",        icon: homeIcon },
  { name: "Victim",     component: VictimStackNavigator,     label: "b_victim",      icon: victimIcon },
  { name: "Observer",   component: ObserverStackNavigator,   label: "b_observer",    icon: observerIcon },
  { name: "Attacker",   component: AttackerStackNavigator,   label: "b_attacker",    icon: attackerIcon },
  { name: "Techniques", component: TechniquesStackNavigator, label: "b_information", icon: techniquesIcon },
];

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: ICON_COLOR,
        tabBarStyle: { backgroundColor: BACKGROUND_COLOR },
      }}
    >
      {tabs.map(({ name, component, label, icon }) => (
        <Tab.Screen
          key={`b_${name}`}
          name={name}
          component={component}
          options={{
            // Dölj bara hela tab-baren när Home är aktiv
            ...(name === "Home" ? { tabBarStyle: { display: "none" } } : {}),

            // Visa etikett bara när fliken är fokuserad (gäller alla, inkl. Home –
            // men när Home är aktiv är baren ändå gömd)
            tabBarLabel: ({ focused }) =>
              focused ? <Text style={LABEL_STYLE}>{translations.t(label)}</Text> : null,

            // Viktigt: ikonen för Home göms INTE – då syns den på sidor där baren visas
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={icon}
                size={26}
                color={focused ? ACTIVE_COLOR : ICON_COLOR}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
