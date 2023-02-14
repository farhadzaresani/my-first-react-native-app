import { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { SvgXml } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, allTodos, deleteTodo } from "../../slicers/addTodoSlicer";
import InputContainer from "./InputContainer";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const dispatch=useDispatch()

  const {myTodos}=useSelector(allTodos)
  console.log(myTodos)


  const addTodo = (newTodo) => {
      dispatch(addNewTodo(newTodo))
    
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id))
  };

  const xml = `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 297 180" xml:space="preserve">
<g>
<path d="M237.333,33h-50.14c-2.558-18.613-18.556-33-37.86-33s-35.303,14.387-37.86,33h-51.14C50.408,33,42,41.075,42,51v228
 c0,9.925,8.408,18,18.333,18h177c9.925,0,17.667-8.075,17.667-18V51C255,41.075,247.258,33,237.333,33z M93.052,48
 c3.432,18.033,19.084,31,38.092,31h36.379c19.008,0,34.66-12.967,38.092-31H223v216H75V48H93.052z M149.333,16
 c10.456,0,19.242,7.259,21.601,17h-43.201C130.091,23.259,138.877,16,149.333,16z"/>
<rect x="99" y="109" width="40" height="10"/>
<polygon points="200.689,105.076 189.645,94.924 175.427,110.39 169.237,105.347 159.763,116.976 176.907,130.944 	"/>
<rect x="99" y="157" width="40" height="10"/>
<polygon points="200.689,153.076 189.645,142.924 175.427,158.39 169.237,153.347 159.763,164.976 176.907,178.944 	"/>
<rect x="99" y="205" width="40" height="10"/>
<polygon points="200.689,201.076 189.645,190.924 175.427,206.39 169.237,201.347 159.763,212.976 176.907,226.944 	"/>
</g>
</svg>`;

  return (
    <View style={styles.container}>
      <View style={{ height: "20%", margin: 20 }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 19 }}
        >
          <SvgXml xml={xml} width="50%" height="90%" />
        </View>
        <Button title="Add New Todo" onPress={() => setOpenCreateModal(true)} />
      </View>
      <InputContainer
        visible={openCreateModal}
        closeModal={setOpenCreateModal}
        addTodo={addTodo}
      />
      <FlatList
        alwaysBounceVertical={false}
        bounces={false}
        ListEmptyComponent={
          <Text
            style={{
              margin: 40,
              fontWeight: "bold",
              opacity: 0.2,
              fontSize: 25,
            }}
          >
            There is no todo
          </Text>
        }
        style={{ borderTopWidth: 1, marginTop: 8 }}
        data={myTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            removeTodo={removeTodo}
            key={item.id}
            id={item.id}
            title={item.title}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d395e",
    alignItems: "center",
    padding: 40,
    gap: 5,
  },
});
