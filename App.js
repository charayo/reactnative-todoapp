import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Header from "./components/header";
import Input from "./components/input";
import TodoCard from "./components/todoCard";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Sample Todo Task", key: "1" },
  ]);
  const [textInp, setTextInp] = useState("");
  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((list) => list.key != id));
  };
  const onHandleInput = (param) => {
    setTextInp(param);
    // console.log(param);
  };
  const onHandleAdd = () => {
    if(textInp.length > 3){
      const newValue = { text: textInp, key: textInp + 1 };
      setTodos((prevTodos) => [newValue, ...prevTodos] );
    }else{
      Alert.alert( "Oppps!",  "You have to type at least 4 characters", [{text: "understood", onPress: ()=>console.log("alert closed")}]);
    }
    
  };
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={{flex:1}}>
        <Header />
        <Input
          onHandlePress={(val) => onHandleInput(val)}
          btnCall={() => onHandleAdd()}
        />
        <View style={styles.container}>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return (
                <TodoCard item={item} onHandleDel={(param) => onDelete(param)} />
              );
            }}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // marginBottom: 40,
    flex: 1,
    // backgroundColor: "#fff",
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
