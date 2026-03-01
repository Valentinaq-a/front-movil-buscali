import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrigenDestinoScreen from "../screens/OrigenDestinoScreen";
import { RootStackParamList } from "../types/navigation";
import MapaRutaScreen from "../screens/MapaRutaScreen";
import ListaRutasScreen from "../screens/ListaRutaScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="PlanearRuta" component={OrigenDestinoScreen}/>
                <Stack.Screen name="MapaRuta" component={MapaRutaScreen}/>
                <Stack.Screen name="ListaRutas" component={ListaRutasScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}