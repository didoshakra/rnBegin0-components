import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CoreComponents from './scr/components/CoreComponents';
import ScrollViewComponents from './scr/components/ScrollViewComponents';
// import FlatListComponents from './scr/components/FlatListComponents';
import SectionListBasics from './scr/components/SectionListBasics';
import ButtonComponents from './scr/components/ButtonComponents';
import SwitchComponents from './scr/components/SwitchComponents';
import TouchablesComponents from './scr/components/TouchablesComponents';
import HomeScreen from './scr/screen/HomeScreen';
import ProfileScreen from './scr/screen/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ScrollView style={styles.platformContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <View>
          <Text style={{textAlign: 'center', fontSize: 28, color: 'red'}}>
            ReactNative Components
          </Text>
          <CoreComponents />
          <ButtonComponents />
          <SwitchComponents />
          <TouchablesComponents />
          <ScrollViewComponents />
          {/* <FlatListComponents /> */}
          {/* <SectionListBasics /> */}
        </View>
      </ScrollView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  platformContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        // backgroundColor: 'green',
        // backgroundColor: 'yellow',
        backgroundColor: 'lightgoldenrodyellow',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});

export default App;
