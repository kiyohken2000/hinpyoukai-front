import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontSize } from "../../theme";
import { isImageUrl } from "./functions";
import Button from "../../components/Button";
import toast, { Toaster } from 'react-hot-toast';

export default function RenderResult(props) {
  const { result } = props

  const onLinkPress = () => {
    window.open(result, '_blank');
  }

  const onButtonPress = () => {
    navigator.clipboard.writeText(result)
    toast('URLをコピーしました');
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
      <View style={styles.buttonContainer}>
        <Button
          label='URLをコピー'
          color={colors.darkPurple}
          labelColor={colors.white}
          onPress={onButtonPress}
          disable={false}
          isLoading={false}
        />
      </View>
      <Toaster />
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
  },
  buttonContainer: {
    width: '100%',
    paddingTop: 10
  }
})