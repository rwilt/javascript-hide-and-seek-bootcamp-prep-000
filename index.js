function getFirstSelector(selector)  {
return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)

}

// <ul class="ranked-list">
//   <li>1</li>
//   <li>2</li>
// </ul>
//
// <ul class="ranked-list">
//   <li>12</li>
//   <li>11</li>
//   <li>10</li>
// </ul>

function increaseRankBy(n) {
  return parseInt(document.querySelector('ul.ranked-list li li')+ 1)

}
