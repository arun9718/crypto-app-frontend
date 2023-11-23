import React from "react";
import { Avatar } from "react-native-paper";
import { View } from "react-native";


const CoinAvatar = () => {
    return (
        // <View>
            <Avatar.Image size={28} source={require('../assets/bitcoin-icon.jpg')} />
        // </View>
    )
};

export default CoinAvatar;