/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Account from '../screens/Home/Account';
import Cart from '../screens/Home/Cart';
import Category from '../screens/Home/Category';
import Landing from '../screens/Home/Landing';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { AuthStackParamList, CartStackParamList, CategoryStackParamList, HomeStackParamList, RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { MaterialIcons } from '@expo/vector-icons';
import ProductDetail from '../screens/Home/Landing/ProductDetail';
import Register2 from '../screens/Auth/Register2';
import All from '../screens/Home/Category/All';
import Payment from '../screens/Payment/Payment';
import EditAddress from '../screens/EditAddress/EditAddress';
import PaymentSuccess from '../screens/Payment/PaymentSuccess';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Home = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <Home.Navigator>
      <Home.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Home.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Home.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
      <Home.Group screenOptions={{ presentation: 'modal' }}>
        <Home.Screen name="Modal" component={ModalScreen} />
      </Home.Group>
    </Home.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Landing"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        headerShown: false,
        tabBarStyle: {
          height: 90,
          backgroundColor: '#F4FAFF'
        },
      }}>
      <BottomTab.Screen
        name="Landing"
        component={Landing}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CategoryStack"
        component={CategoryNavigator}
        options={{
          title: 'Category',
          tabBarIcon: ({ color }) => <TabBarIcon name="category" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Root = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Root.Navigator initialRouteName="Auth" screenOptions={{
      headerTransparent: true,
      headerShown: false,
    }}>
      <Root.Screen name="Auth" component={AuthNavigator}></Root.Screen>
      <Root.Screen name="Home" component={HomeNavigator}></Root.Screen>
    </Root.Navigator>
  )
}

const CartStack = createNativeStackNavigator<CartStackParamList>();
const CartNavigator = () => {
  return (
    <CartStack.Navigator initialRouteName="Cart" screenOptions={{
      headerTransparent: true,
      headerShown: false,
    }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Payment" component={Payment} />
      <CartStack.Screen name="EditAddress" component={EditAddress} />
      <CartStack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </CartStack.Navigator>
  )
}

const CategoryStack = createNativeStackNavigator<CategoryStackParamList>();
const CategoryNavigator = () => {
  return (
    <CategoryStack.Navigator initialRouteName="Category" screenOptions={{
      headerTransparent: true,
      headerShown: false,
    }}>
      <CategoryStack.Screen name="Category" component={Category} />
      <CategoryStack.Screen name="All" component={All} />
    </CategoryStack.Navigator>
  )
}

const Auth = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Auth.Navigator initialRouteName="Login" screenOptions={{
      headerTransparent: true,
      headerShown: false
    }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={Register} />
      <Auth.Screen name="Register2" component={Register2} />
    </Auth.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}
