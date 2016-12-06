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
        yearDefault: 'Año'
    });

});

function renderFirstChart() {

    var firstChartData=null;

    $.ajax({
        type: 'GET',
        url: url.firstChartSegmentosGrafico,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#chart-segmentos');

        //Crear la primera gráfica
        var chartSegmentos = new Chart(ctx_segmentos,{
            type: 'bubble',
            data: {
                datasets:data
            },
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
        ctx_segmentos.click(function(e) {
            var activePoints = chartSegmentos.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var datasetIndex = activePoints[0]["_datasetIndex"];
                firstChartData.forEach(function (chartData,chartDataIndex) {
                    if (chartDataIndex === datasetIndex){
                        detalleGrafica(chartData.id);
                    }
                })
            }
        });
    }
}

function renderSecondChart() {
    var secondChartData=null;
    $.ajax({
        type: 'GET',
        url: url.secondChartSegmentosGrafico,
        success: function (data) {
            renderChart(data);
            secondChartData=data;
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
            data: {
                datasets:data
            },
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
        ctx_segmentos_anterior.click(function(e) {
            var activePoints = chartSegmentosAnterior.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var datasetIndex = activePoints[0]["_datasetIndex"];
                secondChartData.forEach(function (chartData,chartDataIndex) {
                    if (chartDataIndex === datasetIndex){
                        detalleGrafica(chartData.id);
                    }
                })
            }
        });
    }


}

function renderHistoryChart() {
    var historyChartData=null;

    $.ajax({
        type: 'GET',
        data:{
            dia:$('#segmentos-select-dia').val(),
            mes:$('#segmentos-select-mes').val(),
            anio:$('#segmentos-select-año').val()
        },
        url: url.thirdChartSegmentosGrafico,
        success: function (data) {
            renderChart(data);
            historyChartData=data;
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
            data: {
                datasets:data
            },
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
        ctx_segmentos_historial.unbind( "click" );
        ctx_segmentos_historial.off( "click" );

        ctx_segmentos_historial.on('click',function(e) {
            var activePoints = chartSegmentosHistorial.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var datasetIndex = activePoints[0]["_datasetIndex"];
                historyChartData.forEach(function (chartData,chartDataIndex) {
                    if (chartDataIndex === datasetIndex){
                        detalleGrafica(chartData.id);
                    }
                })
            }
        });
    }
}