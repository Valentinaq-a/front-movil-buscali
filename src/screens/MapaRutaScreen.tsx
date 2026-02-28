import { View, Text, StyleSheet /*Dimensions*/ } from "react-native";
//import MapView, { Marker, Polyline } from "react-native-maps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useEffect, useState } from "react";


/*----------------ESTA ES LA PANTALLA QUE MOSTRARA EL MAPA REAL
AHORITA SOLO ETSA RENDERIZANDO INFORMACION TEXTUAL------------- */

type Props = NativeStackScreenProps<RootStackParamList, "MapaRuta">;

export default function MapaRutaScreen({ route }: Props) {

    const { origen, destino, rutaId, rutaNombre } = route.params;


    /* ---------ESTO DE AQUI ES SOLO UNA SIMULACION BASICA DE UN BUS EN MOVIMIENTO------- */
    const [busPosition, setBusPosition] = useState(0);
    const simulatedRoute = [
        { lat: 3.2600, lng: -76.5340 },
        { lat: 3.3000, lng: -76.5400 },
        { lat: 3.3500, lng: -76.5200 },
        { lat: 3.4516, lng: -76.5320 },
    ];

    useEffect(()=>{
        const interval=setInterval(()=>{
            setBusPosition((prev)=>{
                if (prev < simulatedRoute.length -1){
                    return prev +1;
                }
                return 0; //vuelve a empezar
            });
        }, 2000); //ACTUALIZA CADA DOS SEGUNDOS

        return()=> clearInterval(interval);
    },[]);


    /*//------------ESTAS SON COORDENADAS EJEMPLO-----------
ESTO LO INTENTE EN LA VERSION WEB PERO CLARO NO FUNCIONAA

    const routeCoordinates = [
        { latitude: 3.2600, longitude: -76.5340 },
        { latitude: 3.3000, longitude: -76.5400 },
        { latitude: 3.3500, longitude: -76.5200 },
        { latitude: 3.4516, longitude: -76.5320 },
    ];*/

    return (
        <view style={styles.container}>
            <Text style={styles.title}>Mapa de Rutas</Text>
            <Text>Origen: {origen}</Text>
            <Text>Destino:{destino}</Text>
            <Text>Ruta seleccionada:{rutaNombre}</Text>


    {/* ---------SIMULACION DE UN BUS EN MOVIMIENTO EN TIEMPO REAL 
    QUE ACTUALIZA CADA DOS SEGUNDOSS------------    */}

            <Text style={{marginTop:20, fontWeight:"bold"}}>
                Bus en movimiento
            </Text>

            <Text>
                Latitud:{simulatedRoute[busPosition].lat}
            </Text>

            <Text>
                Longitud: {simulatedRoute[busPosition].lng}
            </Text>


            <Text style={{ marginTop: 20 }}>
                aqui se renderizara elmapa
            </Text>

            {/* <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 3.35,
                    longitude: -76.53,
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                }}
            >
                <Polyline
                    coordinates={routeCoordinates}
                    strokeWidth={4}
                    strokeColor="blue"
                />

                <Marker coordinate={routeCoordinates[0]} title="Inicio" />
                <Marker
                    coordinate={routeCoordinates[routeCoordinates.length - 1]}
                    title="Fin"
                />
            </MapView>*/}
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 10,
    },
    //map: {
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height * 0.6,
    //},
});