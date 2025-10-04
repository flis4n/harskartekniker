import React from "react";
import translations from "../../translations";
import { Text, View, ScrollView } from "react-native";
import {
  screenStyles,
  cardStyles,
  textStyles,
  sectionStyles,
} from "../../Styles/StyleSheet";
import { SectionsList } from "./sections";
import { MiunHeader } from "./header";

const { h1, h3, p, headerText } = textStyles;
const { background, screenContainer } = screenStyles;

function HomeScreen({ navigation }) {
  return (
    <>
      <MiunHeader />
      <ScrollView style={background}>
        <View style={screenContainer}>
          <View style={sectionStyles.textContainer}>
            <Text style={h1}>Power Up!</Text>
            <Text style={p}>{translations.t("h_text")}</Text>
          </View>
          <View style={cardStyles.cardsContainer}>
            <SectionsList navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
