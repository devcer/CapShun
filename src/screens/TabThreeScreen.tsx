import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

import QuoteCard from '../components/QuoteCard';
import { captions } from '../constants/MockData';

export default function TabThreeScreen() {
  const quotes = captions;
  return (
    <SafeAreaView style={styles.container}>
     <Text>
        Settings Screen
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
