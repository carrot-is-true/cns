var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//canvas.width = '100px';
var select = document.getElementById('sel')
var value = select.value;
function loadImage(src, onload) {
  // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
  var img = new Image();

  img.onload = onload;
  img.src = src;
  img.className = 'okras';
  img.style = '';

  return img;
}

function onChange() {
  var e = document.getElementById("sel");
  var value = e.value;
  e.onchange = onChange;
  context.clearRect(0, 0, 900, 900)
 if (value == "value2") {
   var img1 = loadImage('1/2.png', 'main');
    context.drawImage(img1, 0, 0);
  }
  else  if (value == "value1") {
    var img1 = loadImage('1/1.png', 'main');
    context.drawImage(img1, 0, 0);
  }
 else if (value == "value3") {
   var img1 = loadImage('1/11.png', 'main');
   context.drawImage(img1, 0, 0);
 }

  else {
    console.log('ошибочка')
  }
}
onChange()
  get_hex.addEventListener("input", function () {
  var color = get_hex.value;
  changeColor(color)
  });
var previousColorElement;

function changeColor(color) {
  // 	Меняем текущий цвет рисования
  context.strokeStyle = color;

  // Меняем стиль элемента <img>, по которому щелкнули
  imgElement.className = "Selected";

  // Возвращаем ранее выбранный элемент <img> в нормальное состояние
  if (previousColorElement != null)
    previousColorElement.className = "";


}


var previousThicknessElement;

function changeThickness(thickness, imgElement) {
  // Изменяем текущую толщину линии
  context.lineWidth = thickness;

  // Меняем стиль элемента <img>, по которому щелкнули
  imgElement.className = "Selected";

  // Возвращаем ранее выбранный элемент <img> в нормальное состояние
  if (previousThicknessElement != null)
    previousThicknessElement.className = "";

  previousThicknessElement = imgElement;
}

function startDrawing(e) {
  // Начинаем рисовать
  isDrawing = true;

  // Создаем новый путь (с текущим цветом и толщиной линии) 
  context.beginPath();

  // Нажатием левой кнопки мыши помещаем "кисть" на холст
  context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
  if (isDrawing == true) {
    // Определяем текущие координаты указателя мыши
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    // Рисуем линию до новой координаты
    context.lineTo(x, y);
    context.stroke();
  }
}

function stopDrawing() {
  isDrawing = false;
}
canvas.onmousedown = startDrawing;
canvas.onmouseup = stopDrawing;
canvas.onmouseout = stopDrawing;
canvas.onmousemove = draw;
