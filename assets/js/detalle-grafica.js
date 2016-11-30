/**
 * Created by ingam on 21/11/2016.
 */
$(document).ready(function () {



});

function initHistorySelect() {
    $.dobPicker({
        daySelector: '#detalle-grafica-select-dia',
        monthSelector: '#detalle-grafica-select-mes',
        yearSelector: '#detalle-grafica-select-año',

        dayDefault: 'Día',
        monthDefault: 'Mes',
        yearDefault: 'Año'
    });
}

var idSegmento;

function fillUsuarios(id) {
    if (typeof id !== 'undefined'){
        idSegmento=id;
    }
    $.ajax({
        type: 'GET',
        data: {
            segmento:idSegmento
        },
        url: 'http://localhost:3000/usuarios',
        success: function (data) {
            var usuarios="";
            data.forEach(function (n) {
                usuarios+=  '<li class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'+
                    '<a href="#" onclick="fillTags('+n.id+')">'+n.nombre+'</a>'+
                    '</li>'

            });
            // console.log(usuarios);
            document.getElementById('list-usuarios').innerHTML=usuarios;
        }
    });
}

function fillTags(idUser) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/usuarios/'+idUser,
        success: function (data) {
            var tags="";
            data.tags.forEach(function (n) {
                tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                // console.log(n);

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-flags-usuarios').innerHTML=tags;
            $('#detalle-grafica-flags-usuarios').find('a').tagcloud();
        }
    });
    showTagsUser();
}

function fillSegmentos() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/firstChart/'+idSegmento,
        success: function (data) {
            var tags="";
            data.tags.forEach(function (n) {
                tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                // console.log(n);

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-flags-segmentos').innerHTML=tags;
            $('#detalle-grafica-flags-segmentos').find('a').tagcloud();
        }
});
}


/*
    History
 */

function fillUsuariosHistory(id) {
    if (typeof id !== 'undefined'){
        idHistory=id;
    }
    $.ajax({
        type: 'GET',
        data:{
            segmento:idSegmento,
            dia:$('#detalle-grafica-select-dia').val(),
            mes:$('#detalle-grafica-select-mes').val(),
            anio:$('#detalle-grafica-select-año').val()
        },
        url: 'http://localhost:3000/usuarios',
        success: function (data) {
            var usuarios="";
            data.forEach(function (n) {
                usuarios+=  '<li class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'+
                    '<a href="#" onclick="fillTagsHistory('+n.id+')">'+n.nombre+'</a>'+
                    '</li>'

            });
            // console.log(usuarios);
            document.getElementById('list-usuarios-history').innerHTML=usuarios;
        }
    });
}

function fillTagsHistory(idUser) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/usuarios/'+idUser,
        success: function (data) {
            var tags="";
            data.tags.forEach(function (n) {
                tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                // console.log(n);

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-flags-usuarios-history').innerHTML=tags;
            $('#detalle-grafica-flags-usuarios-history').find('a').tagcloud();
        }
    });
    showTagsUserHistory();
}

function fillSegmentosHistory() {
    $.ajax({
        type: 'GET',
        data:{
            dia:$('#detalle-grafica-select-dia').val(),
            mes:$('#detalle-grafica-select-mes').val(),
            anio:$('#detalle-grafica-select-año').val()
        },
        url: 'http://localhost:3000/firstChart/'+idSegmento,
        success: function (data) {
            var tags="";
            data.tags.forEach(function (n) {
                tags+=  '<a href="#" rel="'+Math.floor((Math.random() * 5) + 1)+'">'+n+'</a> ';
                // console.log(n);

            });
            // console.log(usuarios);
            document.getElementById('detalle-grafica-flags-segmentos-history').innerHTML=tags;
            $('#detalle-grafica-flags-segmentos-history').find('a').tagcloud();
        }
    });
}