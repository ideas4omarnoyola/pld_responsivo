// *Conectarse al LMS
window.onload = function(){    
    calcularTiempo();

    const initialized = initializeCommunication();
    if (initialized === "true") {
        // La comunicación se ha iniciado correctamente
        // Puedes continuar con tu curso
        console.log('Conectado con el LMS corretamente');
        verificarLocation();
        calcularTiempo();
        storeDataValue("cmi.score.scaled", .85);
    } else {
        // La comunicación no se pudo iniciar, maneja el error
        console.log('Ha habído un error');
    }
}

// *Desconectarse del LMS
window.onunload = function(){
    const terminated = terminateCommunication();
    if (terminated === "true") {
        registrarTiempo(tiempo);
        storeDataValue("cmi.exit", "normal");
        // La comunicación se ha terminado correctamente
    } else {
        // La comunicación no se pudo terminar, maneja el error
    }
}

function statusCurso(estado){
    storeDataValue("cmi.completion_status", estado);
}

function asignarCalificación(calificacion){
    calificacion = calificacion / 100;
    storeDataValue("cmi.score.scaled", calificacion);
}

function registrarTiempo(tiempo){
    storeDataValue("cmi.session_time", tiempo);
}

function asignarLocation(){
    storeDataValue('cmi.location', noPagina);
}

function asignarIntento(comentario) {
    storeDataValue("cmi.comments_from_learner.n.comment", comentario);
}

function asignarGrado(grado) {
    storeDataValue('cmi.success_status', grado);
}

function verificarLocation(){
    const status = retrieveDataValue('cmi.completion_status');

    switch(status){
        case 'incomplete':
            const location = retrieveDataValue('cmi.location');
            noPagina = location;
            break;
        case 'completed':
            noPagina = 29;
            break;
        default:
            noPagina = 0;
            break;
    }

    visualizarPagina();
    selectOpcion(noPagina);
}