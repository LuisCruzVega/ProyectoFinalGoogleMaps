var Contrasenia ="admin"
alert("Solo personal Autorizado!!");
var Nombre=prompt("Ingrese su nombre: ");
ValidarContrasenia();
function ValidarContrasenia() {
    var Password=prompt("Ingrese su Contraseña: ");
    if(Password===Contrasenia){
        alert("Hola!! " + Nombre + ", puede gestionar en Google Maps");
        return true;
    }
    if(ValidarContrasenia()==false){
        ValidarContrasenia();
    }
}
