export type RootStackParamList ={
    Home: undefined;
    PlanearRuta:undefined;
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