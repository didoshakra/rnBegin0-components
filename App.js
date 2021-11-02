import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import CoreComponents from './scr/components/CoreComponents';
import SectionListBasics from './App_SectionList_Platform 2';
// import SectionListBasics from './scr/components/SectionList_Platform 2';

const App = () => {
  return (
    // <ScrollView>
    <View>
      <CoreComponents />
      {/* <App_ListBasic /> */}
      {/* <FlatListBasics /> */}
      <SectionListBasics />
    </View>
    //  </ScrollView>
  );
};

export default App;
