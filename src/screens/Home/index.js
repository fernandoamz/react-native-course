import React, {useState} from 'react';
import {View, FlatList, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTitle, deleteTitle} from '../../actions/titles';
import Item from '../../components/Item';
import {uuid} from 'uuidv4';

function Home(props) {
  const [title, setTitle] = useState('');

  handleAddBooks = () => {
    const sendTitle = {
      title: title,
      id: uuid(),
    };

    props.addBook(sendTitle);
  };

  handleDeleteBook = id => {
    console.log(id);
    props.deleteTitle(id);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <Button title="ADD" onPress={() => handleAddBooks()} />
      </View>
      <FlatList
        data={props.titles.titles}
        renderItem={({item}) => (
          <Item
            title={item.title}
            onPressDelete={() => handleDeleteBook(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
});

const mapStateToProps = state => {
  return {
    titles: state.titles,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBook: title => {
      dispatch(addTitle(title));
    },
    deleteTitle: id => {
      dispatch(deleteTitle(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
