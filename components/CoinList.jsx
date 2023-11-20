import React, {useState} from 'react';
import { List } from "react-native-paper";
import { FlatList, Text } from "react-native";


// Temporary Data part 

const CoinList = () => {
    const [ data, setData ] = useState([
        {name: 'Bitcoin' , id: '1'},
        {name: 'Bitcoin' , id: '2'},
        {name: 'Bitcoin' , id: '3'},
        {name: 'Bitcoin' , id: '4'},
    ])

    return (
        <FlatList
            keyExtractor={(item)=> item.id}
            data={data}
            renderItem={({ item }) => (
                <Text> {item.name}</Text>
            )} />

    );
};

export default CoinList;