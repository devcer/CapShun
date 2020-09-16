import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { View, Text } from './Themed';


export default function QuoteCard() {
    return(
        <View style={styles.container}>
            <Text style={styles.moodText}>Mood: Happy</Text>
            <Text style={styles.tagsText}>Tags: Beach, Water, Swimming, Sunset</Text>
            <Text style={styles.quoteText}>Beaches be like!</Text>
            <Button
                title="Copy Quote"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <FontAwesome.Button name="copy" backgroundColor="#000" onPress={copyQuote()}>
                Copy
            </FontAwesome.Button>
        </View>
    );

    function copyQuote() {

    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#cccccc",
        borderWidth: 2
    },
    moodText: {
        fontSize: 18,
        padding: 5,
    },
    tagsText: {
        fontSize: 12,
        padding: 5,
    },
    quoteText: {
        fontSize: 16,
        padding: 5,
    },
    copyButton: {

    }
});
