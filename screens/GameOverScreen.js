import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/gameapp/ui/PrimaryButton";
import Title from "../components/gameapp/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Is Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/succes.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone neede <Text style={styles.highlightText}>{roundNumber}</Text>{" "}
        roundes to guess number{" "}
        <Text style={styles.highlightText}>{userNumber}</Text> !
      </Text>
      <PrimaryButton action={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginVertical: 10,
    width: deviceWidth < 380 ? 370 : 300,
    height: 400,
    // overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 23,
    textAlign: "center",
    marginVertical: 12,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary2,
  },
});
