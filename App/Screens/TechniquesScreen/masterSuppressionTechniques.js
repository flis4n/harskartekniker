import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-elements";
import { masterSupressionTechniquesEn } from "../../translations/techniques/techniques";
import { getData } from "../_shared/filters";

import {
  screenStyles,
  textStyles,
  techniqueCards,
} from "../../Styles/StyleSheet";

export const techniques = () => {
  const keys = Object.keys(masterSupressionTechniquesEn);
  let index = 0;
  const list = keys.map((technique) => {
    const data = getData(technique.toLowerCase());
    const obj = {
      id: `${index}-${technique}`,
      illustration: data.illustration,
      name: data.suppressionTechnique,
      masterTechnique: data.navigation,
    };
    index += 1;
    return obj;
  });
  return list;
};

export const TechniquesList = ({ navigation }) => {
  return techniques().map((technique) => {
    const { id, illustration, name, masterTechnique } = technique;
    const { card, title, image } = techniqueCards;
    return (
      <Card key={id} containerStyle={card}>
        <TouchableOpacity
          key={`${id}`}
          onPress={() => {
            navigation.navigate(masterTechnique);
          }}
        >
          <Card.Image style={image} source={illustration} />
          <Text style={title}>{name}</Text>
        </TouchableOpacity>
      </Card>
    );
  });
};
