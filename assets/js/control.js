/**
 * Created by ingam on 13/11/2016.
 */

$(document).ready(function () {
    moment.locale('es');

    Chart.defaults.global.responsive = true;

    $.fn.tagcloud.defaults = {
        size: {start: 20, end: 40, unit: 'pt'},
        color: {start: '#3850EC', end: '#44E267'}
    };

});

var animationName = 'webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend';

var select_segmentos_ubicacion=     $('#select-segmentos-ubicacion');
var container_segmentos_ubicacion=  $('#container-segmentos-ubicacion');
var container_detalle_grafica=      $('#container-detalle-grafica');
var select_conductuales=            $('#select-conductuales');


select_segmentos_ubicacion.on('change', function () {


    var segmentos_ubicacion_chart =             $('#segmentos_ubicacion_chart');
    var segmentos_ubicacion_chart_historial=    $('#segmentos-ubicacion-chart-historial');

    var segmentos_ubicacion_map=                $('#segmentos-ubicacion-map');
    var segmentos_ubicacion_map_historial=      $('#segmentos-ubicacion-map-historial');

    if (this.value === "segmentos") {

        segmentos_ubicacion_chart.removeClass('hidden');
        segmentos_ubicacion_chart_historial.removeClass('hidden');

        segmentos_ubicacion_chart.addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        segmentos_ubicacion_chart_historial.addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');

            }
        );

        segmentos_ubicacion_map.addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
                renderFirstChart();
                renderSecondChart();
            }
        );

        $('#segmentos-ubicacion-map-historial').addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
                renderHistoryChart();
            }
        );

    }

    if (this.value === "ubicacion-geografica") {

        segmentos_ubicacion_map.removeClass('hidden');
        segmentos_ubicacion_map_historial.removeClass('hidden');

        segmentos_ubicacion_map.addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        segmentos_ubicacion_map_historial.addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        segmentos_ubicacion_chart.addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
                // google.maps.event.trigger(map_first, 'resize');
                initFirstMap();
                initSecondMap();

            }
        );

        segmentos_ubicacion_chart_historial.addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
                // google.maps.event.trigger(map_first, 'resize');
                initHistoryMap()
            }
        );
    }
});

$('#segmentos-button-send').on('click',function () {
    if(select_segmentos_ubicacion.val()==='segmentos'){
        renderHistoryChart();
    }else

    if(select_segmentos_ubicacion.val()==='ubicacion-geografica'){
        initHistoryMap();
    }
});

function detalleGrafica(id){
    container_segmentos_ubicacion.addClass('animated zoomOut').one(animationName,
        function () {
            $(this).removeClass('animated zoomOut');
            $(this).addClass('hidden');

            container_detalle_grafica.removeClass('hidden');
            container_detalle_grafica.addClass('animated zoomIn').one(animationName,
                function () {
                    $(this).removeClass('animated zoomIn');

                }
            );
        }
    );
    fillUsuarios(id);
    initHistorySelect();
}

select_conductuales.on('change',function () {

    if (this.value === "usuarios") {
        showUsers();
    }
    if (this.value === "segmentos") {
        showTagsSegmentos();
    }

});

$('#select-detalle-grafica').on('change',function () {

    if (this.value === "conductual") {
        showConductual();
    }
    if (this.value === "psicografia") {
        showPsicografia();
    }
    if (this.value === "demografia") {
        showDemografia();
    }
});

$('#select-psicografia').on('change',function () {

    if (this.value === "personalidad") {
        showPersonalidad();
    }
    if (this.value === "estilo-vida") {
        showEstiloVida();
    }
    if (this.value === "valores") {
        showValores();
    }
    if (this.value === "clase-social") {
        showClaseSocial();
    }
});

function showConductual() {
    hideAllPsicografia();
    hidePsicografia();
    hideAllDemografia();
    hideDemografia();


    $('#select-conductuales').removeClass('hidden');
    showUsers();
}

function showUsers() {
    hideAllConductual();
    $('#detalle-grafica-lista-usuarios').removeClass('hidden');

    fillUsuarios();
}

function showTagsUser() {
    hideAllConductual();
    $('#detalle-grafica-flags-usuarios').removeClass('hidden');
}

function showTagsSegmentos() {
    hideAllConductual();
    $('#detalle-grafica-flags-segmentos').removeClass('hidden');

    fillSegmentos();
}

function hideAllConductual() {
    $('#detalle-grafica-flags-usuarios').addClass('hidden');
    $('#detalle-grafica-lista-usuarios').addClass('hidden');
    $('#detalle-grafica-flags-segmentos').addClass('hidden');
}

