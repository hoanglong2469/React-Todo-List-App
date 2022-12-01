import { View, TouchableOpacity, Text, Image, LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: '])

const CProduct = ({ item, navigation }: any) => {
  const handleGoToDetail = () => {
    navigation.navigate('ProductDetail', { item });
  };
  return (
    <TouchableOpacity
      onPress={handleGoToDetail}
      style={{
        height: 230,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#F4FAFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 5,
        marginRight: 10
      }}
    >
      <View
        style={{
          width: '100%',
          height: 140,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F4FAFF',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          source={{uri: item.image}}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#F4FAFF',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            paddingHorizontal: 10,
            paddingTop: 5,
          }}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CProduct;
