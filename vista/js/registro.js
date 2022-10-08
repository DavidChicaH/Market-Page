var Nombre = document.getElementById("name");
    var Apel = document.getElementById("apellido");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var pass = document.getElementById("clave");
    var repass = document.getElementById("clave2");
    var country = document.getElementById("pais");  //selectedIndex
    var docutype = document.getElementById("tipoduco");  //selectedIndex//
    var documento = document.getElementById("documento");
    var radiobutton = document.getElementsByName("inlineRadioOptions");
    var año = document.getElementById("year"); //
    var mes = document.getElementById("month"); //
    var dia = document.getElementById("day"); //
    var num = document.getElementById("celular");
    var notis = document.getElementById("notifiaciones");

    var ListaUsers = [];

function validation() {

    var Nombre = document.getElementById("name").value;
    var Apel = document.getElementById("apellido").value;
    var username = document.getElementById("username");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("clave").value;
    var repass = document.getElementById("clave2").value;
    var country = document.getElementById("pais").selectedIndex;
    var docutype = document.getElementById("tipoduco").selectedIndex;
    var documento = document.getElementById("documento").value;
    var radiobutton = document.getElementsByName("inlineRadioOptions");
    var año = document.getElementById("year").selectedIndex;
    var mes = document.getElementById("month").selectedIndex;
    var dia = document.getElementById("day").selectedIndex;
    var num = document.getElementById("celular").value;

    var valor = new Date(año, mes, dia);

    var seleccion = false;
    var expresion = /\w+@\w+\.+[a-z]/;

    var sololetras = /[a-z]/;


    if (!sololetras.test(Nombre)) {
        alert("El nombre ingresado NO es válido");
        return false;
    }

    if (!isNaN(Apel)) {
        alert("El apellido ingresado no es válido");
        return false;
    }

    if (pass != repass) {
        alert("Las contraseñas no son iguales");
        return false;
    }

    if (isNaN(documento)) {
        alert("El documento ingresado NO es válido");
        return false;
    }

    if (isNaN(num)) {
        alert("El teléfono ingresado NO es válido");
        return false;
    }


    if (!expresion.test(email)) {
        alert("La dirección de correo ingresada no es válida");
        return false;
    }

    for (var i = 0; i < radiobutton.length; i++) {
        if (radiobutton[i].checked) {
            seleccion = true;
            break;
        }
    }
    if (!seleccion) {
        alert('No has seleccionado tu Género');
        return false;
    }

    return true;


}

function AñadirUser(){

    var User = [];
    User.Nombre = Nombre.value;
    User.Apel = Apel.value;
    User.username = username.value;
    User.email = email.value;
    User.pass = pass.value;
    User.repass = repass.value;
    User.country = country.selectedIndex;
    User.docutype = docutype.selectedIndex;
    User.documento = documento.value;
    User.radiobutton = radiobutton.value;
    User.dia = dia.selectedIndex;
    User.mes = mes.selectedIndex;
    User.año = año.selectedIndex;
    User.num = num.value;
    User.notis = notis;

    ListaUsers.push(User);

    console.log(ListaUsers);


}
    

