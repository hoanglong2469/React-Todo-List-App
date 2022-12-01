import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../redux/cart/actions';
// ignore all logs
LogBox.ignoreAllLogs();

const ProductDetail = ({ route }: any) => {
  const navigation = useNavigation();
  const cart = useSelector((state: any) => state.cart.data);
  console.log(cart)
  const dispatch = useDispatch();
  const { item } = route.params;
  const handleAddToCart = () => {
    dispatch({
      type: actions.ADD_TO_CART,
      payload: {
        cartId: cart?.id,
        item: {
          ...item,
          quantity: 1,
        },
        callback: () => {
          Alert.alert('Success', 'Product added to cart');
        }
      }
    })
  }
  return (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
      }}
    >
      <View
        style={{
          height: 80,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
          backgroundColor: '#F4FAFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 100,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 250,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F4FAFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 10,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 200,
          }}
          source={{ uri: item.image }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          paddingHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F4FAFF',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
          }}
        >
          {item.name}
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: '100%',
          paddingHorizontal: 30,
          flexGrow: 1,
          backgroundColor: '#F4FAFF',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 10
          }}
        >
          Colors
        </Text>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <FlatList
            data={[
              {
                color: '#774488',
                name: 'Purple',
              },
              {
                color: '#C9A19C',
                name: 'Brown',
              },
              {
                color: '#A1C89B',
                name: 'Green',
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: item.color,
                  marginRight: 10
                }}
              />
            )}
            keyExtractor={(item) => item.color}
            horizontal
          />
        </View>
        <View style={{
          width: '100%',
          height: 100,
          marginTop: 30
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 15
          }}>
            Product information
          </Text>
          <Text style={{
            fontSize: 12,
            color: '#212529',
            fontWeight: '500'
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo nisi aperiam animi! Voluptate, dolorum sint cumque a ea temporibus debitis optio? Ratione tempora perferendis porro
          </Text>
        </View>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 28
          }}>
            Total
          </Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 28
          }}>
            $ {item.price}
          </Text>
        </View>
        <View style={{
          width: '100%',
          height: 60,
          marginVertical: 20
        }}>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={{
              width: '100%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
              borderRadius: 10
            }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white'
            }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
