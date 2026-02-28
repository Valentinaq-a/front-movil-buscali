export const buscarRutas = async (origen: string, destino:string)=> {
    console.log("Consultando al back...");

    //------esto es una simulacion de respuesta delservidor-------
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({
                success: true,
                rutas: [
                    {id:"1",nombre:"ruta centro"},
                    {id:"2",nombre:"ruta norte"},
                ],
            });
        },1500);
    });
};