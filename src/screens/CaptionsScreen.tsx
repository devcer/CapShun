import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import QuoteCard from '../components/QuoteCard';
import { captions } from '../constants/MockData';

export default function CaptionsScreen() {
  const quotes = captions;
  return (
    <SafeAreaView style={styles.container}>
      {/* {quoteItems} */}
      <FlatList
        data={quotes}
        renderItem={({ item }) => <QuoteCard key={item.id} quote={item} />}
      />
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
