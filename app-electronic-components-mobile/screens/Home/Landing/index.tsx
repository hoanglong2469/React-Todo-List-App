import {
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import CProduct from '../../../components/CProduct';
import data from '../../../mock-data';

const Landing = ({ navigation }: any) => {
  const logo = require('../../../assets/images/horizontal-logo.png');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchResult(data.products.filter((product: any) => product.name.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      setSearchResult([]);
    }
  }, [searchInput]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F4FAFF',
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
            height: 2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 5,
          position: 'relative',
          zIndex: 10
        }}
      >
        {
          showSearch ? (
            <View style={{
              width: 412,
              height: 300,
              position: 'absolute',
              top: 80,
              left: 0,
              backgroundColor: '#F4FAFF',
              paddingHorizontal: 30,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
              shadowRadius: 10,
              elevation: 5,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
              <FlatList style={{
                marginTop: 20,
              }} showsHorizontalScrollIndicator={false} data={searchResult} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
                navigation
              }} />
            </View>
          ) : null
        }
        <TouchableOpacity>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        {showSearch ? (
          <View style={{
            maxWidth: 200
          }}>
            <TextInput
              value={searchInput}
              onChangeText={setSearchInput}
              placeholder="Search for products..."
            />
          </View>
        ) : (
          <TouchableOpacity
            style={{
              marginBottom: 15,
            }}
          >
            <Image source={logo} />
          </TouchableOpacity>
        )}
        {showSearch ? (
          <TouchableOpacity
            onPress={() => {
              setShowSearch(false);
              setSearchInput('');
            }}
          >
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowSearch(true)}>
            <MaterialIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView style={{
        width: '100%',
        flex: 1,
      }}>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Hot Deals
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Laptop
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products.filter(item => item.category === 'laptop')} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Tablets
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products.filter(item => item.category === 'Ipads')} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Phones
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products.filter(item => item.category === 'Phones')} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Macbooks
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products.filter(item => item.category === 'Macbooks')} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Watches
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products.filter(item => item.category === 'Watchs')} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
        <View style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
          }}>
            Accessories
          </Text>
        </View>
        <View style={{
          width: '100%',
          paddingHorizontal: 30
        }}>
          <FlatList showsHorizontalScrollIndicator={false} data={data.products.filter(item => item.category === 'Accessories')} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} horizontal extraData={{
            navigation
          }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
