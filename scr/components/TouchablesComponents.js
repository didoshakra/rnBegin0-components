import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const TouchablesComponents = () => {
  const _onPressButton = () => {
    alert('You tapped the button!');
  };

  const _onLongPressButton = () => {
    alert('You long-pressed the button!');
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        Touchable Components / Styled Button
      </Text>
      <TouchableHighlight
        style={styles.button}
        onPress={_onPressButton}
        underlayColor="#a1ffc3">
        <Text style={styles.buttonText}>
          TouchableHighlight / Фон перегляду затемнений+колір підкладка
        </Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={_onPressButton} style={styles.button}>
        {/* <View style={styles.button}> */}
        <Text style={styles.buttonText}>
          TouchableOpacity / Зменшує непрозорість кнопки
        </Text>
        {/* </View> */}
      </TouchableOpacity>
      <TouchableNativeFeedback
        onPress={_onPressButton}
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : ''
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback/ Реакції поверхні чорнила (Android only)
            {Platform.OS !== 'android' ? '(Android only)' : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={_onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={_onPressButton}
        onLongPress={_onLongPressButton}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Touchable with Long Press / Тривалі натискання
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    // backgroundColor: '#2196F3',
    backgroundColor: 'green',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
export default TouchablesComponents;
