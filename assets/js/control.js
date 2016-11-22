/**
 * Created by ingam on 13/11/2016.
 */

$(document).ready(function () {

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
    if (this.value === "demografia") {
        showDemografia();
    }
});

$('#select-demografia').on('change',function () {

    if (this.value === "personalidad") {
        showPersonalidad();
    }
    if (this.value === "estilo-vida") {
        showEstiloVida();
    }
});

function showConductual() {
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

function showDemografia() {
    hideAllConductual();
    hideConductual();

    $('#select-demografia').removeClass('hidden');
    showPersonalidad();
}

function hideAllDemografia() {
    $('#detalle-grafica-personalidad').addClass('hidden');
    $('#detalle-grafica-detalle-personalidad').addClass('hidden');

    $('#detalle-grafica-estilo-vida').addClass('hidden');
    $('#detalle-grafica-detalle-estilo-vida').addClass('hidden');


    $('#detalle-grafica-valores').addClass('hidden');
    $('#detalle-grafica-clase-social').addClass('hidden');
}

function hideDemografia() {
    $('#select-demografia').addClass('hidden');
}

function showPersonalidad() {
    hideAllDemografia();
    $('#detalle-grafica-personalidad').removeClass('hidden');
    initChartPersonalidad();
}

function showDetallePersonalidad(id) {
    hideAllDemografia();
    $('#detalle-grafica-detalle-personalidad').removeClass('hidden');
    initDetallePersonalidad(id);
}

function showEstiloVida() {
    hideAllDemografia();
    $('#detalle-grafica-estilo-vida').removeClass('hidden');
    initChartEstiloVida();
}

function showDetalleEstiloVida(id) {
    hideAllDemografia();
    $('#detalle-grafica-detalle-estilo-vida').removeClass('hidden');
    initDetalleEstiloVida(id);
}


















