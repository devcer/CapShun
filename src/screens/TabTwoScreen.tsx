import * as React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import QuoteCard, { Quote } from "../components/QuoteCard";
import { captions } from "../constants/MockData";

export default function TabTwoScreen() {
  const quotes = captions;

  return (
    <SafeAreaView style={styles.container}>
      {/* {quoteItems} */}
      <FlatList
        data={quotes}
        renderItem={({item})=> (
          <QuoteCard key={item.id} quote={item}/>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
