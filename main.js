function LenStories(selector, options) {
  let {count, strokeWidth, gap} = options
  const el = document.querySelector(selector);

  if (strokeWidth > 10) {
    strokeWidth = 10
    console.error("strokeWidth не может быть больше 10. Задано значение 10.")
  }
  // чтобы отступы всегда были
  gap += strokeWidth

  const widthAva = +el.getBoundingClientRect().width;
  const radius = widthAva/2 - strokeWidth
  // Вычисляем длины пункта
  const totalLength = 2 * Math.PI * radius;
  // Вычисляем отступ между пунктами
  const dashLength = totalLength / count - (gap * count) / count;

  const svgBorder = `
  <svg 
    class="ava__stories" 
    viewbox="0 0 ${widthAva} ${widthAva}">
      <circle 
        cx="${widthAva/2}" 
        cy="${widthAva/2}" 
        r="${radius}" 
        fill="none" 
        stroke="url(#ava-stories-fill)" 
        stroke-width="${strokeWidth}" 
        stroke-linecap="round"
        stroke-dasharray="${dashLength + " " + gap}"
        stroke-dashoffset="${dashLength / 2}" />
  </svg>`

  el.insertAdjacentHTML("beforeend", svgBorder);
  document.querySelector(`${selector} > img`).setAttribute("style", `width: ${widthAva - strokeWidth*2 - 15}px`)
}

const options = {
  count: 10,
  strokeWidth: 15,
  gap: 5
}
LenStories(".ava", options)
