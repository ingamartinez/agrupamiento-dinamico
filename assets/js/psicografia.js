/**
 * Created by ingam on 22/11/2016.
 */

$(document).ready(function () {

});

function initChartPersonalidad() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart').replaceWith('<canvas id="detalle-grafica-psicografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartPersonalidad?segmento='+id,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart');

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
                        showDetallePersonalidad(chartData.id);
                    }
                })
            }
        });
    }
}

function initDetallePersonalidad(id) {
    $('#detalle-grafica-psicografia-detalle-chart').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart"></div>');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartPersonalidad/'+id,
        success: function (data) {
            var details="";
            data.details.forEach(function (detail) {
                // tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                for (var a in detail){
                    console.log();
                    details+=   '<div class="col-lg-6 col-md-6 col-sm-6 text-center">'+
                                    '<i class="fa '+detail[a].icon+' fa-8x"></i>'+
                                    '<h3>'+detail[a].porcentaje+'</h3>'+
                                '</div> ';
                }

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-psicografia-detalle-chart').innerHTML=details;
        }
    });
}

function initChartEstiloVida() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart').replaceWith('<canvas id="detalle-grafica-psicografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartEstiloVida?segmento='+id,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart');

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
                        showDetalleEstiloVida(chartData.id);
                    }
                })
            }
        });
    }
}

function initDetalleEstiloVida(id) {
$('#detalle-grafica-psicografia-detalle-chart').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart"></div>');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartEstiloVida/'+id,
        success: function (data) {
            var details="";
            data.details.forEach(function (detail) {
                // tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                for (var a in detail){
                    console.log();
                    details+=   '<div class="col-lg-6 col-md-6 col-sm-6 text-center">'+
                        '<i class="fa '+detail[a].icon+' fa-8x"></i>'+
                        '<h3>'+detail[a].porcentaje+'</h3>'+
                        '</div> ';
                }

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-psicografia-detalle-chart').innerHTML=details;
        }
    });
}

function initChartValores() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart').replaceWith('<canvas id="detalle-grafica-psicografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartValores?segmento='+id,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart');

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
                        showDetalleValores(chartData.id);
                    }
                })
            }
        });
    }
}

function initDetalleValores(id) {
    $('#detalle-grafica-psicografia-detalle-chart').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart"></div>');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartValores/'+id,
        success: function (data) {
            var details="";
            data.details.forEach(function (detail) {
                // tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                for (var a in detail){
                    console.log();
                    details+=   '<div class="col-lg-6 col-md-6 col-sm-6 text-center">'+
                        '<i class="fa '+detail[a].icon+' fa-8x"></i>'+
                        '<h3>'+detail[a].porcentaje+'</h3>'+
                        '</div> ';
                }

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-psicografia-detalle-chart').innerHTML=details;
        }
    });
}

function initChartClaseSocial() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart').replaceWith('<canvas id="detalle-grafica-psicografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartClaseSocial?segmento='+id,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart');

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
                        showDetalleClaseSocial(chartData.id);
                    }
                })
            }
        });
    }
}

function initDetalleClaseSocial(id) {
    $('#detalle-grafica-psicografia-detalle-chart').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart"></div>');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartClaseSocial/'+id,
        success: function (data) {
            var details="";
            data.details.forEach(function (detail) {
                // tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                for (var a in detail){
                    console.log();
                    details+=   '<div class="col-lg-6 col-md-6 col-sm-6 text-center">'+
                        '<i class="fa '+detail[a].icon+' fa-8x"></i>'+
                        '<h3>'+detail[a].porcentaje+'</h3>'+
                        '</div> ';
                }

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-psicografia-detalle-chart').innerHTML=details;
        }
    });
}