import React from "react";
import translations from "../../translations";
import { Text, TouchableOpacity, StyleSheet, FlatList, View } from "react-native";
import { Card } from "react-native-elements";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ICON_SIZE = 25;

export const sections = [
  { id: "1", icon: "hand-back-left",        title: "victimTitle",      path: "Victim" },
  { id: "2", icon: "bell",                   title: "attackerTitle",    path: "Attacker" },
  { id: "3", icon: "eye",                    title: "observerTitle",    path: "Observer" },
  { id: "4", icon: "information-variant",    title: "informationTitle", path: "Techniques" },
];

const TAB_MAIN = {
  Victim: "VictimMain",
  Observer: "ObserverMain",
  Attacker: "AttackerMain",
  Techniques: "TechniquesMain",
};

export const SectionsList = ({ navigation, header, footer, contentContainerStyle }) => {
  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={[
        { paddingHorizontal: 12, paddingTop: 12, paddingBottom: 16 },
        contentContainerStyle,
      ]}
      ListHeaderComponent={header}
      ListHeaderComponentStyle={{ marginBottom: 8 }}
      ListFooterComponent={footer}                 
      ListFooterComponentStyle={{ marginTop: 8 }}  
      renderItem={({ item }) => (
        <Card containerStyle={styles.card}>
          {/*<TouchableOpacity
            onPress={() => navigation.navigate(item.path)}
            style={styles.tile}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name={item.icon} size={ICON_SIZE} style={styles.icon} />
            <Text style={styles.title}>{translations.t(item.title)}</Text>
          </TouchableOpacity>*/}
                    <TouchableOpacity
            onPress={() => {
              const main = TAB_MAIN[item.path];
              // Navigera alltid till stackens "Main" skärm
              if (main) {
                navigation.navigate(item.path, { screen: main });
              } else {
                // fallback om någon tab inte har en main-route
                navigation.navigate(item.path);
              }
            }}
            style={styles.tile}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name={item.icon} size={ICON_SIZE} style={styles.icon} />
            <Text style={styles.title}>{translations.t(item.title)}</Text>
          </TouchableOpacity>
        </Card>
      )}
      ListComponent={<View style={{ height: 4 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    margin: 0,
    marginBottom: 12,
    borderRadius: 12,
  },
  tile: { alignItems: "center", justifyContent: "center", paddingVertical: 20 },
  icon: { marginBottom: 8 },
  title: { textAlign: "center", fontWeight: "600" },
});

