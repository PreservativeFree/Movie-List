/*console.log("Hello World")*/

const message = document.querySelector("#message") /* find anything with the message ID */

const addMovie = function(e) {
    e.preventDefault();
    let inputField = document.querySelector('input') /* grab any html like this */
    var movie = document.createElement('li')
    var movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value /*Create new variable to equal value in input tag */
    movieTitle.addEventListener("click", crossOffMovie)
    /*movie.appendChild.getElementById(movieTitle)*/
    movie.appendChild(movieTitle)
    
    var delBtn = document.createElement('button')
    delBtn.textContent = "X"
    delBtn.addEventListener("click", deleteMovie)
    movie.appendChild(delBtn)
    /*document.querySelector('ul').appendChild(movie)*/
    const list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ''
}
const deleteMovie = function(e) {
    message.textContent = `${e.target.parentNode.firstChild.textContent} deleted!`
    e.target.parentNode.remove()
    revealMessage()
}

const crossOffMovie = function(e) {
    e.target.classList.toggle('checked')

    if(e.target.classList.contains('checked') == true) {
        message.textContent = `${e.target.textContent} watched`
    } else {
        message.textContent = `${e.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')

    setTimeout(() => {
		message.classList.add('hide')
	}, 1000)
}

document.querySelector("form").addEventListener("submit", addMovie) /*forms just know about a submit action*/ 
/*document.querySelector("button").addEventListener("click", deleteMovie) you gave the delete to every button in the DOM*/

