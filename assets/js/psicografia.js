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
        data:{
            segmento:idSegmento
        },
        url: url.chartPersonalidad,
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
        url: url.chartPersonalidad+'/'+id,
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
        data:{
            segmento:idSegmento
        },
        url: url.chartEstiloVida,
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
        url: url.chartEstiloVida+'/'+id,
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
        data:{
            segmento:idSegmento
        },
        url: url.chartValores,
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
        url: url.chartValores+'/'+id,
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
        data:{
            segmento:idSegmento
        },
        url: url.chartClaseSocial,
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
        url: url.chartClaseSocial+'/'+id,
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

/*
    History
 */


function initHistoryChartPersonalidad() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart-history').replaceWith('<canvas id="detalle-grafica-psicografia-chart-history" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        data:{
            segmento:idSegmento,
            dia:$('#detalle-grafica-select-dia').val(),
            mes:$('#detalle-grafica-select-mes').val(),
            anio:$('#detalle-grafica-select-año').val()
        },
        url: url.chartPersonalidadHistory,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart-history');

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
                        showDetallePersonalidadHistory(chartData.id);
                    }
                })
            }
        });
    }
}

function initHistoryDetallePersonalidad(id) {
    $('#detalle-grafica-psicografia-detalle-chart-history').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart-history"></div>');
    $.ajax({
        type: 'GET',
        url: url.chartPersonalidadHistory+'/'+id,
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
            document.getElementById('detalle-grafica-psicografia-detalle-chart-history').innerHTML=details;
        }
    });
}

function initHistoryChartEstiloVida() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart-history').replaceWith('<canvas id="detalle-grafica-psicografia-chart-history" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        data:{
            segmento:idSegmento,
            dia:$('#detalle-grafica-select-dia').val(),
            mes:$('#detalle-grafica-select-mes').val(),
            anio:$('#detalle-grafica-select-año').val()
        },
        url: url.chartEstiloVidaHistory,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart-history');

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
                        showDetalleEstiloVidaHistory(chartData.id);
                    }
                })
            }
        });
    }
}

function initHistoryDetalleEstiloVida(id) {
    $('#detalle-grafica-psicografia-detalle-chart-history').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart-history"></div>');
    $.ajax({
        type: 'GET',
        url: url.chartEstiloVidaHistory+'/'+id,
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
            document.getElementById('detalle-grafica-psicografia-detalle-chart-history').innerHTML=details;
        }
    });
}

function initHistoryChartValores() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart-history').replaceWith('<canvas id="detalle-grafica-psicografia-chart-history" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        data:{
            segmento:idSegmento,
            dia:$('#detalle-grafica-select-dia').val(),
            mes:$('#detalle-grafica-select-mes').val(),
            anio:$('#detalle-grafica-select-año').val()
        },
        url: url.chartValoresHistory,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart-history');

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
                        showDetalleValoresHistory(chartData.id);
                    }
                })
            }
        });
    }
}

function initHistoryDetalleValores(id) {
    $('#detalle-grafica-psicografia-detalle-chart-history').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart-history"></div>');
    $.ajax({
        type: 'GET',
        url: url.chartValoresHistory+'/'+id,
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
            document.getElementById('detalle-grafica-psicografia-detalle-chart-history').innerHTML=details;
        }
    });
}

function initHistoryChartClaseSocial() {
    var firstChartData=null;
    $('#detalle-grafica-psicografia-chart-history').replaceWith('<canvas id="detalle-grafica-psicografia-chart-history" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        data:{
            segmento:idSegmento,
            dia:$('#detalle-grafica-select-dia').val(),
            mes:$('#detalle-grafica-select-mes').val(),
            anio:$('#detalle-grafica-select-año').val()
        },
        url: url.chartClaseSocialHistory,
        success: function (data) {
            renderChart(data);
            firstChartData=data;
        }
    });

    function renderChart(data) {
        //Capturar el canvas de la primera grafica
        var ctx_segmentos = $('#detalle-grafica-psicografia-chart-history');

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
                        showDetalleClaseSocialHistory(chartData.id);
                    }
                })
            }
        });
    }
}

function initHistoryDetalleClaseSocial(id) {
    $('#detalle-grafica-psicografia-detalle-chart-history').replaceWith('<div id="detalle-grafica-psicografia-detalle-chart-history"></div>');
    $.ajax({
        type: 'GET',
        url: url.chartClaseSocialHistory+'/'+id,
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
            document.getElementById('detalle-grafica-psicografia-detalle-chart-history').innerHTML=details;
        }
    });
}