var enableSearch;
$(document).ready(function () {

    var currentPage = window.location.href;
    if (currentPage == "https://localhost:44341/Pages/ListaInventario.aspx") {
        listarInventario();
        // Evento al momento de seleccionar una fila de la tabla
        $('#ListaInventario').on('click', 'tbody tr', function (event) {
            $(this).addClass('highlight').siblings().removeClass('highlight');
            var idProd = '';
            idProd = $(this).find('td:first-child').html();
            localStorage.setItem('idProducto', idProd);
            enableSearch = true;
            localStorage.setItem('enableSearch', enableSearch);
            location.href = "Inventario.aspx";

        });

    } else {
        $('#txtFechaVen').datepicker({
            uiLibrary: 'bootstrap4',
            modal: true,
            header: true,
            footer: true,
            showRightIcon: false,
            format: 'yyyy-mm-dd'
        });
        cargarCategorias();

        if (localStorage.getItem('enableSearch') == "true") {
            enableSearch = true;
            buscarInventario();
        } else {
            enableSearch = false;
        }
    }
});

function cargarCategorias() {
    $.ajax({
        url: 'https://localhost:44326/api/Inventario/CargarCategorias',
        type: 'GET',

        success: function (data) {
            $("#selCategoria").html("");
            for (var i = 0; i < data.length; i++) {
                $("#selCategoria").append("<option value=" + data[i].idCategoria + ">" + data[i].nombreCategoria + "</option>");
            }
        }

    });

}
function listar() {
    location.href = "ListaInventario.aspx";

}
function cargarSubCategorias() {
    var idCategoria = $("#selCategoria option:selected").val();
    var datos = {
        "idCategoria": idCategoria
    };
    $.ajax({
        url: 'https://localhost:44326/api/Inventario/CargarSubCategorias',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            $("#selSubCategoria").html("");
            for (var i = 0; i < data.length; i++) {
                $("#selSubCategoria").append("<option value=" + data[i].idSubCategoria + ">" + data[i].nombreSubCategoria + "</option>");
            }
        }

    });

}


function guardarInventario() {
    var nombreProducto = $("#txtNombreProducto").val();
    var valorUnitario = $("#txtValUnit").val();
    var unidad = $("#txtUnidad").val();
    var categoria = $("#selCategoria option:selected").val();
    var subcategoria = $("#selSubCategoria option:selected").val();
    var fechaVenc = $("#txtFechaVen").val();

    var datos = {
        "Parametro": "GUARDAR",
        "nombre": nombreProducto,
        "unidad": unidad,
        "valor": valorUnitario,
        "idCategoria": categoria,
        "idSubCategoria": subcategoria,
        "fechaVencimiento": fechaVenc,
        "idProducto": "0"
    };


    $.ajax({
        url: 'https://localhost:44326/api/Inventario/GestionarInventario',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                alert(data[i].resultado);
                enableSearch = false;
                location.href = "ListaInventario.aspx";
            }
        }

    });


}
function nuevo() {
    location.href = "Inventario.aspx";
    localStorage.setItem('enableSearch', false);
}

function actualizarInventario() {
    var nombreProducto = $("#txtNombreProducto").val();
    var valorUnitario = $("#txtValUnit").val();
    var unidad = $("#txtUnidad").val();
    var categoria = $("#selCategoria option:selected").val();
    var subcategoria = $("#selSubCategoria option:selected").val();
    var fechaVenc = $("#txtFechaVen").val();
    var idProducto = localStorage.getItem("idProducto");

    var datos = {
        "Parametro": "ACTUALIZAR",
        "nombre": nombreProducto,
        "unidad": unidad,
        "valor": valorUnitario,
        "idCategoria": categoria,
        "idSubCategoria": subcategoria,
        "fechaVencimiento": fechaVenc,
        "idProducto": idProducto
    };


    $.ajax({
        url: 'https://localhost:44326/api/Inventario/GestionarInventario',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                alert(data[i].resultado);
                enableSearch = false;
                location.href = "ListaInventario.aspx";
            }
        }

    });


}
function eliminarInventario() {
    var nombreProducto = "";
    var valorUnitario = "";
    var unidad = "0";
    var categoria = "0";
    var subcategoria = "0";
    var fechaVenc = "";
    var idProducto = localStorage.getItem("idProducto");

    var datos = {
        "Parametro": "ELIMINAR",
        "nombre": nombreProducto,
        "unidad": valorUnitario,
        "valor": unidad,
        "idCategoria": categoria,
        "idSubCategoria": subcategoria,
        "fechaVencimiento": fechaVenc,
        "idProducto": idProducto
    };

    $.ajax({
        url: 'https://localhost:44326/api/Inventario/GestionarInventario',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                alert(data[i].resultado);
                enableSearch = false;
                location.href = "ListaInventario.aspx";
            }

        }

    });

}

