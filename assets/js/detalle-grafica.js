/**
 * Created by ingam on 21/11/2016.
 */
$(document).ready(function () {

    // $.dobPicker({
    //     daySelector: '#segmentos-select-dia',
    //     monthSelector: '#segmentos-select-mes',
    //     yearSelector: '#segmentos-select-año',
    //
    //     dayDefault: 'Día',
    //     monthDefault: 'Mes',
    //     yearDefault: 'Año'
    // });

});
var id;
// var usuario;
function fillUsuarios(id) {
    if (typeof id !== 'undefined'){
        this.id=id;
    }
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/usuarios?ubicacion_segmentos='+this.id,
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
        url: 'http://localhost:3000/firstChart/'+this.id,
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