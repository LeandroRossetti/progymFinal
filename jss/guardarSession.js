function guardar (parametroA, valorA){

    sessionStorage.setItem(parametroA, valorA.toString());


    console.log('Datos guardados con exito');

}