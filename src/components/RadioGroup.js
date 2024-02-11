import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors, fontSize } from "../theme";
import { IconContext } from 'react-icons'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'

export default function RadioGroup(props) {
  const { onPress, labelText, options, currentValue } = props

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      {options.map((item, i) => {
        const { label, value } = item
        const isSelected = value === currentValue
        return (
          <View key={i} style={{flexDirection: 'row', alignItems: 'center', paddingRight: 20}}>
            <TouchableOpacity
              onPress={() => onPress({value})}
              disabled={isSelected}
            >
              <IconContext.Provider value={{ color: isSelected?colors.darkPurple:colors.pink, size: fontSize.xxxLarge }}>
                {isSelected?<FaRegCheckCircle/>:<FaRegCircle/>}
              </IconContext.Provider>
            </TouchableOpacity>
            <Text style={styles.optionLabel}>{label}</Text>
          </View>
        )
      })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  labelText: {
    fontSize: fontSize.large,
  },
  optionLabel: {
    fontSize: fontSize.large,
    fontWeight: '700'
  }
})