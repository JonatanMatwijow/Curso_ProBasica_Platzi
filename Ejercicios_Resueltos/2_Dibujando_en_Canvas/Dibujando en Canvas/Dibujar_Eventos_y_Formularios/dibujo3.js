var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var alto = d.height;

var lienzo = d.getContext("2d");
var olineas = 16;
var colorcito = "#0000FF";
dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 299,1,1,1);
dibujarLinea(colorcito, 1,299,299,299);
dibujarLinea(colorcito, 299,299,299,1);

for(l=0; l < olineas; l++)
{
 xi = 150 - (10 * l);
 yf = 10 * l;
 dibujarLinea("#18A558", xi, 150, 150, yf);
 xi = 150 + (10 * l);
 yf = 10 * l;
 dibujarLinea("#18A558", xi, 150, 150, yf);
 xi = 10 * l;
 yf = 150 + (10 * l);
 dibujarLinea("#18A558", xi, 150, 150, yf);
 xf = 300 - (10 * l);
 yi = 150 + (10 * l);
 dibujarLinea("#18A558", 150, xf, yi, 150);
 console.log("linea " + l)
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var xi, xf, yi, yf;
  var espacio = ancho / lineas;

for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = ancho - (l * espacio);
    yf = espacio * l;
    dibujarLinea("#05445E", 0, yi, xf, ancho);
    dibujarLinea("#05445E", ancho, yi, xf, 0);
    dibujarLinea("grey", xi, 0, 0, yf);
    dibujarLinea("grey", xi, ancho, ancho, yf);
  }
}
