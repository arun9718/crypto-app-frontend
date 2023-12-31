import React, {useState} from 'react';

import { View } from 'react-native';
import { List } from "react-native-paper";
import { FlatList, Text } from "react-native";

import Card from './Card'


import { DataTable } from 'react-native-paper';

// Temporary Data part 

// const CoinList = ({coinData}) => {
//     const [ data, setData ] = useState(coinData);


//     return (
//         <FlatList
//             keyExtractor={(item)=> item.id}
//             data={coinData}
//             renderItem={({ item }) => (
//                 <Card idx={0} name={item.name} price={item.price} cap={item.cap}/>
//             )} />

//     );
// };

// export default CoinList;


const CoinList = () => {
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPageList] = React.useState([10]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
      numberOfItemsPerPageList[0]
    );
  
    const [items] = React.useState([
     {
       key: 1,
       name: 'BTC',
       price: 356,
       cap: 16,
     },
     {
       key: 2,
       name: 'ETH',
       price: 262,
       cap: 16,
     },
     {
       key: 3,
       name: 'USDT',
       price: 159,
       cap: 6,
     },
     {
       key: 4,
       name: 'XRP',
       price: 305,
       cap: 3.7,
     },
     {
        key: 1,
        name: 'BTC',
        price: 356,
        cap: 16,
      },
      {
        key: 2,
        name: 'ETH',
        price: 262,
        cap: 16,
      },
      {
        key: 3,
        name: 'USDT',
        price: 159,
        cap: 6,
      },
      {
        key: 4,
        name: 'XRP',
        price: 305,
        cap: 3.7,
      },
    ]);
  
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>MarketCap</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>24h%</DataTable.Title>
        </DataTable.Header>
  
        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>
                <View>
                    <Text>BTC</Text>
                    {/* <Card idx={1} name='BTC' pri/ce='100' cap='100B'/> */}
                </View>
            </DataTable.Cell>
            <Card idx={item.key} name={item.name} price='100' cap='100B'/>
            {/* <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
            <DataTable.Cell numeric>{item.fat}</DataTable.Cell> */}
          </DataTable.Row>
        ))}
  
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
        //   numberOfItemsPerPageList={numberOfItemsPerPageList}
        //   numberOfItemsPerPage={itemsPerPage}
        //   onItemsPerPageChange={onItemsPerPageChange}
        //   showFastPaginationControls
        //   selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    );
  };
  
  export default CoinList;