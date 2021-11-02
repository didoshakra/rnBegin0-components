//CoreComponents//https://reactnative.dev/docs/intro-react-native-components
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  return (
    <ScrollView>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        CoreComponents
      </Text>
      <View>
        <Text style={{fontSize: 18, color: 'green'}}>
          ScrollView+View+Text+Image+TextInput+TouchableOpacity:
        </Text>
        <Text style={{fontSize: 18, color: 'firebrick'}}>
          CoreComponents.js
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
          borderColor: 'gray',
          borderWidth: 2,
        }}>
        <TextInput
          style={{
            fontSize: 15,
            color: 'blac',
          }}
          placeholder="Type here to translate!/ Введіть тут для перекладу"
          defaultValue={input}
          keyboardType="numeric"
          // onChangeText={(event) => console.log(event)}
          onChangeText={event => setInput(event)}
          // value={input}
        />

        <TouchableOpacity
          // style={styles.iconContainer}
          onPress={() => Alert.alert('Ви ввели', input)}>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <Text style={{padding: 10, fontSize: 22}}>
        {input
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </ScrollView>
  );
};

export default App;
