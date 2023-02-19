import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/gameapp/game/NumberContainer";
import Card from "../components/gameapp/ui/Card";
import InstructionText from "../components/gameapp/ui/InstructionText";
import { PrimaryButton } from "../components/gameapp/ui/PrimaryButton";
import Title from "../components/gameapp/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  // console.log(guessRounds.length)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie you know thas this is wrong! ", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds((prevgues) => [newRndNum, ...prevgues]);
  }

  return (
    <View style={styles.screen}>
      <Title>Oponnet's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton action={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton action={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="ios-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContiner}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={styles.listItemText}>#{index + 1}</Text>
              </View>
              <View>
                <Text style={styles.listItemText}>{item}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listItem: {
    backgroundColor: Colors.primary2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 26,
    borderColor: "black",
    borderWidth: 3,
    margin: 5,
    width: "99%",
  },
  listItemText: {
    fontFamily: "open-sans-bold",
  },
  listContiner: {
    flex: 1,
    padding: 16,
  },
});
