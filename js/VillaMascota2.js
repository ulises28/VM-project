//Javascript login button click event, will place text in the <p> element with the id 'LoginMessage
/*

function loginFun(){
var elMsg = document.getElementById('LoginMessage');
if (elMsg.textContent == ""){
    elMsg.textContent = "El boton de login funciona";
}
else{
    elMsg.textContent = "";    
}

//alert("Hello! I am an alert box!");
}


var buttonLogin = document.getElementById('loginButton');
if(buttonLogin)
{
    buttonLogin.addEventListener("click",loginFun,false);
}

*/



$(function(){ // beginning (jQuery ready

// $('li').addClass("menuOptions") // This class will enable to add a different style to menu buttons

//--Events--
//--Login--


//$('#loginButton').on('click', function(e){
//    e.preventDefault();
//    var $loginContainer = $('#loginContainer');
//    $loginContainer.hasClass("d-none") ? ($loginContainer.removeClass("d-none")) : ($loginContainer.addClass("d-none"));
//});

$('#hide').on('click', function(){
    $('li:lt(2)').hide().fadeIn(1500);
});

$("#loginButton").on('click', function(e){
    e.preventDefault();
    var $logMsg = $('#loginMessage');
    if($logMsg.text() == ""){
        $logMsg.text("El boton de login funciona");
    }
    else {
        $logMsg.text("");
    }
});



//---------------------------------Greeting------------------------------------------------------------------------------------------------------------
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
//---------------------------------Menu------------------------------------------------------------------------------------------------------------
 $('li.menuOptions').on('click mouseover',':not(.menuNotReady)',{eEl: 'El elemento es: ', eEv: ' el evento fue: '}, function(e) { 
    $('#menuPlaces').text('');
    $('#menuPlaces').html(e.data.eEl + '<pre><code>' + String(e.target.outerHTML) + '</code></pre>' + e.data.eEv + e.type);                //where the info will be placed in the web page
    }
);

 //before you fade in you need to hide
 $('li.menuOptions').each(function(index){  
    $(this).hide().delay(700 * index).fadeIn(700);
    }
);

//---------------------------------Body------------------------------------------------------------------------------------------------------------
/*0
$('h2').each(function() {
    $(this).hide().slideDown("slow");
});
*/
$('h2').hide().slideDown(9999);
}); // end  (jQuery ready)

