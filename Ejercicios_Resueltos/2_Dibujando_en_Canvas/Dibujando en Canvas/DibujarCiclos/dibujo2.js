var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var olineas = 16;
var l = 0;
var yi, xf;
var xi, yf;
var colorcito = "#0000FF";

for(l=0; l < lineas; l++)
{
 yi = 10 * l;
 xf = 10 * (l + 1);
 dibujarLinea("#05445E", 0, yi, xf, 300);
 console.log("linea " + l)
}
for(l=0; l < lineas; l++)
{
 yi = 10 * l;
 xf = 10 * (l + 1);
 dibujarLinea("#05445E", 300, yi, xf, 0);
 console.log("linea " + l)
}
for(l=0; l < lineas; l++)
{
 xi = 300 - (10 * l);
 yf = 10 * l;
 dibujarLinea("grey", xi, 0, 0, yf);
 console.log("linea " + l)
}
for(l=0; l < lineas; l++)
{
 xi = 300 - (10 * l);
 yf = 10 * l;
 dibujarLinea("grey", xi, 300, 300, yf);
 console.log("linea " + l)
}
for(l=0; l < olineas; l++)
{
 xi = 150 - (10 * l);
 yf = 10 * l;
 dibujarLinea("#18A558", xi, 150, 150, yf);
 console.log("linea " + l)
}
for(l=0; l < olineas; l++)
{
 xi = 150 + (10 * l);
 yf = 10 * l;
 dibujarLinea("#18A558", xi, 150, 150, yf);
 console.log("linea " + l)
}
for(l=0; l < olineas; l++)
{
 xi = 10 * l;
 yf = 150 + (10 * l);
 dibujarLinea("#18A558", xi, 150, 150, yf);
 console.log("linea " + l)
}
for(l=0; l < olineas; l++)
{
 xf = 300 - (10 * l);
 yi = 150 + (10 * l);
 dibujarLinea("#18A558", 150, xf, yi, 150);
 console.log("linea " + l)
}

dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 299,1,1,1);
dibujarLinea(colorcito, 1,299,299,299);
dibujarLinea(colorcito, 299,299,299,1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
