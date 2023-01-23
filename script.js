async function getData() {
  let word = "strong"
  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a0fc9638a5msh20831abe21a6647p133736jsn380ceab117ee",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
}

getData()
