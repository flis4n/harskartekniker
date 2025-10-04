import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { scenarioStyles } from "../../Styles/StyleSheet";

export const ItemList = ({ items, navigation }) => {
  const itemList = items.map((item) => {
    return (
      <Card
        key={`${item.id}-card`}
        containerStyle={{
          ...scenarioStyles.item,
          borderLeftColor: item.color,
        }}
      >
        <TouchableOpacity
          key={`${item.id}-touchable`}
          onPress={() => navigation.navigate(String(item.counterStrategy))}
        >
          <Text key={`${item.id}-text`}>{item.value}</Text>
        </TouchableOpacity>
      </Card>
    );
  });
  return itemList;
};
