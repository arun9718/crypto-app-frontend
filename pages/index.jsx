import { ScrollView,View } from "react-native";

// This is an Index Page which will contain refernce for all the 
//components 


//component imports
import Charts from "../components/Charts";
import CoinList from "../components/CoinList";


const Index = () => {
    return(
        <View>
            <Charts/>
            <CoinList/>
        </View>
    );
};

export default Index;