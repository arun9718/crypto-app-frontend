import React from "react";
import { View,Text } from "react-native";
import { Appbar } from "react-native-paper";
import CoinList from "../components/CoinList";


const Markets = () => {
    return (


        <View>           
            <Appbar.Header>
                <Appbar.Content style={{marginRight:140}}title="Markets"/>
                <Appbar.Action icon="magnify" onPress={()=>{}} />
                <Appbar.Action icon="face-man-profile" onPress={()=>{}} />
            </Appbar.Header>
            <CoinList />
            
        </View>
    )
}

export default Markets;