//SectionList/https://https://reactnative.dev/docs/using-a-listview
//Platform/https://reactnative.dev/docs/platform-specific-code
import React from 'react';
import {Platform, SectionList, StyleSheet, Text, View} from 'react-native';

//+Platform

// const Component = Platform.select({
//   ios: () => require('ComponentIOS'),
//   android: () => require('ComponentAndroid'),
// })();
// <Component />;

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}
//-Platform

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    ...Platform.select({
      ios: {backgroundColor: 'red'},
      // android: {backgroundColor: 'green'},
      android: {backgroundColor: 'yellow'},
      default: {backgroundColor: 'blue'}, // other platforms, web for example
    }),
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'DRA', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'JRA',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default SectionListBasics;
