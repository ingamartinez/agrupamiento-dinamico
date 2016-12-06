var url;
$(document).ready(function () {

    url={
        //Recursos usado para Segmentos y Ubicación Geografica

        //Primer Grafico y Primer Mapa
        firstChartSegmentosGrafico:'http://localhost:3000/firstChart',
        //Segund Grafico y Segundo Mapa
        secondChartSegmentosGrafico:'http://localhost:3000/secondChart',
        //Tercer Grafico y Tercer Mapa
        thirdChartSegmentosGrafico:'http://localhost:3000/historyChart',

        //Primer Grafico y Primer Mapa
        firstMapUbicacionGeografica:'http://localhost:3000/firstChart',
        //Segund Grafico y Segundo Mapa
        secondMapUbicacionGeografica:'http://localhost:3000/secondChart',
        //Tercer Grafico y Tercer Mapa
        thirdMapUbicacionGeografica:'http://localhost:3000/historyChart',

        //Conductual
        //Usuarios
        listAllUsers:'http://localhost:3000/usuarios', //En detalle-grafica.js linea 51 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/usuarios/{idUsuario}
        listTagSegmento:'http://localhost:3000/firstChart', //En detalle-grafica.js linea 70 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/firstChart/{idSegmento}
        //segmentos
        listAllUsersHistory:'http://localhost:3000/usuarios', //En detalle-grafica.js linea 120 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/usuarios/{idUsuario}
        listTagSegmentoHistory:'http://localhost:3000/firstChart', //En detalle-grafica.js linea 70 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/firstChart/{idSegmento}


        //Psicografia
        //Personalidad
        chartPersonalidad:'http://localhost:3000/chartPersonalidad',//En psicografia.js linea 69 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartPersonalidad/{id}
        //Estilo de Vida
        chartEstiloVida:'http://localhost:3000/chartEstiloVida',//En psicografia.js linea 149 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartEstiloVida/{id}
        //Valores
        chartValores:'http://localhost:3000/chartValores',//En psicografia.js linea 229 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartValores/{id}
        //Clase Social
        chartClaseSocial:'http://localhost:3000/chartClaseSocial',//En psicografia.js linea 309 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartClaseSocial/{id}

        //Historial
        //Personalidad
        chartPersonalidadHistory:'http://localhost:3000/chartPersonalidad',//En psicografia.js linea 397 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartPersonalidad/{id}
        //Estilo de Vida
        chartEstiloVidaHistory:'http://localhost:3000/chartEstiloVida',//En psicografia.js linea 480 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartEstiloVida/{id}
        //Valores
        chartValoresHistory:'http://localhost:3000/chartValores',//En psicografia.js linea 563 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartValores/{id}
        //Clase Social
        chartClaseSocialHistory:'http://localhost:3000/chartClaseSocial',//En psicografia.js linea 646 se asume que es un servicio REST y se filtra por ID con la ruta ficticia http://localhost:3000/chartClaseSocial/{id}


        //Demografia
        //Mapa Demografia
        mapDemografia:'http://localhost:3000/firstChart',

        //Edad
        chartEdad:'http://localhost:3000/chartEdad',
        //Sexo
        chartSexo:'http://localhost:3000/chartSexo',
        //Estado Civil
        chartEstadoCivil:'http://localhost:3000/chartEstadoCivil',
        //Chart Estudio
        chartEstudio:'http://localhost:3000/chartEstudio',
        //Chart Ocupacion
        chartOcupacion:'http://localhost:3000/chartOcupacion',
        //Chart Ingresos
        chartIngresos:'http://localhost:3000/chartIngresos/',

        //Historial
        //Map Demografia Historial
        mapDemografiaHistory:'http://localhost:3000/firstChart',
        //Edad
        chartEdadHistory:'http://localhost:3000/chartEdad',
        //Sexo
        chartSexoHistory:'http://localhost:3000/chartSexo',
        //Estado Civil
        chartEstadoCivilHistory:'http://localhost:3000/chartEstadoCivil',
        //Chart Estudio
        chartEstudioHistory:'http://localhost:3000/chartEstudio',
        //Chart Ocupacion
        chartOcupacionHistory:'http://localhost:3000/chartOcupacion',
        //Chart Ingresos
        chartIngresosHistory:'http://localhost:3000/chartIngresos/'

    }

});