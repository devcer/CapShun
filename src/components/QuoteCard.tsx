import React from 'react';
import { StyleSheet, Clipboard, ToastAndroid} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from './Themed';

export default function QuoteCard(props: {quote: Quote}) {

    return(
        <View style={styles.container}>
            <Text style={styles.moodText}>Mood: {props.quote.mood}</Text>
            <Text style={styles.tagsText}>Tags: {props.quote.tags.join(", ")}</Text>
            <Text style={styles.quoteText}>{props.quote.quote}</Text>
            <FontAwesome.Button name="copy" backgroundColor="#000" onPress={copyToClipboard}>
                Copy
            </FontAwesome.Button>
        </View>
    );
    function copyToClipboard() {
        Clipboard.setString(props.quote.quote);
        showToast("Copied to clipboard");
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#cccccc",
        borderWidth: 2,
        // flex: 1
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

export const showToast = (message: string) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};

export interface Quote {
    id: string,
    mood: string,
    tags: string[],
    quote: string
}