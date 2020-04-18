import React, { useState } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image
} from 'react-native';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function logIn() {
    console.log("Logica para iniciar sesion")
    console.log(user)
    console.log(password)
  }

  return (
    <>
      <View
        style={styles.container}
      >
        <Image
          source={require('./src/assets/images/logo.png')}
          style={{
            width: 150,
            height: 150
          }}
        />
        <Text
          style={styles.textStyles}
          numberOfLines={2}
          ellipsizeMode={"tail"}
        >
          Bienvenido a mi app
        </Text>
        <TextInput
          style={styles.inputStyles}
          onChangeText={(userText) => setUser(userText)}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.inputStyles}
          autoCompleteType={'password'}
          secureTextEntry
          placeholder="Password"
          onChangeText={(passwordText) => setPassword(passwordText)}
        />
        <View
          style={styles.buttonStyles}
        >
          <Button
            onPress={() => logIn()}
            title="Iniciar sesion"
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: 'black',
    width: '100%',
    backgroundColor: '#1a237e',
  },
  inputStyles: {
    borderColor: '#3949ab',
    borderWidth: 4,
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  textStyles: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonStyles: {
    width: 300
  }
});
