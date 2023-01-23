const inp = document.querySelector("#inp")
const wordEl = document.querySelector(".word")
const meaningEl = document.querySelector(".meaning")
const aboutEl = document.querySelector(".about")
const button = document.querySelector(".btn")

let word

async function getData(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  showData(data)
}

button.addEventListener("click", getMeaning)

function getMeaning() {
  //   word = inp.value
  word = "strong"
  getData(word)
}

function showData(data) {
  wordEl.innerText = data.word
  meaningEl.innerText = data[0].meanings[0].definitions[0].definition
}

window.addEventListener("load", getMeaning)
