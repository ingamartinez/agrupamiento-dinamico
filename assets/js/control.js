/**
 * Created by ingam on 13/11/2016.
 */

$('#select-segmentos-ubicacion').on('change', function () {
    var animationName = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    if (this.value === "segmentos") {

        $('#segmentos_ubicacion_chart').removeClass('hidden');
        $('#segmentos-ubicacion-chart-historial').removeClass('hidden');

        $('#segmentos_ubicacion_chart').addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        $('#segmentos-ubicacion-chart-historial').addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        $('#segmentos-ubicacion-map').addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
            }
        );

        $('#segmentos-ubicacion-map-historial').addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
            }
        );

    }

    if (this.value === "ubicacion-geografica") {

        $('#segmentos-ubicacion-map').removeClass('hidden');
        $('#segmentos-ubicacion-map-historial').removeClass('hidden');

        $('#segmentos-ubicacion-map').addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        $('#segmentos-ubicacion-map-historial').addClass('animated bounceInRight').one(animationName,
            function () {
                $(this).removeClass('animated bounceInRight');
            }
        );

        $('#segmentos_ubicacion_chart').addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
                // google.maps.event.trigger(map_first, 'resize');
                initFirstMap();
                initSecondMap();
            }
        );

        $('#segmentos-ubicacion-chart-historial').addClass('animated bounceOutLeft').one(animationName,
            function () {
                $(this).removeClass('animated bounceOutLeft');
                $(this).addClass('hidden');
                // google.maps.event.trigger(map_first, 'resize');
                initHistoryMap()
            }
        );
    }
});
