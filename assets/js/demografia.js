/**
 * Created by ingam on 23/11/2016.
 */
$(document).ready(function () {

});

function initMapDemografia() {
    var map_first=null;
    var searchMarkers = [];
    var infoWindow = new google.maps.InfoWindow();

    map_first = new google.maps.Map(document.getElementById('detalle-grafica-demografia-map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(10.3910485, -75.47942569999998),
        // center: new google.maps.LatLng(-33.92, 151.25),
        zoom: 3,
        scrollwheel: false
    });

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/firstChart?segmento='+id,
        success: function (data) {

            if (_.isEmpty(data) || data.length<=0){
                $('#detalle-grafica-link').removeClass('hidden');
            }else {
                _.each(data,function (item) {
                    var pos=new google.maps.LatLng(item.geo.latitude,item.geo.longitude);
                    var name=item.label;
                    var address=item.address;
                    createMarker(pos,name,address,item.id);
                });
            }

        }
    });

    function createMarker(latlng, label, address,id) {
        var html = "<b>" + label + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
            map: map_first,
            position: latlng
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map_first, marker);
            // showDemografiaBarChart(id);
            showDemografiaBarChart(id);
        });

        if (searchMarkers != null) {
            searchMarkers.push(marker);
        }else{
            searchMarkers = new Array(marker);
        }
    }
}

function initChartEdad() {

    $('#detalle-grafica-demografia-chart').replaceWith('<canvas id="detalle-grafica-demografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartEdad',
        success: function (data) {
            renderChart(data);
        }
    });


    function renderChart(charts) {

        var labels=_.pluck(charts,'label');
        var data=_.pluck(charts,'data');
        var backgroundColor=_.pluck(charts,'backgroundColor');
        var borderColor=_.pluck(charts,'borderColor');

        //Capturar el canvas de la primera grafica
        var ctx = $('#detalle-grafica-demografia-chart');

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label:"Grafico Edad",
                        backgroundColor:backgroundColor,
                        borderColor:borderColor,
                        borderWidth:1,
                        data:data
                    }
                ]
            },
            options:
                {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
        });
    }
}

function initChartSexo() {

    $('#detalle-grafica-demografia-chart').replaceWith('<canvas id="detalle-grafica-demografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartSexo',
        success: function (data) {
            renderChart(data);
        }
    });


    function renderChart(charts) {

        var labels=_.pluck(charts,'label');
        var data=_.pluck(charts,'data');
        var backgroundColor=_.pluck(charts,'backgroundColor');
        var borderColor=_.pluck(charts,'borderColor');

        //Capturar el canvas de la primera grafica
        var ctx = $('#detalle-grafica-demografia-chart');

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label:"Grafico Edad",
                        backgroundColor:backgroundColor,
                        borderColor:borderColor,
                        borderWidth:1,
                        data:data
                    }
                ]
            },
            options:
                {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
        });
    }
}

function initChartEstadoCivil() {

    $('#detalle-grafica-demografia-chart').replaceWith('<canvas id="detalle-grafica-demografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartEstadoCivil',
        success: function (data) {
            renderChart(data);
        }
    });


    function renderChart(charts) {

        var labels=_.pluck(charts,'label');
        var data=_.pluck(charts,'data');
        var backgroundColor=_.pluck(charts,'backgroundColor');
        var borderColor=_.pluck(charts,'borderColor');

        //Capturar el canvas de la primera grafica
        var ctx = $('#detalle-grafica-demografia-chart');

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label:"Grafico Edad",
                        backgroundColor:backgroundColor,
                        borderColor:borderColor,
                        borderWidth:1,
                        data:data
                    }
                ]
            },
            options:
                {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
        });
    }
}

function initChartEstudio() {

    $('#detalle-grafica-demografia-chart').replaceWith('<canvas id="detalle-grafica-demografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartEstudio',
        success: function (data) {
            renderChart(data);
        }
    });


    function renderChart(charts) {

        var labels=_.pluck(charts,'label');
        var data=_.pluck(charts,'data');
        var backgroundColor=_.pluck(charts,'backgroundColor');
        var borderColor=_.pluck(charts,'borderColor');

        //Capturar el canvas de la primera grafica
        var ctx = $('#detalle-grafica-demografia-chart');

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label:"Grafico Edad",
                        backgroundColor:backgroundColor,
                        borderColor:borderColor,
                        borderWidth:1,
                        data:data
                    }
                ]
            },
            options:
                {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
        });
    }
}

function initChartOcupacion() {

    $('#detalle-grafica-demografia-chart').replaceWith('<canvas id="detalle-grafica-demografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartOcupacion',
        success: function (data) {
            renderChart(data);
        }
    });


    function renderChart(charts) {

        var labels=_.pluck(charts,'label');
        var data=_.pluck(charts,'data');
        var backgroundColor=_.pluck(charts,'backgroundColor');
        var borderColor=_.pluck(charts,'borderColor');

        //Capturar el canvas de la primera grafica
        var ctx = $('#detalle-grafica-demografia-chart');

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label:"Grafico Edad",
                        backgroundColor:backgroundColor,
                        borderColor:borderColor,
                        borderWidth:1,
                        data:data
                    }
                ]
            },
            options:
                {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
        });
    }
}

function initChartIngresos() {

    $('#detalle-grafica-demografia-chart').replaceWith('<canvas id="detalle-grafica-demografia-chart" width="600" height="200"></canvas>');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/chartIngresos',
        success: function (data) {
            renderChart(data);
        }
    });


    function renderChart(charts) {

        var labels=_.pluck(charts,'label');
        var data=_.pluck(charts,'data');
        var backgroundColor=_.pluck(charts,'backgroundColor');
        var borderColor=_.pluck(charts,'borderColor');

        //Capturar el canvas de la primera grafica
        var ctx = $('#detalle-grafica-demografia-chart');

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label:"Grafico Edad",
                        backgroundColor:backgroundColor,
                        borderColor:borderColor,
                        borderWidth:1,
                        data:data
                    }
                ]
            },
            options:
                {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
        });
    }
}