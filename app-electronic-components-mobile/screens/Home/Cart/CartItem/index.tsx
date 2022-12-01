import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "../../../../components/Themed";

const CartItem = ({ item, handleUpdate, handleRemove }: any) => {
  return (
    <View
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        // width: "100%",
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 5,
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => handleRemove(item)}
        style={{
          borderRadius: 100,
          width: 20,
          height: 20,
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Image source={require("../../../../assets/images/icons/Delete.png")} />
      </TouchableOpacity>
      <View
        style={{
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        <Image
          style={{
            flex: 1,
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{uri: encodeURI(item.image)}}
        />
      </View>
      <View
        style={{
          borderRadius: 10,
          width: "70%",
          height: 60,
          backgroundColor: "#FFF",
          marginHorizontal:10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: 10,
            paddingTop: 5,
          }}
        >
          ${item.price}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFF",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text>Quantity</Text>
          <TouchableOpacity disabled={item.quantity <= 1 } onPress={() => handleUpdate({
            ...item,
            quantity: item.quantity - 1
          })} style={{ marginHorizontal: 5 }}>
            <Image
              source={require("../../../../assets/images/icons/minus.png")}
            />
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleUpdate({
            ...item,
            quantity: item.quantity + 1
          })} style={{ marginHorizontal: 5 }}>
            <Image
              source={require("../../../../assets/images/icons/plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