function hideConductual() {
    $('#detalle-grafica-flags-usuarios').addClass('hidden');
    $('#detalle-grafica-lista-usuarios').addClass('hidden');
    $('#detalle-grafica-flags-segmentos').addClass('hidden');
    $('#select-conductuales').addClass('hidden');
}

function showPsicografia() {
    hideAllConductual();
    hideConductual();
    hideAllDemografia();
    hideDemografia();

    $('#select-psicografia').removeClass('hidden');
    $('#select-psicografia').val('personalidad');
    showPersonalidad();
}

function hideAllPsicografia() {
    $('#detalle-grafica-psicografia-chart').addClass('hidden');
    $('#detalle-grafica-psicografia-detalle-chart').addClass('hidden');

}

function hidePsicografia() {
    $('#select-psicografia').addClass('hidden');
}

function showPersonalidad() {
    hideAllPsicografia();
    $('#detalle-grafica-psicografia-chart').removeClass('hidden');
    initChartPersonalidad();
}

function showDetallePersonalidad(id) {
    hideAllPsicografia();
    $('#detalle-grafica-psicografia-detalle-chart').removeClass('hidden');
    initDetallePersonalidad(id);
}

function showEstiloVida() {
    hideAllPsicografia();
    $('#detalle-grafica-estilo-vida').removeClass('hidden');
    initChartEstiloVida();
}

function showDetalleEstiloVida(id) {
    hideAllPsicografia();
    $('#detalle-grafica-detalle-estilo-vida').removeClass('hidden');
    initDetalleEstiloVida(id);
}

function showValores() {
    hideAllPsicografia();
    $('#detalle-grafica-valores').removeClass('hidden');
    initChartValores();
}

function showDetalleValores(id) {
    hideAllPsicografia();
    $('#detalle-grafica-detalle-valores').removeClass('hidden');
    initDetalleValores(id);
}

function showClaseSocial() {
    hideAllPsicografia();
    $('#detalle-grafica-clase-social').removeClass('hidden');
    initChartClaseSocial();
}

function showDetalleClaseSocial(id) {
    hideAllPsicografia();
    $('#detalle-grafica-detalle-clase-social').removeClass('hidden');
    initDetalleClaseSocial(id);
}

function showDemografia() {
    hideAllConductual();
    hideConductual();
    hideAllPsicografia();
    hidePsicografia();

    showMapDemografia();

}

function showMapDemografia() {
    $('#detalle-grafica-demografia-map').removeClass('hidden');
    initMapDemografia();
}

$('#detalle-grafica-demografia-select-chart').on('change',function () {

    if (this.value === "edad") {
        initChartEdad();
    }
    if (this.value === "sexo") {
        initChartSexo()
    }
    if (this.value === "estado-civil") {
        initChartEstadoCivil();
    }
    if (this.value === "estudio") {
        initChartEstudio();
    }
    if (this.value === "ocupacion") {
        initChartOcupacion();
    }
    if (this.value === "ingresos") {
        initChartIngresos();
    }
});

function showDemografiaBarChart() {
    hideAllDemografia();
    $('#detalle-grafica-demografia-chart').removeClass('hidden');
    $('#detalle-grafica-demografia-select-chart').removeClass('hidden');
    initChartEdad();
}

function hideAllDemografia() {
    $('#detalle-grafica-demografia-map').addClass('hidden');
    $('#detalle-grafica-link').addClass('hidden');
    $('#detalle-grafica-demografia-chart').addClass('hidden');
    $('#detalle-grafica-demografia-select-chart').addClass('hidden');

}

function hideDemografia() {

}

/*
    History
 */

$('#select-detalle-grafica-history').on('change',function () {
    hideSelectsHistory();

    if (this.value === "conductual") {
        $('#select-conductuales-history').removeClass('hidden');
    }
    if (this.value === "psicografia") {
        $('#select-psicografia-history').removeClass('hidden');
    }
});

function hideSelectsHistory() {
    $('#select-conductuales-history').addClass('hidden');
    $('#select-psicografia-history').addClass('hidden');
    $('#detalle-grafica-demografia-select-chart-history').addClass('hidden');
}

