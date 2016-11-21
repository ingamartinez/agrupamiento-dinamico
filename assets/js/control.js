/**
 * Created by ingam on 13/11/2016.
 */
var animationName = 'webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend';

var select_segmentos_ubicacion=     $('#select-segmentos-ubicacion');
var container_segmentos_ubicacion=  $('#container-segmentos-ubicacion');
var container_detalle_grafica=      $('#container-detalle-grafica');


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
}

function showTags(){
    var detalle_grafica_lista_usuarios=$('#detalle-grafica-lista-usuarios');
    var detalle_grafica_flags_usuarios=$('#detalle-grafica-flags-usuarios');

    detalle_grafica_lista_usuarios.addClass('animated bounceOutLeft').one(animationName,
        function () {
            $(this).removeClass('animated bounceOutLeft');
            $(this).addClass('hidden');

            detalle_grafica_flags_usuarios.removeClass('hidden');
            $('#detalle-grafica-flags-usuarios').find('a').tagcloud();
            detalle_grafica_flags_usuarios.addClass('animated bounceInRight').one(animationName,
                function () {
                    $(this).removeClass('animated bounceInRight');
                }
            );
        }
    );

}


























