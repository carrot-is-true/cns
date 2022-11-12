var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();
img.src = 'https://i.ibb.co/Bjck7RW/2.png'
context.drawImage(img, 0, 0);
var get_hex = document.getElementById('get_hex');
var previousColorElement;
function changeColor(color) {
  // 	Меняем текущий цвет рисования
  get_hex.addEventListener("input", function () {
    var govno = get_hex.value;
    context.strokeStyle = govno;
  });

  // Меняем стиль элемента <img>, по которому щелкнули

  // Возвращаем ранее выбранный элемент <img> в нормальное состояние

} var previousThicknessElement;
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
function loadImage(src, onload) {
  // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
  var img = new Image();

  img.onload = onload;
  img.src = src;

  return img;
}
function onChange() {
  var e = document.getElementById("sel");
  var value = e.value;
  e.onchange = onChange;
  context.clearRect(0, 0, 900, 900)
  if (value == "value2") {
    var img1 = loadImage('https://i.ibb.co/Bjck7RW/2.png', 'main');
    context.drawImage(img1, 0, 0);
  }//https://i.ibb.co/vLfBzBY/1.png
  else if (value == "value1") {
    var img1 = loadImage('https://i.ibb.co/NZkRxNf/image.png', 'main');
    context.drawImage(img1, 0, 0);
    img1.width = '150px';
  }
  else if (value == "value3") {
    var img1 = loadImage('https://i.ibb.co/9qDZXbH/11.png', 'main');
    context.drawImage(img1, 0, 0);
  }

  else {
    console.log('ошибочка')
  }
}


onChange()
