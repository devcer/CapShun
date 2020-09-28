import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Quotes: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Settings: {
            screens: {
              TabThreeScreen: 'three',
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
