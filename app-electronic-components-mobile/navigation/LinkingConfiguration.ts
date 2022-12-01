/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Home: {
        screens: {
          Root: {
            screens: {
              Landing: {
                screens: {
                  Landing: 'landing',
                },
              },
              CategoryStack: {
                screens: {
                  Category: 'category',
                  All: 'all',
                },
              },
              Account: {
                screens: {
                  Account: 'account',
                }
              },
              CartStack: {
                screens: {
                  Cart: 'cart',
                  Payment: 'payment',
                  EditAddress: 'edit-address',
                  PaymentSuccess: 'payment-success',
                }
              },
            },
          },
          ProductDetail: {
            screens: {
              ProductDetail: 'product-detail',
            }
          },
        }
      },
      Modal: 'modal',
      NotFound: '*',
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
          Register2: 'register2',
        }
      }
    },
  },
};

export default linking;
