import React, { useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function Btn(props) {
  const { action, title = "Add" } = props;
  const [isPress, setIsPress] = useState(false);
  const touchProps = {
    activeOpacity: 1,
    underlayColor: "coral",
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => action(),
  };
  return (
    <TouchableHighlight {...touchProps}>
      <Text style={isPress ? styles.textWhite : styles.textCoral}>{title}</Text>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  btnNormal: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: "coral",
    borderWidth: 2,
  },
  btnPress: {
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  textCoral: {
    fontSize: 16,
    lineHeight: 21,
    color: "coral",
  },
  textWhite: {
    fontSize: 16,
    lineHeight: 21,
    color: "white",
  },
});
