var NombreProducto = document.getElementById("nameprod");

var Listaprods = [];


function Agregar(){
    var prod = [];

    prod.NombreProducto = NombreProducto.value;
    Listaprods.push(prod);

    console.log(Listaprods);
}