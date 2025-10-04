import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const cardShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
};
export const FONTS = {
  ...Platform.select({
    ios: { fontFamily: "Arial" },
    android: { fontFamily: "Roboto" },
  }),
};

export const ICON_COLOR = "#bbbbbb";
export const ACTIVE_COLOR = "#ff6347";
export const BACKGROUND_COLOR = "white";

export const LABEL_STYLE = {
  ...FONTS,
  fontSize: 11,
  width: 200,
  textAlign: "center",
  color: ACTIVE_COLOR,
};

export const techniqueColors = {
  doubleBind: "#eebb6a",
  ridicule: "#9bbf8a",
  threatOfForce: "#e59775",
  objectifying: "#7b8ac4",
  makingInvisible: "#e0e0e0",
  heapBlame: "#7ec0ef",
  withholdInformation: "#fced8e",
};

export const icons = {
  attackerIcon: "bell",
  victimIcon: "hand-back-left",
  homeIcon: "home",
  observerIcon: "eye",
  techniquesIcon: "information-variant",
};

export const screenStyles = StyleSheet.create({
  screenContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 75,
  },
  firstScreenContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "30%",
  },
  background: { backgroundColor: "#fafafa" },
});

export const sectionStyles = StyleSheet.create({
  textContainer: {
    marginLeft: "10%",
    marginRight: "10%",
  },
});

export const assetStyles = StyleSheet.create({
  logo: {
    transform: [{ scale: 0.55 }],
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export const textStyles = StyleSheet.create({
  p: {
    ...FONTS,
    fontSize: 17,
    marginBottom: 20,
  },
  h3: {
    fontSize: 20,
    ...FONTS,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h1: {
    marginLeft: "auto",
    marginRight: "auto",
    ...FONTS,
    fontSize: 40,
    marginBottom: 50,
  },
  headerText: {
    textAlign: "center",
    ...FONTS,
    fontSize: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});

export const cardStyles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#efefef",
  },
  cardsContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
    borderRadius: 10,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 6,
    ...cardShadow,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    marginTop: 10,
  },
});

export const techniqueCards = StyleSheet.create({
  card: {
    width: "47%",
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    ...cardShadow,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    margin: 10,
    marginBottom: 0,
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export const counterStrategyStyles = StyleSheet.create({
  h2: {
    fontSize: 27,
    marginBottom: 10,
  },
  h3: { ...textStyles.h3 },
  p: { ...textStyles.p },
  source: {
    fontSize: 12,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10,
    marginBottom: 30,
  },
});

export const scenarioStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "80%",
  },
  item: {
    width: "100%",
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
    marginBottom: 6,
    margin: 0,
    marginTop: 6,
    ...cardShadow,
    borderLeftWidth: 10,
  },
  titleStyle: {
    fontSize: 15,
  },
});
