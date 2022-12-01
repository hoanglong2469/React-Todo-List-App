import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native';
import CInput from '../../components/CInput';

export default function EditAddress() {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center' }}>
        <CInput placeholder='Name' customStyleContainer={{ margin: 10 }} >
          <Image source={require('../../assets/images/Profile.png')} style={{ marginRight: 10 }} />
        </CInput>
        <CInput placeholder='Phone' customStyleContainer={{ margin: 10 }}>
          <Image source={require('../../assets/images/Call.png')} style={{ marginRight: 10 }} />

        </CInput>
        <CInput placeholder='Address' customStyleContainer={{ margin: 10 }}>
          <Image source={require('../../assets/images/Location.png')} style={{ marginRight: 10 }} />
        </CInput>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#FB8500', alignItems: 'center', margin: 20, padding: 20, borderRadius: 20 }}>
        <Text style={styles.paymentText}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  textSuccess: {
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: 'center',
    margin: 100,
  },
  paymentText: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
