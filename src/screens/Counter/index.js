import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {incrementCount, decrementCount} from '../../actions/incrementer';

function Counter(props) {
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    if (autoIncrement) {
      setTimeout(() => {
        props.incerement(props.counter.counter);
      }, 100);
    }
  });

  return (
    <View style={styles.centerView}>
      <Text style={styles.text}>{props.counter.counter}</Text>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => props.incerement(props.counter.counter)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={() => props.decrement(props.counter.counter)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Auto Increment"
          onPress={() => setAutoIncrement(!autoIncrement)}
        />
        <Text>{autoIncrement.toString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
  },
});

const mapStateProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incerement: counter => {
      dispatch(incrementCount(counter));
    },

    decrement: counter => {
      dispatch(decrementCount(counter));
    },
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(Counter);
