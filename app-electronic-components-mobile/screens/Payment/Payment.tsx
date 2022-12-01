import React, { useEffect, useState } from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/cart/actions';
export default function Payment({navigation}: any) {
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState('first');
  const user = useSelector((state: any) => state.user.data);
  const cart = useSelector((state: any) => state.cart.data);

  const handlePayment = () => {
    dispatch({
      type: actions.PURCHASE,
      payload: {
        cartId: cart?.id,
        callback: () => {
          navigation.navigate('PaymentSuccess')
        }
      }
    })
  }

  useEffect(() => {
    let total = 0;
    cart?.cart?.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart?.cart])

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{ flexDirection: 'column', flexGrow: 1 }}>
        <View style={{
          flexGrow: 1
        }}>
          <View style={{ flexDirection: 'row', margin: 20, paddingHorizontal: 20, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Shipping Information</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditAddress')}>
              <Text style={{ fontSize: 17, color: '#F6AE2D', fontWeight: 'bold' }}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infomationComp}>
            <View style={[{ flexDirection: 'row' }, styles.itemInfomation]}>
              <Image source={require('../../assets/images/Profile.png')} style={{ marginTop: 10 }} />
              <Text style={styles.itemInfomation}>{user.username}</Text>
            </View>
            <View style={[{ flexDirection: 'row' }, styles.itemInfomation]}>
              <Image source={require('../../assets/images/Location.png')} style={{ marginTop: 10 }} />
              <Text style={styles.itemInfomation}>{user.information.address}</Text>

            </View>
            <View style={[{ flexDirection: 'row' }, styles.itemInfomation]}>
              <Image source={require('../../assets/images/Call.png')} style={{ marginTop: 10 }} />
              <Text style={styles.itemInfomation}>{user.information.phone}</Text>

            </View>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 17, margin: 20 }}>Payment method</Text>
          <View style={[styles.infomationComp, { flexDirection: 'row', padding: 20, alignItems: 'center', paddingLeft: 40 }]}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Image source={require('../../assets/images/credit-card.png')} style={{ borderRadius: 10 }} />
            <Text style={styles.itemInfomation}>*** **** *** 187</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column-reverse' }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' }}>
              <Text style={styles.priceTotal}>Total</Text>
              <Text style={[styles.priceTotal]}>${total}</Text>
            </View>
          </View>
        <TouchableOpacity
          onPress={handlePayment}
         style={{ backgroundColor: '#FB8500', alignItems: 'center', margin: 20, padding: 20, borderRadius: 20 }}>
          <Text style={styles.paymentText}>PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  infomationComp: {
    flexDirection: 'column',
    backgroundColor: '#ffff',
    margin: 20,
    borderRadius: 20
  },
  itemInfomation: {
    margin: 10,
    fontSize: 17
  },
  priceTotal: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  paymentText: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
