function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    const childr = ranks[i].children
    for (let j = 0; j < childr.length; j++) {
      childr[j].innerHTML = parseInt(childr[j].innerHTML)+n
    }
  }
}

function deepestChild() {
  var grandnode = document.querySelector('div#grand-node')
  while (grandnode[0].hasChildNodes()) {
    grandnode = grandnode.children
  }
  return grandnode[0]
}