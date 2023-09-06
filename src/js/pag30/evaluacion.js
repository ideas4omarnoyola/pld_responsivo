let intentosEvaluacion = 1;

class EvaluacionFinal{

    constructor(){
        this.contenedor = document.querySelector('#cont-evaluacion');
        this.aciertos = 0;
        this.preguntasRespuestas = [
            {
                pregunta: 'Persona de contacto entre la SCHP, CNSF y CCC, para la atención de obligaciones en materia de PLD/CFT.',
                respuestaA: 'Cualquier colaborador',
                respuestaB: 'Auditoría Interna',
                respuestaC: 'El Oficial de Cumplimiento',
                numero: 1,
                respuestaCorrecta: 'C'
            },
            {
                pregunta: 'Actos u operaciones que consisten en hacer que los fondos obtenidos a través de la comisión de delitos parezcan como el fruto de actividades legales y circulen sin problema en el sistema financiero.',
                respuestaA: 'Narcotráfico',
                respuestaB: 'Lavado de dinero',
                respuestaC: 'Tráfico de influencias',
                numero: 2,
                respuestaCorrecta: 'B'
            },
            {
                pregunta: 'Proceso por el que se obtienen los bienes o recursos de procedencia lícita o ilícita para presionar a los gobiernos generando terror o temor a la población.',
                respuestaA: 'Financiamiento al terrorismo',
                respuestaB: 'Operación inusual',
                respuestaC: 'Operación Relevante',
                numero: 3,
                respuestaCorrecta: 'A'
            },
            {
                pregunta: 'En esta etapa, se introducen las ganancias ilícitas al sistema financiero.',
                respuestaA: 'Colocación',
                respuestaB: 'Integración o reingreso',
                respuestaC: 'Estratificación o enmascaramiento',
                numero: 4,
                respuestaCorrecta: 'A'
            },
            {
                pregunta: 'Si un Cliente realiza una transacción superior a los $7,500 dólares en efectivo, corresponde a una operación:',
                respuestaA: 'Preocupante',
                respuestaB: 'Relevante',
                respuestaC: 'Inusual',
                numero: 5, 
                respuestaCorrecta: 'B'
            },
            {
                pregunta: 'El Comité de Comunicación y Control es el órgano colegiado encargado dentro de la Compañía para dictar y vigilar el cumplimiento de las medidas y procedimientos en materia de PLD/CFT.',
                respuestaA: 'Falso',
                respuestaB: 'Verdadero',
                numero: 6,
                respuestaCorrecta: 'B'
            },
            {
                pregunta: 'Obligación de integrar un expediente a través del agente o colaborador de la Compañía previo a celebrar un contrato de Seguro o Reaseguro.',
                respuestaA: 'Conocimiento del Cliente',
                respuestaB: 'Identificación del Cliente',
                respuestaC: 'Clasificación de grado de riesgo',
                numero: 7,
                respuestaCorrecta: 'B'
            },
            {
                pregunta: 'Son los factores que se consideran para clasificar el “Grado de Riesgo” de un de un Cliente: tipo de persona, fecha de nacimiento o constitución, nacionalidad, origen y destino de los recursos.',
                respuestaA: 'Falso',
                respuestaB: 'Verdadero',
                numero: 8,
                respuestaCorrecta: 'B'
            },
            {
                pregunta: 'Previo a establecer una relación comercial con el cliente, se debe celebrar una:',
                respuestaA: 'Reunión',
                respuestaB: 'Comida',
                respuestaC: 'Entrevista Personal',
                numero: 9,
                respuestaCorrecta: 'C'
            },
            {
                pregunta: 'Lapso por el cual se deberán conservar los expedientes de identificación del Cliente o Cedente, durante la relación comercial y a partir de que finalice el contrato. ',
                respuestaA: '3 años',
                respuestaB: '6 meses',
                respuestaC: '10 años ',
                numero: 10,
                respuestaCorrecta: 'C'
            },
            {
                pregunta: 'Proceso que permite identificar, medir y establecer mitigantes a los elementos e indicadores asociados a cada uno de los riesgos de LD/FT a los que se ve expuesta la Compañía.',
                respuestaA: 'Metodología de la Perspectiva o Metodología PR',
                respuestaB: 'Modelo de Clasificación del Cliente o Cedente',
                respuestaC: 'Metodología de Evaluación de Riesgos PLD/CFT',
                numero: 11,
                respuestaCorrecta: 'C'
            },
            {
                pregunta: '¿Cuáles son las fases de la Metodología de Evaluación de Riesgos PLD/CFT?',
                respuestaA: 'Diseño, implementación y valoración',
                respuestaB: 'Estudio, implementación y finalización',
                respuestaC: 'Diseño, valoración y proceso',
                numero: 12,
                respuestaCorrecta: 'A'
            },
            {
                pregunta: 'Algunas de las diferencias entre los delitos de Lavado de Dinero y Combate al Financiamiento al Terrorismo son: Propósito del delito, volumen de fondos y momento del delito.',
                respuestaA: 'Falso',
                respuestaB: 'Verdadero',
                numero: 13,
                respuestaCorrecta: 'B'
            },
            {
                pregunta: 'El Lavado de Dinero tiene como propósito legalizar las ganancias mientras que el del Financiamiento al Terrorismo es generar temor o terror.',
                respuestaA: 'Falso',
                respuestaB: 'Verdadero',
                numero: 14, 
                respuestaCorrecta: 'B'
            },
            {
                pregunta: '¿Es una de las Autoridades con facultades de inspección y vigilancia de las Aseguradoras y Reaseguradoras?',
                respuestaA: 'Comisión Nacional de Seguros y Fianzas (CNSF)',
                respuestaB: 'Secretaría de la Función Pública',
                respuestaC: 'Banco de México',
                numero: 15,
                respuestaCorrecta: 'A'
            }
        ]

        this.respuestas = [...this.preguntasRespuestas];
    }

