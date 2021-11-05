import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 40,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: 'firebrick', textAlign: 'center'}}>
        FlatListBasics.js
      </Text>
      <FlatList
        data={[
          {key: 'Devin1'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'John1'},
          {key: 'Jillian1'},
          {key: 'Jimmy1'},
          {key: 'Julie1'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
