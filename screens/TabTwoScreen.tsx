import * as React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import QuoteCard, { Quote } from "../components/QuoteCard";

export default function TabTwoScreen() {
  const quotes: Quote[] = [
    { id: '1', mood: "Happy", tags: ["sunset", "beach"], quote: "Beach please!" },
    { id: '2', mood: "Sad", tags: ["sunset", "mountains"], quote: "Not the end!" },
    { id: '3', mood: "Neutral", tags: ["calm", "mountains"], quote: "Live the moment" },
    { id: '4', mood: "Happy", tags: ["sunset", "beach"], quote: "Beach please!" },
    { id: '5', mood: "Sad", tags: ["sunset", "mountains"], quote: "Not the end!" },
    { id: '6', mood: "Neutral", tags: ["calm", "mountains"], quote: "Live the moment" },
    { id: '7', mood: "Happy", tags: ["sunset", "beach"], quote: "Beach please!" },
    { id: '8', mood: "Sad", tags: ["sunset", "mountains"], quote: "Not the end!" },
    { id: '9', mood: "Neutral", tags: ["calm", "mountains"], quote: "Live the moment" },
  ];

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
