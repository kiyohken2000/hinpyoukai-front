import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontSize } from "../../theme";
import { isImageUrl } from "./functions";

export default function RenderResult(props) {
  const { result } = props

  const onLinkPress = () => {
    window.open(result, '_blank');
  }

  if(!isImageUrl({inputText: result}) ) {
    return (
      <View/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>解析結果です</Text>
      <TouchableOpacity
        onPress={onLinkPress}
      >
        <Text style={styles.linkText}>{result}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  linkText: {
    fontSize: fontSize.xxLarge,
    color: colors.purple,
    textDecorationLine: 'underline'
  },
  label: {
    fontSize: fontSize.large
  }
})