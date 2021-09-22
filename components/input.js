import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import Btn from "../button";

export default function Input(props) {
  const { onHandlePress, btnCall } = props;
  return (
    <View style={styles.container}>
      <TextInput onChangeText={(val)=>onHandlePress(val)} style={styles.myInput} placeholder="Your Todo..." />
      <Btn action= {btnCall}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  myInput: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 4,
    borderColor: "#999",
  },
  btn:{
      borderRadius: 10,
  }
});
