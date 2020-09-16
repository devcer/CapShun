import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { View, Text } from './Themed';


export default function QuoteCard(props: {quote: Quote}) {
    return(
        <View style={styles.container}>
            <Text style={styles.moodText}>Mood: {props.quote.mood}</Text>
            <Text style={styles.tagsText}>Tags: {props.quote.tags.join(", ")}</Text>
            <Text style={styles.quoteText}>{props.quote.quote}</Text>
            {/* <Button
                title="Copy Quote"
                onPress={() => Alert.alert('Simple Button pressed')}
            /> */}
            <FontAwesome.Button name="copy" backgroundColor="#000" onPress={copyQuote()}>
                Copy
            </FontAwesome.Button>
        </View>
    );

    function copyQuote() {
        // alert("copyQuote")
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#cccccc",
        borderWidth: 2,
        flex: 1
    },
    moodText: {
        fontSize: 16,
        padding: 5,
    },
    tagsText: {
        fontSize: 12,
        padding: 5,
    },
    quoteText: {
        fontSize: 20,
        padding: 5,
    },
    copyButton: {

    }
});

export interface Quote {
    mood: string,
    tags: string[],
    quote: string
}