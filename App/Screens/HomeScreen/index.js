// App/Screens/HomeScreen/index.js
import React from "react";
import translations from "../../translations";
import { Text, View } from "react-native";
import { screenStyles, textStyles, sectionStyles } from "../../Styles/StyleSheet";
import { SectionsList } from "./sections";
import { MiunHeader } from "./header";

const { h1, p } = textStyles;
const { background, firstScreenContainer } = screenStyles;

export default function HomeScreen({ navigation }) {
  // Renderas ovanför grid-listan
  const Header = (
    <View style={{ paddingHorizontal: 2, paddingTop: 2 }}>
      {/* <MiunHeader /> */}
      <View style={[sectionStyles.textContainer, { marginTop: 8 }]}>
        <Text style={h1}>Power Up!</Text>
        <Text style={p}>{translations.t("h_text")}</Text>
      </View>
    </View>
  );
  const Footer = (
    <View style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
      <MiunHeader />
    </View>
  );
  return (
    <SectionsList
      navigation={navigation}
      header={Header}
      footer={Footer}
      contentContainerStyle={[background, firstScreenContainer, { paddingBottom: 0 }]}
    />
  );
}
