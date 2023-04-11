import React from "react";
import { Text, ScrollView, StyleSheet, Alert } from "react-native";
import Przycisk from "../components/Przycisk";

export default function Home({ navigation }) {
  return (
    <ScrollView
      style={styles.div}
      contentContainerStyle={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        gap: 30,
      }}
    >
      <Przycisk
        style={styles.btn}
        title="Film List"
        onPress={() => navigation.navigate("FilmList")}
      />
      <Przycisk
        style={styles.btn}
        title="Start Film Picker"
        onPress={() => navigation.navigate("FilmPicker")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#E1FFB1",
    flex: 1,
  },
  btn: {
    marginVertical: 20,
  },
});
