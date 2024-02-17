import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { storeUrls } from "../../config";

export default function RenderBadges() {

  const onLinkPress = ({url}) => {
    window.open(url, '_blank');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onLinkPress({url: storeUrls.appstore})}
      >
        <Image
          source={require('../../assets/images/appstore.png')}
          resizeMode='contain'
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={{paddingHorizontal: 10}} />
      <TouchableOpacity
        onPress={() => onLinkPress({url: storeUrls.googleplay})}
      >
        <Image
          source={require('../../assets/images/googleplay.png')}
          resizeMode='contain'
          style={styles.image2}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150
  },
  image2: {
    height: 200,
    width: 180
  }
})