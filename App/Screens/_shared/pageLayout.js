import React, { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  screenStyles,
  textStyles,
  sectionStyles,
  scenarioStyles,
} from "../../Styles/StyleSheet";
import { ItemList } from "./itemList";

function PageLayout({ navigation, icon, items, title, content }) {
  const { screenContainer, background } = screenStyles;
  const { textContainer, listContainer } = sectionStyles;
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
      <View style={screenContainer}>
        <View style={textContainer}>
          <MaterialCommunityIcons style={h1} name={icon} size={50} />
          <Text style={h3}>{title}</Text>
          <Text style={p}>{content}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={scenarioStyles.container}>
          <ItemList items={items} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}

export default PageLayout;
