import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
"Home"
>;

type Props ={
    navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation}:Props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BusCali</Text>
            
            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate("PlanearRuta")}
            >
                <Text style={styles.buttonText}>Ingresar Origen y Destino</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#1e90ff",
        padding: 15,
        borderRadius:8,
    },
    buttonText:{
        color :"white",
        fontWeight: "bold",
    },
});