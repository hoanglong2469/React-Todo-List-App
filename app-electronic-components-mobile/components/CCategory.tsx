import { View, TouchableOpacity, Text, Image, LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: '])

const CCategory = ({ item, navigation }: any) => {
  const handleGoToDetail = () => {
    navigation.navigate('All', { item });
  };
  return (
    <TouchableOpacity
      onPress={handleGoToDetail}
      style={{
        height: 190,
        width: 165,
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
            width: '70%',
            height: '70%',
            borderRadius: 10,
            resizeMode: 'contain',
          }}
          source={{uri: item.image}}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#F4FAFF',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 10,
            paddingTop: 10,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CCategory;
