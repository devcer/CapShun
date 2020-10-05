import React from 'react';
import { StyleSheet} from 'react-native';
import { View, Text } from './Themed';
import { template } from '@babel/core';
import SelectedItem from '../components/SelectedItem';

export default function SelectedList(props: { selected: string[] }) {
    return (
        <View style={styles.container}>
            {makeSelected()}
        </View>
      
    );

    function makeSelected() {
        return props.selected.map(item => {
            return (
                <SelectedItem selected = {item.name}/>
            )
        })
    }
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: "wrap",
        padding: 3
    },
  });