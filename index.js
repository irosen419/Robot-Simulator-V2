document.addEventListener("DOMContentLoaded", function () {
  createGrid()
  renderBot(currentPosition)

  let movesContainer = document.getElementById('moves-container')
  document.addEventListener("keydown", function (e) {
    let moveLi = document.createElement("li")
    if (e.key === "ArrowUp") {
      moveLi.innerText = "up"
      movesContainer.append(moveLi)
    } else if (e.key === "ArrowDown") {
      moveLi.innerText = "down"
      movesContainer.append(moveLi)
    } else if (e.key === "ArrowLeft") {
      moveLi.innerText = "left"
      movesContainer.append(moveLi)
    } else if (e.key === "ArrowRight") {
      moveLi.innerText = "right"
      movesContainer.append(moveLi)
    }

  })

  let moveBtn = document.getElementById('move-button')

  moveBtn.addEventListener('click', function (e) {
    function moveFromList() {
      let direction = movesContainer.firstElementChild.textContent
      move(direction)
      movesContainer.firstElementChild.remove()
      if (movesContainer.firstElementChild === null) {
        clearInterval(myVar)
      }
    }
    let myVar = setInterval(moveFromList, 500)
  })

});

