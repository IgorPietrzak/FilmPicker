import {
  React,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useReducer,
  createRef,
} from "react";
import { Text, ScrollView, StyleSheet, Alert, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Przycisk from "../components/Przycisk";
import axios from "axios";

export default function FilmPicker() {
  const [films, setFilms] = useState([]);
  const [selection, setSelection] = useState([]);
  const [bannedFilms, setBannedFilms] = useState([]);
  const swipeableRefs = useRef([]);
  useEffect(() => {
    axios.get("http://192.168.1.253:80/film").then((res) => {
      setFilms(res.data);
      setSelection(getRandom(res.data));
    });
  }, []);

  function LeftSwipeActions() {
    return (
      <View style={styles.ban}>
        <Text style={styles.banText}>✘</Text>
      </View>
    );
  }

  function getRandom(arr) {
    const temp = arr;
    temp.forEach((film) => {
      if (bannedFilms.includes(film.title)) {
        const index = temp.indexOf(film);
        temp.splice(index, 1);
      }
    });

    if (temp.length <= 4) {
      let random = temp.sort(() => 0.5 - Math.random()).slice(0, 1);
      return random;
    } else {
      let random = temp.sort(() => 0.5 - Math.random()).slice(0, 4);
      return random;
    }
  }

  return (
    <View style={styles.div}>
      {selection.map((film, index) => {
        swipeableRefs.current[index] = createRef();
        return (
          <Swipeable
            key={index}
            renderLeftActions={LeftSwipeActions}
            renderRightActions={LeftSwipeActions}
            onSwipeableOpen={() => {
              const arr = bannedFilms;
              arr.push(film.title);
              setBannedFilms(arr);
            }}
            style={styles.li}
            ref={swipeableRefs.current[index]}
          >
            <View style={styles.li}>
              <Text style={styles.text}>{film.title}</Text>
            </View>
          </Swipeable>
        );
      })}
      <Przycisk
        title="Submit"
        onPress={() => {
          setSelection(getRandom(films));
          swipeableRefs.current.forEach((ref) => {
            ref.current.close();
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#E1FFB1",
    flex: 1,
    paddingBottom: 80,
    paddingTop: 0,
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 5,
  },
  li: {
    marginVertical: 0,
    backgroundColor: "#B6E388",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: "stretch",
    height: 100,
    borderRadius: 4,
  },
  text: {
    color: "black",
    fontSize: 30,
  },
  ban: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC2947",
    alignSelf: "stretch",
    marginVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: "stretch",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 4,
  },
  banText: {
    color: "#fff",
    fontSize: 30,
  },
});
