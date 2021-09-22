import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoCard({ item, onHandleDel }) {
  return (
    <View>
      <View style={styles.flexItem}>
        <Text style={styles.item}>{item.text}</Text>
        {/*  */}
        <MaterialIcons onPress={() => onHandleDel(item.key)} name="delete" size={28} color="#951" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    color: "white",
    fontSize: 24,
  },
  del: {
    width: 50,
  },
  flexItem: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: "#333",
    color: "white",
    borderRadius: 10,
  },
});
