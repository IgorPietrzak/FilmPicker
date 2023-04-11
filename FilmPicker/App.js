import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Add from "./screens/Add";
import FilmList from "./screens/FilmList";
import FilmPicker from "./screens/FilmPicker";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={styles} />
        <Stack.Screen name="Add" component={Add} options={styles} />
        <Stack.Screen name="FilmList" component={FilmList} options={styles} />
        <Stack.Screen
          name="FilmPicker"
          component={FilmPicker}
          options={styles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  headerStyle: {
    backgroundColor: "#E1FFB1",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "black",
  },
};

export default App;
