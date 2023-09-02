function LenStories(num, el) {
  // Получаем в аватарке SVG circle
  const cir = el.querySelector("svg.ava__stories circle");

  // Если circle существует там и кол-во "историй" больше 1
  if (cir && num > 1) {
    //
    // Длина отступа
    const gap = 10;

    // Вычисляем длины пункта
    const totalLength = 2 * Math.PI * +cir.getAttribute("r");
    // Вычисляем отступ между пунктами
    const dashLength = totalLength / num - (gap * num) / num;

    // Выставляем значения
    cir.setAttribute("stroke-dasharray", dashLength + " " + gap);
    cir.setAttribute("stroke-dashoffset", dashLength / 2);
  }
}

// Это для демо
const ava = document.querySelectorAll(".ava");
[1, 2, 3, 6, 10].map((val, i) => LenStories(val, ava[i]));
