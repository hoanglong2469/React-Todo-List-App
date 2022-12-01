import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CButton from '../../../components/CButton';
import CInput from '../../../components/CInput';
import HideKeyboard from '../../../components/HideKeyboard';
import GlobalStyles from '../../../constants/GlobalStyles';
import actions from '../../../redux/user/actions';

const Register2 = ({ navigation, route }: any) => {
  const dispatch = useDispatch();
  const { account } = route.params;
  const [information, setInformation] = useState<{
    address: string;
    phone: string;
    email: string;
  }>({
    address: '',
    phone: '',
    email: '',
  });

  const loading = useSelector((state: any) => state.user.loading);

  const icon = require('../../../assets/images/icon.png');

  const handleRegister = () => {
    dispatch({
      type: actions.REGISTER,
      payload: {
        user: {
          ...account,
          information
        },
        callback: () => {
          navigation.navigate('Login');
        }
      }
    })
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView
      style={{
        ...GlobalStyles.container,
        ...GlobalStyles.dFlex,
        ...GlobalStyles.centeredFlex,
      }}
    >
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
              <CInput
                placeholder="Address"
                value={information.address}
                onChangeText={(text: string) => {
                  setInformation((state: any) => ({
                    ...state,
                    address: text,
                  }));
                }}
              />
              <CInput
                placeholder="Phone"
                keyboardType="phone-pad"
                value={information.phone}
                onChangeText={(phone: string) => {
                  setInformation((prev: any) => ({
                    ...prev,
                    phone
                  }));
                }}
              />
              <CInput
                placeholder="Email"
                value={information.email}
                onChangeText={(email: string) => {
                  setInformation((prev: any) => ({
                    ...prev,
                    email
                  }));
                }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <CButton
                btnProps={{
                  onPress: handleRegister,
                }}
                title="REGISTER"
                backgroundColor="#FB8500"
              />
              <CButton
                btnProps={{
                  onPress: handleBack,
                }}
                title="Back"
                textStyles={styles.registerText}
                backgroundColor="transparent"
              />
              <CButton
                btnProps={{
                  onPress: handleLogin,
                }}
                title="Login"
                textStyles={styles.registerText}
                backgroundColor="transparent"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </HideKeyboard>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color="#FB8500" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  imageContainer: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 230,
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
    textDecorationLine: 'underline',
  },
  loadingContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '120%',
    height: '120%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register2;
