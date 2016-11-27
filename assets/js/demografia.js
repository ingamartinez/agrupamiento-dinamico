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
        url: 'http://localhost:3000/firstChart',
        success: function (data) {

            if (_.isEmpty(data) || data.length<=0){

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
            detalleGrafica(id);
        });

        if (searchMarkers != null) {
            searchMarkers.push(marker);
        }else{
            searchMarkers = new Array(marker);
        }
    }
}