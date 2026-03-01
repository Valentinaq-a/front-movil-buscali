export type RootStackParamList ={
    Home: undefined;
    PlanearRuta:undefined;
    Login: undefined;
    Register: undefined;
    Profile: undefined;
    ListaRutas:{
        origen: string,
        destino: string,
        rutas:{ id: string; 
                nombre: string}[];
    };
    MapaRuta:{
        origen: string;
        destino: string;
        rutaId: string;
        rutaNombre: string;
    };
};