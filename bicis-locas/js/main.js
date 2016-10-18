
/*function validateForm(){
	/* Escribe tú código aquí 
var largo = document.getElementsByClassName("form-control").length;
var nombre = document.getElementById("name").value;
var apellido= document.getElementById("lastname").value;
var contrasenia= document.getElementById("inputPassword").value;
var email=document.getElementById("input-email").value;

var regexEmail=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var regexNombre=/^[a-z ,.'-]+$/i;
var errores=true;
var mensaje=" ";


if (!regexEmail.test(email){
	mensaje +="Esta mal el email";
	errores==false;
}

if(!regexNombre.test(nombre){
	mensaje +="Esta mal el nombre";
	errores==false;
}

if(!errores){
	alert(mensaje);
	return false;
}
return errores;*/



    function validateForm(){
    	var nombre, apellido, mail, contraseña;
    	nombre= document.getElementById('name').value;
    	apellido= document.getElementById('lastname').value;
    	mail = document.getElementById('input-email').value;
    	contraseña= document.getElementById('input-password').value;
    	if (nombre==" " || apellido==" " || mail==" " || contraseña==" ") {
    		alert('todos los campos son obligatorios');
    		return false 
    	}
    	else if (contraseña.length <6){
    		alert('la contraseña es muy corta');
    		return false;
    	}
    	else if (contraseña=='contraseña' || contraseña==123456 || contraseña==098754) {
    		alert('esta contraseña no esta permitida');
    		return false;
    	}
    	else if(/[a-z]/.test(nombre[0]) || /[a-z]/.test(apellido[0])){
    		alert('La primera letra en nombre y apellido debe ser mayuscula');
    		return false;
    	}
    	else if (!/^[a-zA-Z]*$/g.test(document.getElementById('lastname').value)) {
    		alert('el apellido debe contener solo letras');
    		return false;
    	}
    	else if (!/^[a-zA-Z]*$/g.test(document.getElementById('name').value)) {
    		alert('el nombre debe contener solo letras');
    		return false;
    	}
    	else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(input-email)) ) {
    		alert('el correo es incorrecto debe llevar al menos un @')
      		return false;
    }
    }






