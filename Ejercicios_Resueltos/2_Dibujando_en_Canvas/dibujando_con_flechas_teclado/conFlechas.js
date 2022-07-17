var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 250;
var y = 250;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("green", 0, 0, 0, 799, papel);
dibujarLinea("green", 799, 799, 799, 0, papel);
dibujarLinea("green", 0, 799, 799, 799, papel);
dibujarLinea("green", 799, 0, 0, 0, papel);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keyup", dibujar);

var colorcito = "blue";
var movimiento = 10;

function dibujar(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      console.log(evento);

      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x + movimiento, y, x, y, papel);
      x = x + movimiento;
      break;
  }
}
