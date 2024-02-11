import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fontSize } from "../../theme";
import { fontSizeOptions, bracketsOptions, positionOptions } from "./optionsData";
import RadioGroup from "../../components/RadioGroup";

export default function RenderOptions(props) {
  const [isVisible, setIsVisible] = useState(false)
  const {
    numberPositionIndex, setNumberPositionIndex, numberFontSize, setNumberFontSize, isBrackets, setIsBrackets,
  } = props

  if(!isVisible) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsVisible(!isVisible)}
        >
          <Text style={styles.linkText}>オプション</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.linkText}>オプション</Text>
      </TouchableOpacity>
      <View style={{paddingTop: 10}}>
        <RadioGroup
          onPress={({value}) => setNumberFontSize(value)}
          labelText='フォントサイズ'
          options={fontSizeOptions}
          currentValue={numberFontSize}
        />
        <RadioGroup
          onPress={({value}) => setNumberPositionIndex(value)}
          labelText='数字の位置'
          options={positionOptions}
          currentValue={numberPositionIndex}
        />
        <RadioGroup
          onPress={({value}) => setIsBrackets(value)}
          labelText='カッコをつける'
          options={bracketsOptions}
          currentValue={isBrackets}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  linkText: {
    fontSize: fontSize.large,
    color: colors.purple,
    textDecorationLine: 'underline'
  },
  label: {
    fontSize: fontSize.large
  },
})