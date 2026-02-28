import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrigenDestinoScreen from "../screens/OrigenDestinoScreen";
import { RootStackParamList } from "../types/navigation";
import MapaRutaScreen from "../screens/MapaRutaScreen";
import ListaRutasScreen from "../screens/ListaRutaScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PlanearRuta" component={OrigenDestinoScreen}/>
                <Stack.Screen name="MapaRuta" component={MapaRutaScreen}/>
                <Stack.Screen name="ListaRutas" component={ListaRutasScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}