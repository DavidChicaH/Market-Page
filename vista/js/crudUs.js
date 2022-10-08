var NombreUsuario = document.getElementById("Username");

var Listausers = [];


function Agregarusuario(){
    var user = [];

    user.NombreUsuario = NombreUsuario.value;
    Listausers.push(user);

    console.log(Listausers);
}

function Eliminar(){
    
}