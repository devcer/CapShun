import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Picker from '@react-native-community/picker/js/Picker'
import { Moods } from '../constants/Text';

export default function TabOneScreen({navigation}) {
  const listItems = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];
  const [items, setItems] = useState([]);
  const [mood, setMood] = useState('');

  const moodItems = Moods.map((mood) => (
    <Picker.Item key={mood.label} label={mood.label} value={mood.label} />
  ));

  const onSelectedItemsChange = (selectedItems) => {
    setItems( selectedItems );
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={mood}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          setMood(itemValue)
        }>
        {moodItems}
      </Picker>
      <MultiSelect
        hideTags
        items={listItems}
        uniqueKey="id"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={items}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={ (text)=> console.log(text)}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#20C339"
        submitButtonText="Submit"
      />
      <Button
        title="Show Captions"
        onPress={showCaptions}
      />
    </SafeAreaView>
  );

  function showCaptions() {
    navigation.jumpTo('Quotes');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
