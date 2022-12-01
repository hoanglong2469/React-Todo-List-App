import React, { useState } from "react"
import { View, SafeAreaView, Image, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import CButton from "../../../components/CButton"
import CInput from "../../../components/CInput"
import HideKeyboard from "../../../components/HideKeyboard"
import GlobalStyles from "../../../constants/GlobalStyles"
import actions from "../../../redux/user/actions"
import cartActions from '../../../redux/cart/actions'

const Login = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch()
  const [account, setAccount] = useState<{ username: string, password: string }>({
    username: 'hieud123',
    password: '12345'
  })
  const loading = useSelector((state: any) => state.user.loading)

  const icon = require("../../../assets/images/icon.png")

  const handleLogin = () => {
    dispatch({
      type: actions.LOGIN,
      payload: {
        account,
        callback: () => {
          navigation.navigate('Home')
        }
      }
    })
  }

  const handleRegister = () => {
    console.log('register...')
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView
      style={{
        ...GlobalStyles.container,
        ...GlobalStyles.dFlex,
        ...GlobalStyles.centeredFlex
      }}>
      <HideKeyboard>
        <KeyboardAvoidingView style={{
          width: '100%',
          height: '100%',
        }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <View style={styles.loginContainer}>
            <View style={styles.imageContainer}>
              <Image source={icon} />
            </View>
            <View style={styles.formContainer}>
              <CInput placeholder="Username"
                textContentType="usename"
                value={account.username}
                onChangeText={(text: string) => {
                  setAccount((state: any) => (
                    {
                      username: text,
                      password: state.password
                    }
                  ))
                }}
              />
              <CInput placeholder="Password"
                x secureTextEntry={true}
                textContentType="password"
                value={account.password}
                onChangeText={(password: string) => {
                  setAccount((prev: any) => ({
                    username: prev.username,
                    password
                  }))
                }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <CButton
                btnProps={{
                  onPress: handleLogin
                }}
                title="LOGIN"
                backgroundColor="#FB8500"
              />
              <CButton
                btnProps={{
                  onPress: handleRegister
                }}
                title="Register"
                textStyles={styles.registerText}
                backgroundColor="transparent"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </HideKeyboard>
      {loading && <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color="#FB8500" />
      </View>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%'
  },
  imageContainer: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
  },
  registerText: {
    color: '#000',
    textDecorationLine: 'underline'
  },
  loadingContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '120%',
    height: '120%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login
