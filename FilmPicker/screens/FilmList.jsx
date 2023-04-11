import React, { useState, useEffect } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Alert,
  FlatList,
} from "react-native";
import axios from "axios";
import Przycisk from "../components/Przycisk";

export default function FilmList({ navigation }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.253:80/film").then((res) => setFilms(res.data));
  });
  return (
    <ScrollView style={styles.div}>
      <View style={styles.div}>
        <Przycisk title="Add Film" onPress={() => navigation.navigate("Add")} />
        <View style={styles.padDiv}></View>
        {films.map((film, index) => {
          return (
            <View key={index}>
              <View style={styles.li}>
                <Text style={styles.text}>{film.title}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#E1FFB1",
    flex: 1,
    paddingBottom: 80,
    paddingTop: 5,
    gap: 10,
    paddingHorizontal: 10,
  },
  li: {
    marginVertical: 0,
    backgroundColor: "#B6E388",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: "stretch",
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 4,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  padDiv: {
    height: 80,
    width: 10,
  },
});
