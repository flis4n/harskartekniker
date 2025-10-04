import React, { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import {
  screenStyles,
  cardStyles,
  textStyles,
  icons,
} from "../../Styles/StyleSheet";
import { TechniquesList } from "./masterSuppressionTechniques";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import translations from "../../translations";

export function TechniquesScreen({ navigation }) {
  const { background, screenContainer } = screenStyles;
  const { techniquesIcon } = icons;
  const { h1, h3, p } = textStyles;
  const scrollRef = useRef();
  const isFocused = useIsFocused();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
    });
  }, [isFocused]);

  return (
    <ScrollView ref={scrollRef} style={background}>
      <View style={{ marginBottom: 100 }}>
        <View style={screenContainer}>
          <MaterialCommunityIcons style={h1} name={techniquesIcon} />
          <Text style={h3}>{translations.t("t_title")}</Text>
          <Text style={{ ...p, lineHeight: 20 }}>
            {translations.t("t_content")}
          </Text>
          <View style={cardStyles.cardsContainer}>
            <TechniquesList navigation={navigation} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
