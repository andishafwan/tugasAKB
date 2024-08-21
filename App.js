import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App () {

    let [fontsLoaded] = useFonts ({
        "Inter-Black" : require("./assets/font/Inter-Black-900.otf"),
        "Inter-Black-Italic" : require("./assets/font/Inter-Black-Italic-900.otf")
    });

    if(!fontsLoaded) {
        return <Text>Font Belum dimuat</Text>;
    }
    return (
        <View style = {styles.container}>
            <Text>Font Biasa</Text>
            <Text style = {{fontFamily:"Inter-Black"}}>Font Black Inter</Text>
            <Text style = {{fontFamily:"Inter-Black-Italic"}}>Font Black Italic Inter</Text>
            <Text style = {{fontFamily:"Inter-Black-Italic"}}>Andi Shafwan</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff' ,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
