import React from "react";
import { Text, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { cardStyles, assetStyles, textStyles } from "../../Styles/StyleSheet";
import translations from "../../translations";
import { useNavigation } from "@react-navigation/native";

const { headerText } = textStyles;


export const MiunHeader = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("PrivacyPolicy")}>
      <Card containerStyle={cardStyles.header}>
        <Text style={headerText}>{translations.t("miunHeaderText")}</Text>
      </Card>
    </Pressable>
  );
};