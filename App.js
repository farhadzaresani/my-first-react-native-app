import { Provider } from "react-redux";
import {store} from "./store/store"
import TodoApp from "./components/todoapp/TodoApp";
import StartGameScreens from "./screens/StartGameScreens";
import { StyleSheet, View } from "react-native";

export default function App() {

  return (
    <View style={styles.rootScreen}>
      <StartGameScreens/>
    </View>
    );
  }
  

  const styles=StyleSheet.create({
    rootScreen:{
      flex:1,
      backgroundColor:"#ddb52f"
    }
  })
  
  
  {/* <Provider store={store}>
   <TodoApp/>
  </Provider> */}