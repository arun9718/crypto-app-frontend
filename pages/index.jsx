/**
 * Page: Index
 * Contain all the components in one page
 */

import { ScrollView,View } from "react-native";

// This is an Index Page which will contain refernce for all the 
//components 

/**
 * Dummy Data for the index
 */
const COIN_DATA = [
    {name: 'BTC' , id: '1', price: '$37,473.01', cap: '729.93B'},
    {name: 'ETH' , id: '2', price: '$2,076.51', cap: '249.91B'},
    {name: 'BNB' , id: '3', price: '$235.67', cap: '35.73B'},
    {name: 'XRP' , id: '4', price: '$0.6123', cap: '32.76B'},
]

//component imports
import Charts from "../components/Charts";
import CoinAvatar from "../components/CoinAvatar";
import CoinList from "../components/CoinList";


const Index = () => {
    return(
        <View>
            <Charts width={300} height={200}/>
            <CoinList coinData={COIN_DATA}/>
        </View>
    );
};

export default Index;