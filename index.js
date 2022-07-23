const fs = require('fs')

const express = require ('express')
const server = express()

// midleware
server.use(express.json())

server.get('/Koders', (request, response) => {

  const json = fs.readFileSync('koders.json', 'utf8')
  console.log('json: ', json)

/*   async function readDoc() {
    const readKoders = await fs.promises.readFile('koder.json', 'utf8')
    console.log(readKoders)
    response.status(401).json(JSON.parse(readKoders))}
  readDoc()
  .then(() => console.log('Se obtuvo el JSON'))
  .catch(() => console.error('Error: ', error)) */
  
})


server.listen(8080, () => {
  console.log('Server listening in port 8080 ejercicio_3')
})


    // practica fs + express

  /*
crear un end point
GET /koders -> regresa un json con una lista de koders
la lista de koders viene de un archivo koders.json

{
    "koders": [
        {
            "name": "Beto",
            "gender": "m"
        },
        {
            "name": "Walter",
            "gender": "m"
        },
        {
            "name": "Mariana",
            "gender": "f"
        },
        {
            "name": "Damian",
            "gender": "m"
        },
        {
            "name": "Silvi",
            "gender": "f",
        }
    ]
}




*/