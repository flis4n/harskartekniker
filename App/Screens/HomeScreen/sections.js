import React from "react";
import translations from "../../translations";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { cardStyles } from "../../Styles/StyleSheet";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const ICON_SIZE = 25;

export const sections = [
  {
    id: 1,
    icon: "hand-back-left",
    title: "victimTitle",
    path: "Victim",
  },
  {
    id: 2,
    icon: "bell",
    title: "attackerTitle",
    path: "Attacker",
  },
  {
    id: 3,
    icon: "eye",
    title: "observerTitle",
    path: "Observer",
  },
  {
    id: 4,
    icon: "information-variant",
    title: "informationTitle",
    path: "Techniques",
  },
];

export const SectionsList = ({ navigation }) => {
  return sections.map((section) => {
    const { id, path, title, icon } = section;
    return (
      <Card key={id} containerStyle={cardStyles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(path);
          }}
        >
          <MaterialCommunityIcons
            name={icon}
            size={ICON_SIZE}
            style={cardStyles.icon}
          />
          <Text style={cardStyles.title}>{translations.t(title)}</Text>
        </TouchableOpacity>
      </Card>
    );
  });
};
