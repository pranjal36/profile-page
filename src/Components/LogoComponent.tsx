import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../Assets/Svg/Logo'
import { Colors } from '../constants/Colors'

export default function LogoComponent() {
  return (
    <View style={styles.container}>
        <Logo height={40} width={40} />
        <Text style={styles.text}>PLAYWISE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    color: Colors.DARK_ORANGE,
    fontWeight: '800',
    elevation: 5
  }
})