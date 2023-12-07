function createBox(sideLength) {
    // a style should be added here depending on the inputted length
    const newDiv = document.createElement("div")
    newDiv.className = "etch-box"
    // the width and height is 960px
    let size = 960 / sideLength

    newDiv.style.width = `${size}px`
    newDiv.style.height = `${size}px`

    newDiv.addEventListener("mouseover", function() {
        newDiv.style.backgroundColor = getRandomColor();
    });

    return newDiv
}

function resetGrid() {
    let container = document.querySelector('.grid');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

function createGrid(sideLength) {
    // loop over side length, then add divs
    const container = document.querySelector('.grid')
    resetGrid()

    for(let i = 0; i < sideLength; i++) {
        for(let j = 0; j < sideLength; j++) {
            let div = createBox(sideLength);
            container.appendChild(div)
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const userPrompt = document.querySelector("#user-prompt")
userPrompt.addEventListener('click', function() {
    const userIn = prompt("Please input dimension size 1-100:", "16")

    if(userIn === null) { 
        // check if cancelled
        alert("user pressed cancel")
    } else if(isNaN(parseInt(userIn))) {
        // check if not a number
        alert("not a number!")
    } else if(parseInt(userIn) < 1) {
        // check if too low
        alert("too low!")
    } else if(parseInt(userIn) > 100) {
        // check if too high
        alert("too high!")
    } else {
        // if none of these, create
        createGrid(userIn)
    }
})

const createSixteen = document.querySelector("#sixteen")
createSixteen.addEventListener('click', function() {
    createGrid(16)
})

const createEight = document.querySelector("#eight")
createEight.addEventListener('click', function() {
    createGrid(8)
})

const createFour = document.querySelector("#four")
createFour.addEventListener('click', function() {
    createGrid(4)
})