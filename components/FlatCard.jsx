import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "20%",
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: "#ef5354",
  },
  cardTwo: {
    backgroundColor: "#50dbba",
  },
  cardThree: {
    backgroundColor: "#5da3fa",
  },
});
