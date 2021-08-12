// add div element into HTML
let newLi = document.createElement('li')
// add a class to newLi
newLi.classList.add('my-li-class')
// add div element into HTML
let newA = document.createElement('a')
// assign a  class to newA
newA.classList.add('my-a-class')
newA.innerHTML='New menu link'
// get menu
let mainMenu = document.getElementById('main-nav').getElementsByTagName('ul')[0]

// add our newLi element inside mainMenu, in the last position
mainMenu.appendChild(newLi)
// add element newA inside newLi
newLi.appendChild(newA)


