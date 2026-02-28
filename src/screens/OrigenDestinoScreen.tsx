import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { useState } from "react"
import { buscarRutas } from "../services/routeService";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { ActivityIndicator } from "react-native";

/*---------------PANTALLA QUE RECIBE INFO DE ORIGEN Y DESTINO--------------
RECIBE LA NAVEGACION Y ENVIA LOS DATOS A A LISTARUTASCREEN--------------*/

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "PlanearRuta"     
>;

export default function OrigenDestinoScreen({ navigation }: { navigation: NavigationProp }) {
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [loading, setLoading] = useState(false);
    

/* ---------ESTA FUNCION VALIDA LOS CAMPOS Y VA A LA PANTALLA DE LISTA DE RUTAS
AQUI SE INTEGRARA LA CONSULTA AL BACKK--------------------- */

    const handleBuscar = async () => {
        if (!origen.trim() || !destino.trim()) {
            console.log("campos vacios");
            return;
        }

        try {
            setLoading(true);

            const response: any = await buscarRutas(origen, destino);

            /*console.log("Origen:", origen);
            console.log("Destino:", destino)*/

            if (response.success) {
                navigation.navigate("ListaRutas", {
                    origen,
                    destino,
                    rutas: response.rutas,
                });
            }
        } catch (error) {
            console.log("error consultando rutas", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Planear Ruta</Text>

            <TextInput
                placeholder="Ingresa tu origen"
                value={origen}
                onChangeText={setOrigen}
                style={styles.input}
            />

            <TextInput
                placeholder="Ingresa tu destino"
                value={destino}
                onChangeText={setDestino}
                style={styles.input}
            />

            <TouchableOpacity
                style={[styles.button, loading && { opacity: 0.06 }]}
                onPress={handleBuscar}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={styles.buttonText}>Buscar Ruta</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#1e90ff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});