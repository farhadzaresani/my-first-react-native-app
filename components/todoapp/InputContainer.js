import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const InputContainer = ({ addTodo, closeModal, visible }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = () => {
    if (inputValue.length > 0) {
      addTodo(inputValue);
      setInputValue("");
      closeModal(false);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
      <Image source={require("../../assets/images/todoHero.png") } />
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            style={styles.input}
            placeholder="Type here!"
          />
          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => closeModal(false)}
              title="Cancel"
              color={"red"}
            />
            <Button onPress={submitHandler} title="Add" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    // flex: 2,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "80%",
  },
  inputContainer: {
    marginVertical: 200,
    marginHorizontal: 10,
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#3d395e",
    height: "100%",
    borderWidth:1
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default InputContainer;
