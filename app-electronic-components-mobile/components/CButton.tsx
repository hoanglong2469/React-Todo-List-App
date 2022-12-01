import { useFonts } from 'expo-font'
import { Roboto_700Bold } from '@expo-google-fonts/roboto'
import React from 'react'
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native'

const CButton = ({ btnProps, title, backgroundColor, textStyles = {} }: { btnProps: any, title: string, backgroundColor: string, textStyles?: any }) => {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold
  })

  if (!fontsLoaded) return null

  return (
    <TouchableOpacity {...btnProps} style={styles.pressableWrapper}>
      <View style={{ backgroundColor, ...styles.btnWrapper }}>
        <Text style={{ ...styles.btnText, ...textStyles }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pressableWrapper: {
    width: '85%',
  },
  btnWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    color: '#F4FAFF',

  }
})

export default CButton
