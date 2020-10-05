import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from './Themed';

export default function SelectedItem(props: { selected: string}) {
    return (
      <TouchableOpacity  style={styles.container}>
        <Text>{props.selected} <FontAwesome name="times"/></Text>
      </TouchableOpacity >
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      padding:5,
      margin:5,
      borderRadius: 20,
      borderWidth: 2
    },
  });