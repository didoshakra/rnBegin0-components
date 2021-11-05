import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import CoreComponents from './scr/components/CoreComponents';
import ScrollViewComp from './scr/components/ScrollViewComp';
// import FlatListBasics from './scr/components/FlatListBasics';
import SectionListBasics from './scr/components/SectionListBasics';

const App = () => {
  return (
    // <ScrollView>
    <View>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        ReactNative Components
      </Text>
      <CoreComponents />
      <ScrollViewComp />
      {/* <FlatListBasics /> */}
      <SectionListBasics />
    </View>
    // </ScrollView>
  );
};

export default App;
