import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  icons,
  FONTS,
  LABEL_STYLE,
  ACTIVE_COLOR,
  ICON_COLOR,
  BACKGROUND_COLOR,
} from "../Styles/StyleSheet";
import { Text } from "react-native-elements";

import HomeScreen from "../Screens/HomeScreen";
import VictimStackNavigator from "../Screens/VictimScreen/victimStackNavigator";
import ObserverStackNavigator from "../Screens/ObserverScreen/observerStackNavigator";
import AttackerStackNavigator from "../Screens/AttackerScreen/attackerStackNavigator";
import TechniquesStackNavigator from "../Screens/TechniquesScreen/stackNavigator";

import translations from "../translations";

import RootNavigator from "./rootStackNavigator";

const {
  attackerIcon,
  victimIcon,
  homeIcon,
  observerIcon,
  techniquesIcon,
} = icons;

const tabs = [
  {
    name: "Home",
    component: HomeScreen,
    label: "b_home",
    icon: homeIcon,
  },
  {
    name: "Victim",
    component: VictimStackNavigator,
    label: "b_victim",
    icon: victimIcon,
  },
  {
    name: "Observer",
    component: ObserverStackNavigator,
    label: "b_observer",
    icon: observerIcon,
  },
  {
    name: "Attacker",
    component: AttackerStackNavigator,
    label: "b_attacker",
    icon: attackerIcon,
  },
  {
    name: "Techniques",
    component: TechniquesStackNavigator,
    label: "b_information",
    icon: techniquesIcon,
  },
];

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: BACKGROUND_COLOR }}
      tabBarOptions={{
        activeTintColor: ACTIVE_COLOR,
        inactiveTintColor: BACKGROUND_COLOR,
        tabStyle: {
          flexGrow: 1,
        },
      }}
    >
      {tabs.map((tab) => {
        return (
          <Tab.Screen
            key={`b_${tab.name}`}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarVisible: tab.name === "Home" ? false : true,
              tabBarLabel: ({ focused = false }) =>
                focused ? (
                  <Text style={{ ...LABEL_STYLE }}>
                    {translations.t(tab.label)}
                  </Text>
                ) : null,
              tabBarIcon: ({ focused = false }) => (
                <MaterialCommunityIcons
                  name={tab.icon}
                  color={focused ? ACTIVE_COLOR : ICON_COLOR}
                  size={26}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
