var searchMap = null;

var lats_lng = [];

lats_lng[18] = new Array(19.24647, -99.10135); // MÃ©xico
lats_lng[34] = new Array(40.41678, -3.70379), // EspaÃ±a
lats_lng[51] = new Array(-12.04637, -77.04279), // PerÃº
lats_lng[54] = new Array(-34.60372, -58.38159), // Argentina
lats_lng[593] = new Array(-0.18065, -78.46784), // Ecuador
lats_lng[595] = new Array(-25.28220, -57.63510), // Paraguay
lats_lng[172] = new Array(12.13639, -86.25139), // Nicaragua
lats_lng[507] = new Array(8.98333, -79.51667), // PanamÃ¡
lats_lng[57] = new Array(4.59806, -74.07583)  // Colombia
lats_lng[01] = new Array(10.3910485, -75.47942569999998)  // Cartagena, Colombia

var marker=null;

function map_initMap() {
    searchMap = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(lats_lng[01][0], lats_lng[01][1]),
        // center: new google.maps.LatLng(-33.92, 151.25),
        zoom: 16,
        scrollwheel: false
    });

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.390731913454, -75.480691702655),
        title:"Marcador 1"
    });
    marker.setMap(searchMap);

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.392082680481, -75.48084190636),
        title:"Marcador 2"
    });
    marker.setMap(searchMap);
}

jQuery(document).ready(function() {

});