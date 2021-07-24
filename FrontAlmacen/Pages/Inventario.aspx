<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Inventario.aspx.cs" Inherits="FrontAlmacen.Pages.Inventario" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>

    <script src="../Assets/jquery-ui-1.10.4.custom/jquery-ui-1.10.4.custom/js/jquery-1.10.2.js"></script>

    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <script src="../Assets/Js/inventario.js"></script>

    <title></title>
</head>
<body>
    <div class="container">
        <h2 class="text-center">Getionar Productos</h2>
        <form class="form-control col-11">
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Producto</label>
                </div>
                <div class="col-10">
                    <input type="text" id="txtNombreProducto" class="form-control" style="margin: 0px -6px  0px 6px;" />
                </div>

            </div>
            <br />
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Valor Unit</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="txtValUnit" class="form-control" />
                </div>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Unidad</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="txtUnidad" class="form-control" />
                </div>

            </div>
        </form>
        <br />
        <div class="card">
            <div class="card-body">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label">Categoria</label>
                    </div>
                    <div class="col-auto col-4">
                        <select class="form-select" id="selCategoria" onchange="cargarSubCategorias()"></select>
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label">Subcategoria</label>
                    </div>
                    <div class="col-auto col-4">
                        <select class="form-select" id="selSubCategoria"></select>
                    </div>

                </div>
            </div>
        </div>
        <br />
        <div class="card">
            <div class="card-body">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label" title="Fecha de vencimiento producto">Vencimiento</label>
                    </div>
                    <div class="col-auto col-4">
                        <input type="text" id="txtFechaVen" class="form-control" />
                    </div>
                </div>
            </div>
        </div>
        <br />

        <div class="card">
            <div class="card-body">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <input type="button" class="btn btn-primary" value="Guardar" onclick="guardarInventario()"/>
                    </div>
                    <div class="col-auto">
                        <input type="button" class="btn btn-primary" value="Actualizar" onclick="actualizarInventario();" />
                    </div>
                    <div class="col-auto">
                        <input type="button" class="btn btn-primary" value="Listar" onclick="listar()" />
                    </div>
                    <div class="col-auto">
                        <input type="button" class="btn btn-primary" value="Eliminar" onclick="eliminarInventario()" />
                    </div>
                </div>
            </div>
        </div>
        <%-- modal de categorias--%>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
