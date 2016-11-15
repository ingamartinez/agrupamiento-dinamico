$(document).ready(function () {

    // initFirstMap();
    // initSecondMap();
    // initHistoryMap();


});

function initFirstMap() {
    var map_first=null;
    var searchMarkers = [];
    var infoWindow = new google.maps.InfoWindow();

    map_first = new google.maps.Map(document.getElementById('map-first'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(10.3910485, -75.47942569999998),
        // center: new google.maps.LatLng(-33.92, 151.25),
        zoom: 3,
        scrollwheel: false
    });

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/firstChart',
        success: function (data) {
            for (var newData in data){
                data= data[newData].datasets;
            }

            for (var index in data){
                // console.log(data[index].geo.latitude);
                    var pos=new google.maps.LatLng(data[index].geo.latitude,data[index].geo.longitude);
                    var name=data[index].label;
                    var address=data[index].address;
                    createMarker(pos,name,address);
            }

        }
    });

    function createMarker(latlng, label, address) {
        var html = "<b>" + label + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
            map: map_first,
            position: latlng
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map_first, marker);
        });

        if (searchMarkers != null) {
            searchMarkers.push(marker);
        }else{
            searchMarkers = new Array(marker);
        }
    }



}

function initSecondMap() {
    var map_second=null;
    var searchMarkers = [];
    var marker=null;
    var infoWindow = new google.maps.InfoWindow();

    map_second = new google.maps.Map(document.getElementById('map-second'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(10.3910485, -75.47942569999998),
        // center: new google.maps.LatLng(-33.92, 151.25),
        zoom: 3,
        scrollwheel: false
    });

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/secondChart',
        success: function (data) {
            for (var newData in data){
                data= data[newData].datasets;
            }

            for (var index in data){
                // console.log(data[index].geo.latitude);
                var pos=new google.maps.LatLng(data[index].geo.latitude,data[index].geo.longitude);
                var name=data[index].label;
                var address=data[index].address;
                createMarker(pos,name,address);
            }

        }
    });

    function createMarker(latlng, label, address) {
        var html = "<b>" + label + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
            map: map_second,
            position: latlng
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map_second, marker);
        });

        if (searchMarkers != null) {
            searchMarkers.push(marker);
        }else{
            searchMarkers = new Array(marker);
        }
    }
}

function initHistoryMap() {
    var map_history=null;
    var searchMarkers = [];
    var marker=null;
    var infoWindow = new google.maps.InfoWindow();

    map_history = new google.maps.Map(document.getElementById('map-history'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(10.3910485, -75.47942569999998),
        // center: new google.maps.LatLng(-33.92, 151.25),
        zoom: 3,
        scrollwheel: false
    });

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/historyChart',
        success: function (data) {
            for (var newData in data){
                data= data[newData].datasets;
            }

            for (var index in data){
                // console.log(data[index].geo.latitude);
                var pos=new google.maps.LatLng(data[index].geo.latitude,data[index].geo.longitude);
                var name=data[index].label;
                var address=data[index].address;
                createMarker(pos,name,address);
            }

        }
    });

    function createMarker(latlng, label, address) {
        var html = "<b>" + label + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
            map: map_history,
            position: latlng
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map_history, marker);
        });

        if (searchMarkers != null) {
            searchMarkers.push(marker);
        }else{
            searchMarkers = new Array(marker);
        }
    }

}

