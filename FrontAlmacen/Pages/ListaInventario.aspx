<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ListaInventario.aspx.cs" Inherits="FrontAlmacen.Pages.ListaInventario" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />

    <link href="../Assets/Css/tables.css" rel="stylesheet" />

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>

    <script src="../Assets/jquery-ui-1.10.4.custom/jquery-ui-1.10.4.custom/js/jquery-1.10.2.js"></script>

    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <script src="../Assets/Js/inventario.js"></script>
    <title></title>
</head>
<body>

    <div class="card">
        <div class="card-body">
            <div class="col-md-12">
                 <div class="col-md-6">
                     <input type="button" class="btn btn-primary" value="Nuevo (+)" onclick="nuevo()" /> 
                 </div>
                 <br />
                 <h5 class="text-center">Lista de Inventario</h5> 
                <table id="ListaInventario" class="table table-bordered"></table>
            </div>
        </div>

    </div>

    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
