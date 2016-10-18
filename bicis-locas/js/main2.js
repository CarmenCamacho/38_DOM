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


