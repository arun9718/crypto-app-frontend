import {View, Text} from 'react-native'
import CoinAvatar from './CoinAvatar';

import { Avatar } from "react-native-paper";
import Charts from './Charts';



const Card = ({idx, name, price, cap}) => {
    const nameContainerMarLeft = (80 - price.length - name.length) * -1; 
    console.log(nameContainerMarLeft) 

    return (
        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 15, justifyContent: 'space-between'}}>
            <View>
                <Text>{idx}</Text>
            </View>
            <View
            style={{marginLeft: -100}} 
            // style={{flex: 1, marginLeft: 20}}
            >
                <Avatar.Image size={28} source={require('../assets/bitcoin-icon.jpg')} />
        
                {/* <Avatar.Icon size={30} icon={require('../assets/bitcoin-icon.jpg')} /> */}
                {/* <CoinAvatar /> */}
            </View>
            <View style={{marginLeft: nameContainerMarLeft}}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
                <Text>{cap}</Text>
            </View>
            <View>
                <Text>{price}</Text>
            </View>
            {/* <View>
                <Charts width={50} height={40} />
            </View> */}
        </View>
    )
}

export default Card;