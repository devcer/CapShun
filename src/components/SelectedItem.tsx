import React from 'react';
import { StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from './Themed';

export default function SelectedItem(props: { selected: string }) {
    return (
      <View style={styles.container}>
        <Text style={styles.selectedText}>{props.selected}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      borderColor: '#cccccc',
      borderWidth: 2,
    },
    selectedText: {
      fontSize: 16,
      padding: 5,
    },
    copyButton: {},
  });