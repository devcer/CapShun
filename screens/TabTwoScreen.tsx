import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import QuoteCard, { Quote } from "../components/QuoteCard";

export default function TabTwoScreen() {
  const quotes: Quote[] = [
    { mood: "Happy", tags: ["sunset", "beach"], quote: "Beach please!" },
    { mood: "Sad", tags: ["sunset", "mountains"], quote: "Not the end!" },
  ];

  const quoteItems = quotes.map((quote) => (
    <QuoteCard quote={quote}></QuoteCard>
  ));

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      {quoteItems}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

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
