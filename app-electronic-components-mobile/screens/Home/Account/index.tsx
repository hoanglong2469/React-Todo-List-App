import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import CButton from '../../../components/CButton';

const Account = () => {
  const user = useSelector((state: any) => state.user.data);
  console.log(user)
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#F4FAFF',
      paddingHorizontal: 30
    }}>
      <View style={{
        height: 80,
        width: '100%',
        backgroundColor: '#F4FAFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 30
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}>Account</Text>
      </View>
      <View style={{
        marginVertical: 20,
        backgroundColor: '#F4FAFF',
      }}>
        <Image style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          alignSelf: 'center',
        }} source={{ uri: encodeURI('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg') }} />
      </View>
      <Text style={{
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
      }}>@{user.username}</Text>
      <View style={{
        width: '100%',
        padding: 50,
        paddingTop: 20,
      }}>
        <View style={{
          width: '100%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          borderRadius: 20,
          backgroundColor: '#fff',
          padding: 20
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <Text style={{
              marginLeft: 20,
              fontSize: 14,
            }}>
              {user.information.email}
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Text style={{
              marginLeft: 20,
              fontSize: 14,
            }}>
              {user.information.phone}
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={{
              marginLeft: 20,
              fontSize: 14,
            }}>
              {user.information.address}
            </Text>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems: 'center',
          width: '100%',
          marginVertical: 20
        }}>
        <CButton title='Update profile' btnProps={undefined} backgroundColor={'#123'}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Account