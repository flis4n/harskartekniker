import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-elements";
import { cardStyles, assetStyles, textStyles } from "../../Styles/StyleSheet";
import MiunLogo from "../../assets/miun_logo.png";
import translations from "../../translations";

const { headerText } = textStyles;

export const MiunHeader = () => (
  <Card containerStyle={cardStyles.header}>
    <Image style={assetStyles.logo} source={MiunLogo} />
    <Text style={headerText}>{translations.t("miunHeaderText")}</Text>
  </Card>
);
