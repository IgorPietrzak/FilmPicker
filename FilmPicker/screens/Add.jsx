import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import axios from "axios";

export default function Add({ navigation }) {
  const [input, setInput] = useState({ title: "", genre: "" });
  function handleInput() {
    axios
      .post("http://192.168.1.253:80/film/add", input)
      .then((res) => console.log(res));
  }
  return (
    <View
      style={styles.div}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Movie Title"
        onChangeText={(newText) => {
          setInput({ title: newText, genre: "" });
        }}
        onSubmitEditing={handleInput}
        style={styles.input}
        blurOnSubmit={true}
        clearTextOnFocus={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#E1FFB1",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 20,
    gap: 30,
  },
  input: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#393646",
  },
});
