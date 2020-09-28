import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Picker from '@react-native-community/picker/js/Picker';
import { Moods } from '../constants/Text';
import QuoteCard from '../components/QuoteCard';
import { captions } from '../constants/MockData';

export default function TabOneScreen() {
  const listItems = [
    {
      id: '92iijs7yta',
      name: 'Ondo',
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    },
    {
      id: '16hbajsabsd',
      name: 'Calabar',
    },
    {
      id: 'nahs75a5sg',
      name: 'Lagos',
    },
    {
      id: '667atsas',
      name: 'Maiduguri',
    },
    {
      id: 'hsyasajs',
      name: 'Anambra',
    },
    {
      id: 'djsjudksjd',
      name: 'Benue',
    },
    {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    },
    {
      id: 'suudydjsjd',
      name: 'Abuja',
    },
  ];
  const [items, setItems] = useState([]);
  const [mood, setMood] = useState('');
  const [hideCaptions, setHideCaptions] = useState(true);

  const moodItems = Moods.map((mood) => (
    <Picker.Item key={mood.label} label={mood.label} value={mood.label} />
  ));

  const onSelectedItemsChange = (selectedItems) => {
    setItems(selectedItems);
  };

  const quotes = captions;

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={mood}
        style={styles.picker}
        onValueChange={(itemValue) => setMood(itemValue)}
      >
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
        onChangeInput={(text) => console.log(text)}
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
      <Button title="Show Captions" onPress={showCaptions} />
      {!hideCaptions && (
        <FlatList
          style={styles.captionsList}
          data={quotes}
          renderItem={({ item }) => <QuoteCard key={item.id} quote={item} />}
        />
      )}
    </SafeAreaView>
  );

  function showCaptions() {
    // {navigation}
    // navigation.jumpTo('Quotes');
    setHideCaptions(false);
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
  captionsList: {
    paddingTop: 10,
  },
  picker: {
    height: 50,
    margin: 10,
    // flex: 1
  },
});
