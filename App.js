import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoApp from "./components/todoapp/TodoApp";
import StartGameScreens from "./screens/StartGameScreens";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }


  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = (num) => {
    setGameIsOver(true);
    setGuessRounds(num)
  };

  const startNewGame = () => {
    setUserNumber(null),
    setGuessRounds(0)
  };

  let screens = <StartGameScreens onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screens = (
      <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
    );
  }
  if (gameIsOver && userNumber) {
    screens = (
      <GameOverScreen
        roundNumber={guessRounds}
        userNumber={userNumber}
        onRestart={startNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary1, Colors.primary2]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgorundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screens}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgorundImage: {
    opacity: 0.75,
  },
});

{
  /* <Provider store={store}>
   <TodoApp/>
  </Provider> */
}
