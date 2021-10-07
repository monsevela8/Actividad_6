(function(){
    document.getElementById("Tarjeta_Caja").style.display="block";
    document.getElementById("Vista_Previa_Img1").innerHTML=localStorage.getItem('image');
    document.getElementById('VistaPrevia1').style.backgroundColor=localStorage.getItem('fondo');
    document.getElementById("nombre1").innerHTML=localStorage.getItem('nom');
    document.getElementById("nombre1").style.color=localStorage.getItem('nom_color');
    document.getElementById('nombre1').style.fontSize="40px";
    document.getElementById('nombre1').style.fontFamily= "'Brush Script MT', cursive";
    document.getElementById("saludo1").innerHTML=localStorage.getItem('saludo');
    document.getElementById("saludo1").style.color=localStorage.getItem('saludo_color');
    document.getElementById('saludo1').style.fontSize="25px";
    document.getElementById('saludo1').style.fontFamily= "'Brush Script MT', cursive";
    document.getElementById("cuerpo1").innerHTML=localStorage.getItem('cuerpo_tex');
    document.getElementById("cuerpo1").style.color=localStorage.getItem('clr_cuerpo_tex');
    document.getElementById('cuerpo1').style.fontSize="23px";
    document.getElementById('cuerpo1').style.fontStyle="Arial";

})();