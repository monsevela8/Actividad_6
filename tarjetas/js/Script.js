document.getElementById('tipo').addEventListener("change",tipoTarSeleccionado);
document.getElementById('fondo').addEventListener("change",colorFondo);
document.getElementById('mostrar_tarjeta').addEventListener("click",function(){mostrarTarjeta();});

function tipoTarSeleccionado(){
    capasImg=document.getElementsByName("tarimag");
    for(i=0; i<capasImg.length;i++){
        capasImg[i].style.display="none";
    }
    var imgtarjeta=document.getElementById("tipo").value;
    document.getElementById(imgtarjeta).style.display="block";
}
var imgTarjeta=function(nombreFoto){
    document.getElementById("Vista_Previa").src="img/"+nombreFoto+".jpg";
    let image=document.getElementById("Vista_imagen").innerHTML;
    localStorage.setItem('image',image);
}

function colorFondo(){
    var fondo=document.getElementById('fondo').value;
    document.getElementById('VistaPrevia').style.backgroundColor=fondo;
    localStorage.setItem('fondo',fondo);
}

function nombreEnvia(){
    var nom=document.getElementById('nombre_envia').value;
    var nom_color=document.getElementById('color_nombre_envía').value;
    document.getElementById('nombre_envia_texto').innerHTML=nom;
    document.getElementById('nombre_envia_texto').style.color=nom_color;
    document.getElementById('nombre_envia_texto').style.fontSize="40px";
    document.getElementById('nombre_envia_texto').style.fontFamily= "'Brush Script MT', cursive";
    localStorage.setItem('nom',nom);
    localStorage.setItem('nom_color',nom_color);
}

function saludoTexto(){
    var saludo=document.getElementById('saludo').value;
    var saludo_color=document.getElementById('color_saludo').value;
    document.getElementById('saludo_texto').innerHTML=saludo;
    document.getElementById('saludo_texto').style.color=saludo_color;
    document.getElementById('saludo_texto').style.fontSize="25px";
    document.getElementById('saludo_texto').style.fontFamily= "'Brush Script MT', cursive";
    localStorage.setItem('saludo',saludo);
    localStorage.setItem('saludo_color',saludo_color);
}
function cuerpoTexto(){
    var cuerpo_tex=document.getElementById('cuerpo_tex').value;
    cuerpo_tex=cuerpo_tex.replace(/\n/g,"<br/>");
    var clr_cuerpo_tex=document.getElementById('color_cuerpo_tex').value;
    document.getElementById('cuerpo_texto').innerHTML=cuerpo_tex;
    document.getElementById('cuerpo_texto').style.color=clr_cuerpo_tex;
    document.getElementById('cuerpo_texto').style.fontSize="23px";
    document.getElementById('cuerpo_texto').style.fontStyle="Arial";
    localStorage.setItem('cuerpo_tex',cuerpo_tex);
    localStorage.setItem('clr_cuerpo_tex',clr_cuerpo_tex);
}
let mostrarTarjeta=function(){
    window.open('Tarjeta.html');
}