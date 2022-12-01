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
export default function PaymentSuccess({navigation}: any) {
  return (
    <View style={{flexDirection:'column'}}>
        <View style={{alignItems:'center'}}>
            <Image source={require('../../assets/images/celeb1.png')} style={{borderRadius:10}}/>

        </View>
        <Text style={styles.textSuccess}>ORDER SUCCESFULLY</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={{backgroundColor:'#FB8500', alignItems:'center', margin:20, padding:20, borderRadius:20}}>
          <Text style={styles.paymentText}>HOME</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    textSuccess:{
        fontWeight:'bold',
        fontSize:20,
        alignContent:'center',
        margin:100,
    },
    paymentText:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold'
      }
});
  