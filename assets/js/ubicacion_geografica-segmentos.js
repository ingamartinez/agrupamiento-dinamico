/**
 * Created by ingam on 13/11/2016.
 */

$(document).ready(function () {

    renderFirstChart();
    renderSecondChart();
    renderHistoryChart();

    $.dobPicker({
        daySelector: '#segmentos-select-dia',
        monthSelector: '#segmentos-select-mes',
        yearSelector: '#segmentos-select-año',

        dayDefault: 'Día',
        monthDefault: 'Mes',
        yearDefault: 'Año',


    });


});

function renderFirstChart() {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/firstChart',
        success: function (data) {
            for (var newData in data){
                data= data[newData];
            }
            renderChart(data);
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#chart-segmentos');

        //Crear la primera gráfica
        var chartSegmentos = new Chart(ctx_segmentos,{
            type: 'bubble',
            data: data,
            options: {
                elements: {
                    points: {
                        borderWidth: 1,
                        borderColor: 'rgb(0, 0, 0)'
                    }
                }
            }
        });

        //Capturar el index del primer Dataset que fue seleccionado en la PRIMERA grafica
        //Utilizado para poder compararlo con el objeto que llegue por la petición AJAX
        $("#chart-segmentos").click(function(e) {
            var activePoints = chartSegmentos.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var index = activePoints[0]["_datasetIndex"];
                console.log(index);
            }
        });
    }
}

function renderSecondChart() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/secondChart',
        success: function (data) {
            for (var newData in data){
                data= data[newData];
            }
            renderChart(data);
        }
    });
    /*
     Segunda Gráfica
     */

    function renderChart(data){
        //Capturar el canvas de la segunda grafica
        var ctx_segmentos_anterior = $('#chart-segmentos-anterior');

        //Crear la SegundaGráfica
        var chartSegmentosAnterior = new Chart(ctx_segmentos_anterior,{
            type: 'bubble',
            data: data,
            options: {
                elements: {
                    points: {
                        borderWidth: 1,
                        borderColor: 'rgb(0, 0, 0)'
                    }
                }
            }
        });

        //Capturar el index del primer Dataset que fue seleccionado en la SEGUNDA grafica
        //Utilizado para poder compararlo con el objeto que llegue por la petición AJAX
        $("#chart-segmentos-anterior").click(function(e) {
            var activePoints = chartSegmentosAnterior.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var index = activePoints[0]["_datasetIndex"];
                console.log(index);
            }
        });
    }


}

function renderHistoryChart() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/historyChart',
        success: function (data) {
            for (var newData in data){
                data= data[newData];
            }
            renderChart(data);
        }
    });
    /*
     Gráfica Historial
     */
    function renderChart(data) {
        //Capturar el canvas de la grafica historal
        var ctx_segmentos_historial = $('#chart-segmentos-historial');

        //Crear la Gráfica Historial
        var chartSegmentosHistorial = new Chart(ctx_segmentos_historial,{
            type: 'bubble',
            data: data,
            options: {
                elements: {
                    points: {
                        borderWidth: 1,
                        borderColor: 'rgb(0, 0, 0)'
                    }
                }
            }
        });

        //Capturar el index del primer Dataset que fue seleccionado en la grafica HISTORIAL
        //Utilizado para poder compararlo con el objeto que llegue por la petición AJAX
        $("#chart-segmentos-historial").click(function(e) {
            var activePoints = chartSegmentosHistorial.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var index = activePoints[0]["_datasetIndex"];
                console.log(index);
            }
        });
    }

}