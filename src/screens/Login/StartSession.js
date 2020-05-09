import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

function StartSession({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorSession, setErrorSession] = useState(false);
  const [errorApp, setErrorApp] = useState(false);

  function logIn() {
    if (user !== '' && password !== '') {
      axios
        .post('https://reqres.in/api/login', {
          email: user,
          password: password,
        })
        .then(response => {
          const {token} = response.data;

          if (token) {
            storeData(token);
            setUser('');
            setPassword('');
            navigation.navigate('MainMenu');
          } else {
            setErrorApp(true);
            console.log('error');
          }
        })
        .catch(error => {
          setErrorApp(true);
          return error;
        });
    } else {
      setErrorSession(true);

      setTimeout(() => {
        setErrorSession(false);
      }, 5000);
    }
  }

  storeData = async token => {
    try {
      await AsyncStorage.setItem('@stored_token', token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text
          style={styles.textStyles}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          Bienvenido a mi app
        </Text>
        <TextInput
          style={styles.inputStyles}
          onChangeText={userText => setUser(userText)}
          value={user}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.inputStyles}
          autoCompleteType={'password'}
          secureTextEntry
          value={password}
          placeholder="Password"
          onChangeText={passwordText => setPassword(passwordText)}
        />
        <View style={styles.buttonStyles}>
          <Button onPress={() => logIn()} title="Iniciar sesion" />
        </View>
        {errorSession ? (
          <TouchableOpacity
            style={styles.errorSession}
            onPress={() => setErrorSession(false)}>
            <View style={styles.subContainerErrorSession}>
              <Text>Llenar usuario y contraseña</Text>
            </View>
          </TouchableOpacity>
        ) : null}

        {errorApp ? (
          <TouchableOpacity
            style={styles.errorApp}
            onPress={() => setErrorApp(false)}>
            <View style={styles.subContainerErrorSession}>
              <Text>Ha ocurrido un error</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
}

export default StartSession;

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
    backgroundColor: 'white',
  },
  textStyles: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyles: {
    width: 300,
  },
  errorSession: {
    margin: 20,
    backgroundColor: 'yellow',
    width: 250,
    height: 50,
    borderRadius: 10,
  },
  errorApp: {
    margin: 20,
    backgroundColor: 'red',
    width: 250,
    height: 50,
    borderRadius: 10,
  },
  subContainerErrorSession: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
