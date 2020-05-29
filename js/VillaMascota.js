//Villa Mascota Javascript file
$(function(){ // beginning (jQuery ready

//---Login

$("#loginButton").on('click', function(e){
    e.preventDefault(); // you need to prevent the submit functionality so the modal works
    var $logMsg = $('#loginMessage');
    if($logMsg.text() == ""){
        $logMsg.text("El boton de login funciona");
    }
    else {
        $logMsg.text("");
    }
});

//Greeting
(function(){
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
    greeting = "Bienvenido, buenos días!";
    } 
    else if (time < 19){
    greeting = "Bienvenido, buenas tardes!";
    } 
    else {
    greeting = "Bienvenido, buenas noches!";
    }
    $('#saludo').text(greeting);
    })();

// Carousel

//$('carousel2').css({
//
//});



//--LocalStorage Sign-up

if(window.localStorage){//Validate if it is supported by the browser
// Get form elements
    var nombre = document.getElementById('inpName');
    var apellido = document.getElementById('inpLastName');
    var telefono = document.getElementById('inpPhone');
    var nacimiento = document.getElementById('inpDOB');
    var correo = document.getElementById('inpMail');
    var usuario = document.getElementById('inpUser');
    var contrasena = document.getElementById('inpPass');
//Element populated by localStorage if there is info
    nombre.value = localStorage.getItem('inpName');
    apellido.value = localStorage.getItem('inpLastName');
    telefono.value = localStorage.getItem('inpPhone');
    nacimiento.value = localStorage.getItem('inpDOB');
    correo.value = localStorage.getItem('inpMail');
    usuario.value = localStorage.getItem('inpUser');
    contrasena.value = localStorage.getItem('inpPass');
// Save data
    $("#registro").on('click', function(e){
    e.preventDefault();       
    localStorage.setItem('inpName', nombre.value);
    localStorage.setItem('inpLastName', apellido.value);
    localStorage.setItem('inpPhone', telefono.value);
    localStorage.setItem('inpDOB', nacimiento.value);
    localStorage.setItem('inpMail', correo.value);
    localStorage.setItem('inpUser', usuario.value);
    localStorage.setItem('inpPass', contrasena.value);
    debugger;
    });

    $("#loginAuthentication").on('click', function(e){
        e.preventDefault();       
        localStorage.setItem('inpUser', usuario.value);
        localStorage.setItem('inpPass', contrasena.value);
        });
} 

}); // end  (jQuery ready)