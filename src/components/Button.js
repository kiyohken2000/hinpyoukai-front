import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { fontSize } from '../theme'

export default function Button(props) {
  const { label, color, labelColor, onPress, disable, isLoading } = props

  if(isLoading) {
    return (
      <View
        style={[styles.button, {backgroundColor: color}]}
      >
        <ActivityIndicator size='small' color={labelColor} />
      </View>
    )
  }

  if(disable) {
    return (
      <View style={[styles.button, {backgroundColor: color, opacity: 0.3}]}>
        <Text style={[styles.buttonText, {color: labelColor}]}>{label}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48
  },
  buttonText: {
    fontSize: fontSize.large
  }
})