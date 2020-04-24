import React from 'react';
import { View, FlatList } from 'react-native';
import Item from '../../components/Item';

const DATA = [
    {
        id: 1,
        title: 'this is my 1 title',
    },
    {
        id: 2,
        title: 'this is my 2 title',
    },
    {
        id: 3,
        title: 'this is my 3 title',
    },
    {
        id: 4,
        title: 'this is my 4 title',
    },
    {
        id: 5,
        title: 'this is my 5 title',
    },
    {
        id: 6,
        title: 'this is my 6 title',
    },
    {
        id: 7,
        title: 'this is my 7 title',
    },
    {
        id: 8,
        title: 'this is my 8 title',
    },
    {
        id: 9,
        title: 'this is my 9 title',
    }
]

function Home() {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home;