function buscarInventario() {
    if (enableSearch == true) {
        var nombreProducto = "";
        var valorUnitario = "";
        var unidad = "0";
        var categoria = "0";
        var subcategoria = "0";
        var fechaVenc = "";
        var idProducto = localStorage.getItem("idProducto");
        var datos = {
            "Parametro": "BUSCAROLISTAR",
            "nombre": nombreProducto,
            "unidad": valorUnitario,
            "valor": unidad,
            "idCategoria": categoria,
            "idSubCategoria": subcategoria,
            "fechaVencimiento": fechaVenc,
            "idProducto": idProducto
        };

        $.ajax({
            url: 'https://localhost:44326/api/Inventario/GestionarInventario',
            type: 'POST',
            data: JSON.stringify(datos),
            contentType: "application/json",
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    var nombreProducto = data[i].nombre;
                    var valorUnitario = data[i].valorunitario;
                    var unidad = data[i].unidades;
                    var categoria = data[i].idCategoria;
                    var subcategoria = data[i].idSubCategoria;
                    var fechaVenc = data[i].fechaVencimientoProd;
                }

                $("#txtNombreProducto").val(nombreProducto);
                $("#txtValUnit").val(valorUnitario);
                $("#txtUnidad").val(unidad);
                $("#selCategoria").val(categoria);
                localStorage.setItem('selCategoria', categoria);
                localStorage.setItem('selSubCategoria', subcategoria);
                cargarsubCategoriasBuscar();
                $("#txtFechaVen").val(fechaVenc);
            }

        });
    } else {
        return;
    }
}

function cargarsubCategoriasBuscar() {
    var idCategoria = localStorage.getItem('selCategoria');
    var datos = {
        "idCategoria": idCategoria
    };
    $.ajax({
        url: 'https://localhost:44326/api/Inventario/CargarSubCategorias',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            $("#selSubCategoria").html("");
            for (var i = 0; i < data.length; i++) {
                $("#selSubCategoria").append("<option value=" + data[i].idSubCategoria + ">" + data[i].nombreSubCategoria + "</option>");
            }
        }

    });

    $("#selSubCategoria").val(localStorage.getItem('selSubCategoria'));
}


function listarInventario() {
    var nombreProducto = "";
    var valorUnitario = "";
    var unidad = "0";
    var categoria = "0";
    var subcategoria = "0";
    var fechaVenc = "";
    var idProducto = "0";
    var datos = {
        "Parametro": "BUSCAROLISTAR",
        "nombre": nombreProducto,
        "unidad": valorUnitario,
        "valor": unidad,
        "idCategoria": categoria,
        "idSubCategoria": subcategoria,
        "fechaVencimiento": fechaVenc,
        "idProducto": idProducto
    };


    $("#ListaInventario").empty();
    var $ListaInventario = $("#ListaInventario");
    var encabezado = $("<tr></tr>");
    encabezado.append("<td>  Id producto </td>");
    encabezado.append("<td>  Nombre producto </td>");
    encabezado.append("<td>  N° de unidades </td>");
    encabezado.append("<td>  Valor del producto </td>");
    encabezado.append("<td>  Categoria </td>");
    encabezado.append("<td>  Sub Categoria</td>");
    encabezado.append("<td>  Fecha de vencimiento</td>");

    $ListaInventario.append(encabezado);


    $.ajax({
        url: 'https://localhost:44326/api/Inventario/GestionarInventario',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {

            $.each(data, function (idx, item) {
                var $tr = $("<tr></tr>");
                $tr.append("<td>" + item.idProducto + "</td>");
                $tr.append("<td>" + item.nombre + "</td>");
                $tr.append("<td>" + item.unidades + "</td>");
                $tr.append("<td>" + item.valorunitario + "</td>");
                $tr.append("<td>" + item.idCategoria + "</td>");
                $tr.append("<td>" + item.idSubCategoria + "</td>");
                $tr.append("<td>" + item.fechaVencimientoProd + "</td>");

                $ListaInventario.append($tr);
            });
        }

    });
}




function actualizarInventario() {
    // Metodo para actualizar el inventario
    var nombreProducto = $("#txtNombreProducto").val();
    var valorUnitario = $("#txtValUnit").val();
    var unidad = $("#txtUnidad").val();
    var categoria = $("#selCategoria option:selected").val();
    var subcategoria = $("#selSubCategoria option:selected").val();
    var fechaVenc = $("#txtFechaVen").val();
    var idProducto = localStorage.getItem("idProducto");
    var datos = {
        "Parametro": "ACTUALIZAR",
        "nombre": nombreProducto,
        "unidad": valorUnitario,
        "valor": unidad,
        "idCategoria": categoria,
        "idSubCategoria": subcategoria,
        "fechaVencimiento": fechaVenc,
        "idProducto": idProducto
    };
    enableSearch = false;
    $.ajax({
        url: 'https://localhost:44326/api/Inventario/GestionarInventario',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                alert(data[i].resultado);
                location.href = "ListaInventario.aspx";
            }
        }

    });
}