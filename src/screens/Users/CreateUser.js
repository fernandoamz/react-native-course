import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

function CreateUser() {
  const [userName, setUserName] = useState('');
  const [job, setJob] = useState('');
  const [response, setResponse] = useState('');
  const [indicator, setIndicator] = useState(false);

  sendDataToBackend = () => {
    setIndicator(true);

    axios
      .post('https://reqres.in/api/users', {
        name: userName,
        job: job,
      })
      .then(response => {
        setResponse(JSON.stringify(response.data));
        setIndicator(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Crear usuarios</Text>
      <View style={styles.marginTextInput}>
        <TextInput
          placeholder="Usuario"
          style={styles.textInput}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={styles.marginTextInput}>
        <TextInput
          placeholder="Contraseña"
          style={styles.textInput}
          value={job}
          onChangeText={text => setJob(text)}
        />
      </View>
      <Button
        title="Enviar"
        style={styles.button}
        onPress={() => sendDataToBackend()}
      />
      <Text>Response: </Text>
      {indicator ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      {response ? (
        <View style={styles.response}>
          <Text>{response}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  marginTextInput: {
    margin: 10,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  button: {
    width: 250,
  },
  response: {
    height: 150,
    margin: 30,
    backgroundColor: 'white',
  },
});

export default CreateUser;
