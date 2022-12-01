import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useMemo, useEffect } from "react";
import { FlatList, SafeAreaView, Image, Text, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import CCategory from "../../../../components/CCategory";
import CProduct from "../../../../components/CProduct";
import data from "../../../../mock-data";
import navigation from "../../../../navigation";


const All = ({route, navigation}: any) => {
  const {item} = route.params;
  const logo = require('../../../../assets/images/horizontal-logo.png');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>(data.products);
  const numberCollumns = 2;

  useEffect(() => {
    console.log(item)
    if (searchInput.length > 0) {
      setSearchResult(data.products.filter((product: any) => product.name.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      setSearchResult(data.products.filter((product: any) => {
        const brand = item.name.split(' ')[0];
        const category = item.name.split(' ')[1] || null;
        return product.brand === brand && (category ? product.category === category : true);
      }));
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
          zIndex: 100
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
          {item.name}
        </Text>
        <TouchableOpacity>
          {/* <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            SEE ALL
          </Text> */}
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        paddingHorizontal: 30
      }}>
        <FlatList numColumns={numberCollumns} showsHorizontalScrollIndicator={false} data={searchResult} renderItem={({ item }) => <CProduct item={item} navigation={navigation} />} keyExtractor={(item) => item.name} />
      </View>
    </SafeAreaView>
  )
}

export default All