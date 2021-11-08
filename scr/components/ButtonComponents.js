import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ButtonComponents = () => {
  const _onPressButton = () => {
    alert('You tapped the button!');
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        Button Components / Not styled
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={_onPressButton} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            alert('You tapped the button');
          }}
          title="Press Me"
          color="#841584"
        />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          style={styles.buttonStyle}
          onPress={_onPressButton}
          title="This looks great!"
        />
        <Button onPress={_onPressButton} title="OK!" color="#841584" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    margin: 5,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default ButtonComponents;
