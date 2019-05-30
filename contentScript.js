// http://www.cuishuai.cc/game/

function findDifferent(spans) {
  let colorsArr = Array.from(spans).map(span => span.style.backgroundColor)
  let colors = {}

  colorsArr.forEach((spanBgColor, spanPosition) => {
    if (!colors[spanBgColor]) colors[spanBgColor] = [spanPosition]
    else colors[spanBgColor].push(spanPosition)
  })

  for (let [spanBgColor, spanPositionArr] of Object.entries(colors)) {
    if (spanPositionArr.length === 1) {
      // console.log(`第${spanPositionArr[0]}格不同`)
      return spans[spanPositionArr[0]]
    }
  }
}

function findAndClickDifferent() {
  let box = document.getElementById('box')
  let spans = box.querySelectorAll('span')

  findDifferent(spans).click()
}


const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(() => setTimeout(() => { findAndClickDifferent() }, 0));
observer.observe(document.getElementById('box'), config);

console.log('contentScript fired');
