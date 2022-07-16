var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("grey", 0, 0, 10, 300);
dibujarLinea("#AAF", 10, 1000, 0, 200);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