$('#detalle-grafica-button-send').on('click',function () {

    var detalleGrafica=$('#select-detalle-grafica-history').find('option:selected').val();
    var conductuales=$('#select-conductuales-history').find('option:selected').val();
    var psicografia=$('#select-psicografia-history').find('option:selected').val();


    if (detalleGrafica==='conductual'){
        hideAllConductualHistory();
        hideAllDemografiaHistory();
        hideAllPsicografiaHistory();

        switch (conductuales){
            case 'usuarios':
                showUsersHistory();
                break;
            case 'segmentos':
                showTagsSegmentosHistory();
                break;
            default:
        }
    }

    if (detalleGrafica==='psicografia'){
        hideAllConductualHistory();
        hideAllDemografiaHistory();
        hideAllPsicografiaHistory();

        switch (psicografia){
            case 'personalidad':
                showPersonalidadHistory();
                break;
            case 'estilo-vida':
                showEstiloVidaHistory();
                break;
            case 'valores':
                showValoresHistory();
                break;
            case 'clase-social':
                showClaseSocialHistory();
                break;
            default:
        }
    }

    if (detalleGrafica==='demografia'){
        hideAllConductualHistory();
        hideAllDemografiaHistory();
        hideAllPsicografiaHistory();

        showDemografiaHistory();
    }
});


/*
    Conductual History
 */

function showUsersHistory() {

    $('#detalle-grafica-lista-usuarios-history').removeClass('hidden');

    fillUsuariosHistory();
}

function showTagsUserHistory() {
    hideAllConductualHistory();
    $('#detalle-grafica-flags-usuarios-history').removeClass('hidden');
}

function showTagsSegmentosHistory() {
    hideAllConductualHistory();
    $('#detalle-grafica-flags-segmentos-history').removeClass('hidden');
    fillSegmentosHistory();
}

function hideAllConductualHistory() {
    $('#detalle-grafica-flags-usuarios-history').addClass('hidden');
    $('#detalle-grafica-lista-usuarios-history').addClass('hidden');
    $('#detalle-grafica-flags-segmentos-history').addClass('hidden');
}

/*
    Psicografia History
 */

function showPersonalidadHistory() {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-chart-history').removeClass('hidden');
    initHistoryChartPersonalidad();
}

function showDetallePersonalidadHistory(id) {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-detalle-chart-history').removeClass('hidden');
    initHistoryDetallePersonalidad(id);
}

function showEstiloVidaHistory() {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-chart-history').removeClass('hidden');
    initHistoryChartEstiloVida();
}

function showDetalleEstiloVidaHistory(id) {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-detalle-chart-history').removeClass('hidden');
    initHistoryDetalleEstiloVida(id);
}

function showValoresHistory() {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-chart-history').removeClass('hidden');
    initHistoryChartValores();
}

function showDetalleValoresHistory(id) {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-detalle-chart-history').removeClass('hidden');
    initHistoryDetalleValores(id);
}

function showClaseSocialHistory() {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-chart-history').removeClass('hidden');
    initHistoryChartClaseSocial();
}

function showDetalleClaseSocialHistory(id) {
    hideAllPsicografiaHistory();
    $('#detalle-grafica-psicografia-detalle-chart-history').removeClass('hidden');
    initHistoryDetalleClaseSocial(id);
}

function hideAllPsicografiaHistory() {
    $('#detalle-grafica-psicografia-chart-history').addClass('hidden');
    $('#detalle-grafica-psicografia-detalle-chart-history').addClass('hidden');

}

/*
    Demografia History
 */

function showDemografiaHistory() {
    hideAllConductualHistory();
    hideAllPsicografiaHistory();

    showMapDemografiaHistory();

}

function showMapDemografiaHistory() {
    $('#detalle-grafica-demografia-map-history').removeClass('hidden');
    initHistoryMapDemografia();
}

$('#detalle-grafica-demografia-select-chart-history').on('change',function () {

    if (this.value === "edad") {
        initHistoryChartEdad();
    }
    if (this.value === "sexo") {
        initHistoryChartSexo()
    }
    if (this.value === "estado-civil") {
        initHistoryChartEstadoCivil();
    }
    if (this.value === "estudio") {
        initHistoryChartEstudio();
    }
    if (this.value === "ocupacion") {
        initHistoryChartOcupacion();
    }
    if (this.value === "ingresos") {
        initHistoryChartIngresos();
    }

});

function showDemografiaBarChartHistory() {
    hideAllDemografiaHistory();
    $('#detalle-grafica-demografia-chart-history').removeClass('hidden');
    $('#detalle-grafica-demografia-select-chart-history').removeClass('hidden');
    $('#detalle-grafica-demografia-select-chart-history').val('edad');
    initHistoryChartEdad();
}

function hideAllDemografiaHistory() {
    $('#detalle-grafica-demografia-map-history').addClass('hidden');
    $('#detalle-grafica-link-history').addClass('hidden');
    $('#detalle-grafica-demografia-chart-history').addClass('hidden');
    $('#detalle-grafica-demografia-select-chart-history').addClass('hidden');

}

























