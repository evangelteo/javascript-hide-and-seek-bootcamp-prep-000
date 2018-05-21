function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < ranks[i].children)
    ranks[i]
  }
}