    acierto(){
        this.aciertos++;
    }
}

function evaluacionFinal(){

    const evaluacion = new EvaluacionFinal;

    visualizarPreguntas(evaluacion);

    if(evaluacion.contenedor){
        evaluacion.respuestas.forEach(respuesta=>{
            const {numero, respuestaCorrecta} = respuesta;
            
            if(respuestaCorrecta === 'A'){
                respuestaA(evaluacion, numero);
            }
            else if(respuestaCorrecta === 'B'){
                respuestaB(evaluacion, numero);
            }
            else if(respuestaCorrecta === 'C'){
                respuestaC(evaluacion, numero);
            }
        });
    }

    //Evaluar
    calificacionFinal(evaluacion);

    //Reintentar
    reintentarCuestionario();

    //Cerrar Ventana
    cerrarVentana();
    
}

function respuestaA(evaluacion, numero) {  

    const respA = document.querySelector(`#respuestaA${numero}`);
    const respB = document.querySelector(`#respuestaB${numero}`);
    const respC = document.querySelector(`#respuestaC${numero}`);
    const bloquear = document.querySelector(`#bloquearR-${numero}`);

    if( respA && respB && bloquear){
        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoCorrecto');
            }, 2000);
        });
            
        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });
            
        if(respC){
            respC.addEventListener('click', function () {  
                respC.classList.add('respuesta-incorrecta');
                bloquearRespuesta(bloquear);
                setTimeout(()=>{
                    respC.classList.add('fondoIncorrecto');
                }, 2000);
            });
        }
    }

    
    
}

function respuestaB(evaluacion, numero) {  

    const respA = document.querySelector(`#respuestaA${numero}`);
    const respB = document.querySelector(`#respuestaB${numero}`);
    const respC = document.querySelector(`#respuestaC${numero}`);
    const bloquear = document.querySelector(`#bloquearR-${numero}`);

    if( respA && respB && bloquear){
        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });
    
        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });
        
        if(respC){
            respC.addEventListener('click', function () {  
                respC.classList.add('respuesta-incorrecta');
                bloquearRespuesta(bloquear);
                setTimeout(()=>{
                    respC.classList.add('fondoIncorrecto');
                }, 2000);
            });
        }
        
    }
    
}

function respuestaC(evaluacion, numero) {  

    const respA = document.querySelector(`#respuestaA${numero}`);
    const respB = document.querySelector(`#respuestaB${numero}`);
    const respC = document.querySelector(`#respuestaC${numero}`);
    const bloquear = document.querySelector(`#bloquearR-${numero}`);

    if( respA && respB && respC && bloquear){
        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });
         
        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        
        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoCorrecto');
            }, 2000);
        });
        
    }
}


function bloquearRespuesta(div){
    div.classList.add('activado');
}

function calificacionFinal(evaluacion){

    const btnEvaluar = document.querySelector('#evaluarCuestionario');
    const noPreguntas = 10;

    const intro = document.querySelector('#intro-evaluacion');
    const instruccion = document.querySelector('#instruccionEvaluacion');
    const btnInicio = document.querySelector('#cont-inicioEvaluacion');
    const contPreguntas = document.querySelector('#cont-preguntas');
    

    if(btnEvaluar){

        btnEvaluar.addEventListener('click', function(e){
            e.preventDefault();

            intro.classList.add('ocultar');
            instruccion.classList.add('ocultar');
            btnInicio.classList.add('ocultar');
            contPreguntas.classList.add('ocultar');
            btnEvaluar.parentElement.classList.add('ocultar');
    
            const promedio = parseInt((evaluacion.aciertos * 100) / noPreguntas);
            
            if(promedio >= 80 && intentosEvaluacion <= 2){
                const retro = document.querySelector('#retro-positiva');
                const calificacion = document.querySelector('#calificacion');

                retroFinal(retro);
                calificacion.textContent = promedio;
                
                //Registrar estado
                statusCurso('passed');
                asignarIntento(`${intentosEvaluacion} ${intentosEvaluacion > 1 ? 'intentos' : 'intento'}`);

                //registrar promedio
                asignarCalificación(promedio);
                asignarGrado('Aprobado');
            }
            else if (intentosEvaluacion < 2){
                const retro = document.querySelector('#retro-negativa');
                const calificacion = document.querySelector('#calificacion-parcial');
                calificacion.textContent = promedio;

                asignarIntento(`${intentosEvaluacion} ${intentosEvaluacion > 1 ? 'intentos' : 'intento'}`);

                intentosEvaluacion++;
                statusCurso('completed');
                asignarCalificación(promedio);
                retroFinal(retro);
            }
            else{
                const retro = document.querySelector('#retro-reprobado');
                const calificacion = document.querySelector('#calificacion-final');

                calificacion.textContent = promedio;

                asignarIntento(`${intentosEvaluacion} ${intentosEvaluacion > 1 ? 'intentos' : 'intento'}`);
                
                intentosEvaluacion++;
                statusCurso('completed');
                asignarCalificación(promedio);
                asignarGrado('Reprobado');
                retroFinal(retro);
            }   
        });
    }
}

function retroFinal(contenedor){
    contenedor.classList.add('visualizar');
    contenedor.style.opacity = 0;

    setTimeout(()=>{
        contenedor.style.opacity = 1;
    }, 300);
}