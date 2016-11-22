/**
 * Created by ingam on 22/11/2016.
 */

$(document).ready(function () {

});

function initChartPsicografia() {
    var firstChartData=null;

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartPsicografia?segmento='+id,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#chart-personalidad');

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

        ctx_segmentos.unbind( "click" );
        ctx_segmentos.off( "click" );

        //Capturar el index del primer Dataset que fue seleccionado en la PRIMERA grafica
        //Utilizado para poder compararlo con el objeto que llegue por la petición AJAX
        ctx_segmentos.click(function(e) {
            var activePoints = chartSegmentos.getDatasetAtEvent(e);
//            console.log(activePoints);
            if (activePoints.length > 0) {
                var datasetIndex = activePoints[0]["_datasetIndex"];
                firstChartData.forEach(function (chartData,chartDataIndex) {
                    if (chartDataIndex === datasetIndex){
                        console.log(chartData.id);
                    }
                })
            }
        });
    }
}