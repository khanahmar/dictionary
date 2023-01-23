const inp = document.querySelector("#inp")
const wordEl = document.querySelector(".word")
const mainEl = document.querySelector(".main")
const meaningEl = document.querySelector(".meaning")
const aboutEl = document.querySelector(".about")
const antonymEl = document.querySelector(".antonym")
const synonymEl = document.querySelector(".synonym")
const iconEl = document.querySelector(".fa-solid")
const button = document.querySelector(".btn")

let word
let audio
async function getData(word) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    audio = `https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3`
    console.log(audio)
    showData(data)
  } catch (error) {
    mainEl.innerHTML = "No such result found!"
  }
}

button.addEventListener("click", getMeaning)

function getMeaning() {
  word = inp.value

  getData(word)
  inp.value = ""
}

function showData(data) {
  console.log(data[0].word)
  console.log(wordEl, synonymEl, antonymEl)
  wordEl.innerText = data[0].word
  synonymEl.innerText =
    data[0].meanings[0].synonyms[0] + " , " + data[0].meanings[0].synonyms[1]
  aboutEl.innerText =
    data[0].meanings[0].partOfSpeech + ", " + data[0].meanings[1].partOfSpeech
  antonymEl.innerText =
    data[0].meanings[0].antonyms[0] + " , " + data[0].meanings[0].antonyms[1]
}

iconEl.addEventListener("click", (e) => {
  //   getData()
  audio.play()
})
