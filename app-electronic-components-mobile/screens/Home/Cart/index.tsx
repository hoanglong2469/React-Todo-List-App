import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../redux/cart/actions'
import CartItem from "./CartItem";

const Cart = ({ navigation }: any) => {
  const [total, setTotal] = React.useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.data);
  const user = useSelector((state: any) => state.user.data);

  const handleUpdate = (item: any) => {
    dispatch({
      type: actions.UPDATE_CART,
      payload: {
        cartId: cart?.id,
        item
      }
    })
  }

  const handleRemove = (item: any) => {
    dispatch({
      type: actions.REMOVE_FROM_CART,
      payload: {
        cartId: cart?.id,
        item
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
    <SafeAreaView
      style={{
        width: "100%",
        flex: 1,
        display:"flex",
      }}
    >
      {!cart?.cart && (
          <Text style={{
            fontSize: 24,
            alignSelf: 'center',
            fontWeight: 'bold',
            marginTop: 20
          }}>No items</Text>
        )}
      <View
        style={{
          width: "100%",
          paddingHorizontal: 30,
          backgroundColor: "#F4FAFF",
          flex:1,
        }}
      >
        <FlatList
          // style={{ height: "100%", backgroundColor: "red" }}
          data={cart?.cart}
          renderItem={({item}) => <CartItem item={item} handleUpdate={handleUpdate} handleRemove={handleRemove} />}
          keyExtractor={(item) => item.name}
          horizontal={false}
          extraData={{
            navigation,
          }}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            ${total}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 60,
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Payment")}
            style={{
              width: "100%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "orange",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "white",
              }}
            >
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
