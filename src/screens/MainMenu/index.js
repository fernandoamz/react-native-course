import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function MainMenu({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.navigate('Users')}>
          Users
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Counter')}>
          Counter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('HandleEvents')}>
          HandleEvents
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.navigate('Home')}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('TopicStyle')}>
          TopicStyle
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'navy',
    borderRadius: 10,
    margin: 15,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainMenu;
