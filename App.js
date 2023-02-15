import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoApp from "./components/todoapp/TodoApp";
import StartGameScreens from "./screens/StartGameScreens";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode='cover'
        imageStyle={styles.backgorundImage}
        style={styles.rootScreen}
      >
        <StartGameScreens />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgorundImage:{
    opacity:0.75
  }
});

{
  /* <Provider store={store}>
   <TodoApp/>
  </Provider> */
}
