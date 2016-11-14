/**
 * Created by ingam on 13/11/2016.
 */



$(document).ready(function () {
    var datas=null;
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/datasets',
        success: function (data) {


        }
    }).done(function (response) {
        // console.log(response)

        renderfirstChart(response);

    });

    $.dobPicker({
        daySelector: '#segmentos-select-dia',
        monthSelector: '#segmentos-select-mes',
        yearSelector: '#segmentos-select-año',

        dayDefault: 'Día',
        monthDefault: 'Mes',
        yearDefault: 'Año',


    });



    /*
        Segmentos
     */



    /*
     Segunda Gráfica
     */

    //Datos a mostrar en la grafica
    var data_segmentos_anterior = {
        datasets: [
            {
                label: 'First Dataset',
                data: [
                    {
                        x: 20,
                        y: 30,
                        r: 15
                    }
                ],
                backgroundColor:"#FF6384",
                hoverBackgroundColor: "#FF6384"
            },
            {
                label: 'Second Dataset',
                data: [
                    {
                        x: 40,
                        y: 10,
                        r: 10
                    }
                ],
                backgroundColor:"#DFC",
                hoverBackgroundColor: "#DFC"
            }
        ]
    };

    //Capturar el canvas de la segunda grafica
    var ctx_segmentos_anterior = $('#chart-segmentos-anterior');

    //Crear la SegundaGráfica
    var chartSegmentosAnterior = new Chart(ctx_segmentos_anterior,{
        type: 'bubble',
        data: data_segmentos_anterior,
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

    /*
        Gráfica Historial
     */

    //Datos a mostrar en la grafica
    var data_segmentos_historial = {
        datasets: [
            {
                label: 'First Dataset',
                data: [
                    {
                        x: 20,
                        y: 30,
                        r: 15
                    }
                ],
                backgroundColor:"#FF6384",
                hoverBackgroundColor: "#FF6384"
            },
            {
                label: 'Second Dataset',
                data: [
                    {
                        x: 40,
                        y: 10,
                        r: 10
                    }
                ],
                backgroundColor:"#DFC",
                hoverBackgroundColor: "#DFC"
            }
        ]
    };

    //Capturar el canvas de la grafica historal
    var ctx_segmentos_historial = $('#chart-segmentos-historial');

    //Crear la Gráfica Historial
    var chartSegmentosHistorial = new Chart(ctx_segmentos_historial,{
        type: 'bubble',
        data: data_segmentos_historial,
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

});

function renderfirstChart(dataset) {
    /*
     Primera Gráfica
     */
    console.log(dataset[0].data[0].x);
    var data_segmentos={};
    var _datasets=null;

    for (var index in dataset){
        _datasets ={
            label : dataset[index].label,
            data : [
                {
                    x : dataset[index].data[0].x,
                    y : dataset[index].data[0].y,
                    r : dataset[index].data[0].r
                }
            ],
            backgroundColor: dataset[index].backgroundColor

        }
    }

    console.log(data_segmentos);


    //Datos a mostrar en la grafica
    var data_segmentos = {
        datasets: [
            {
                label: 'First Dataset',
                data: [
                    {
                        x: 20,
                        y: 30,
                        r: 15
                    }
                ],
                backgroundColor:"#FF6384",
                hoverBackgroundColor: "#FF6384"
            },
            {
                label: 'Second Dataset',
                data: [
                    {
                        x: 40,
                        y: 10,
                        r: 10
                    }
                ],
                backgroundColor:"#DFC",
                hoverBackgroundColor: "#DFC"
            }
        ]
    };

    //Capturar el canvas de la primera grafica
    var ctx_segmentos = $('#chart-segmentos');

    //Crear la primera gráfica
    var chartSegmentos = new Chart(ctx_segmentos,{
        type: 'bubble',
        data: [dataset[0]],
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

