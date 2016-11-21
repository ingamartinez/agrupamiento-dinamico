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
            fillList(data);
        }
    });
}

function fillList(data) {
    var usuarios="";
    data.forEach(function (n) {
        usuarios+=  '<li class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'+
                        '<a href="#" onclick="fillTags('+n.id+')">'+n.nombre+'</a>'+
                    '</li>'

    });
    console.log(usuarios);
    document.getElementById('list-usuarios').innerHTML=usuarios;
}

function fillTags(idUsuario) {
    showTags();
    console.log(idUsuario);
}