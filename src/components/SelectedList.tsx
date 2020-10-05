import React from 'react';
import { StyleSheet} from 'react-native';
import { View, Text } from './Themed';
import { template } from '@babel/core';
import SelectedItem from '../components/SelectedItem';

export default function SelectedList(props: { selected: any, onSelectedItemsChange: Function }) {
    return (
        <View style={styles.container}>
            {makeSelected()}
        </View>
      
    );
    function onPress(item: Object) {
        
        props.onSelectedItemsChange(props.selected.filter(i => i.id != item.id).map(i => i.id))
        
    }
        

    function makeSelected() {
        return props.selected.map(item => {
            return (
                <SelectedItem 
                selected = {item} 
                onClick = {item => onPress(item)}
                key = {item.id}
                />
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