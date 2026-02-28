import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

/* -----------AQUI SE MUESTRAN LAS RUTAS DISPONIBLES SEGUN LO QUE SE ESCRIBIO EN LOS CAMPOS DE ORIGEN Y DESTINO
AHORITA SOLO USA DATOS SIMULADOS -----------*/

type Props=NativeStackScreenProps<RootStackParamList, "ListaRutas">;

export default function ListaRutasScreen({route, navigation}: Props){
    const {origen, destino, rutas}= route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Rutas disponibles</Text>
            <Text>Origen:{origen}</Text>
            <Text>Destino:{destino}</Text>

            <FlatList
            data={rutas}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <TouchableOpacity
                style={styles.card}
                onPress={()=>
                    navigation.navigate("MapaRuta", {
                        origen,
                        destino,
                        rutaId: item.id,
                        rutaNombre:item.nombre,
                    })
                }
                >
                    <Text style={styles.cardTitle}>{item.nombre}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:10,
    },
    card:{
        padding:15,
        backgroundColor: "#f2f2f2",
        borderRadius:8,
        marginVertical:8,
    },
    cardTitle:{
        fontSize:16,
        fontWeight: "500",
    },
});