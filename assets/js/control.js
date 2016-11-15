/**
 * Created by ingam on 13/11/2016.
 */

$('#select-segmentos-ubicacion').on('change', function () {
    var animationName = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

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
        $('#segmentos-ubicacion-map-historial').removeClass('hidden');

        segmentos_ubicacion_map.addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        $('#segmentos-ubicacion-map-historial').addClass('animated bounceInRight').one(animationName,
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
