import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import Button from '../../components/Button'
import { colors, fontSize } from "../../theme";
import { isImageUrl } from "./functions";
import RenderResult from "./RenderResult";
import { sleep } from "../../utils/utilFunctions";
import axios from "axios";
import { endpoint } from "../../config";

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onButtonPress = async() => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        endpoint,
        {data: inputText},
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      setResult(data)
    } catch(e) {
      console.log('request error', e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={{width: '50%'}}>
          <Text style={styles.label}>画像URLを入力してください</Text>
          <TextInput
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            style={styles.input}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='解析する'
            onPress={onButtonPress}
            color={colors.lightPurple}
            disable={!isImageUrl({inputText})}
            labelColor={colors.white}
            isLoading={isLoading}
          />
          <View style={{paddingVertical: 10}} />
          <RenderResult
            result={result}
          />
        </View>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  label: {
    fontSize: fontSize.xxLarge,
    fontWeight: '500'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
})