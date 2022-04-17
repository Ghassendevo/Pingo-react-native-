import react from "react";
import { Text, View, Image } from "react-native";
import pingoLogo from "./assets/6546.png"
import styles from "./style";

const Welcome = () => {
    return (
        <View style={styles.container}>
           <Image source={pingoLogo} style={{width:250, height:50}} />
        </View>
    )
}
export default Welcome;