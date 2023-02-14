import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TodoItem = ({ title, removeTodo, id }) => {
  return (
    <Pressable onPress={() => removeTodo(id)}>
      <View style={styles.todoItem}>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    margin: 15,
    padding: 14,
    backgroundColor: "#88859e",
    minWidth: "90%",
    borderRadius: 5,
  },
});

export default TodoItem;
