import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {incrementCount, decrementCount} from '../../actions/incrementer';

function Counter(props) {
  return (
    <View style={styles.centerView}>
      <Text style={styles.text}>{props.counter.counter}</Text>
      <Button
        title="Increment"
        onPress={() => props.incerement(props.counter.counter)}
      />
      <Button
        title="Decrement"
        onPress={() => props.decrement(props.counter.counter)}
      />
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
