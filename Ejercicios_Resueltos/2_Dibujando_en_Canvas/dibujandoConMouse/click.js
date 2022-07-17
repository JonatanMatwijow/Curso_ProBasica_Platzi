var cuadro = document.getElementById("pixeles"); //invocamos el canvas del html.
var lienzo = cuadro.getContext("2d"); //le asignamos una dimension de 2d al canvas.
var posicion = cuadro.getBoundingClientRect(); //esta linea nos devuelve la posicion con respectao al canvas de left y top.
var x = 0;
var y = 0;
var color = "black";
var grosor = 1;
var dibujando = false;

function defcolor(c) {
  color = c;
}
function defgrosor(g) {
  grosor = g;
}

cuadro.addEventListener("mousedown", empezarDibujo);

function empezarDibujo(click) {
  x = click.clientX - posicion.left; // x es igual a la posicion en donde hizo el primer click
  y = click.clientY - posicion.top; //(menos) la posicion del mouse con respecto a la pantalla.
  dibujando = true;
  
}

cuadro.addEventListener("mousemove", moviendonos);

function moviendonos(click) {
  if (dibujando === true) {
    dibujarLinea(
      x,
      y,
      click.clientX - posicion.left,
      click.clientY - posicion.top
    );
    x = click.clientX - posicion.left;
    y = click.clientY - posicion.top;
  }
}

document.addEventListener("mouseup", parandoDibujo);

function parandoDibujo(click) {
  if (dibujando === true) {
    dibujarLinea(
      x,
      y,
      click.clientX - posicion.left,
      click.clientY - posicion.top
    );
    x = 0;
    y = 0;
    dibujando = false;
  }
}

function dibujarLinea(x1, y1, x2, y2) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}
