const axios= require("axios")

const getCharacterBtId= (res, ID)=> {
    axios(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response)=>{response.data})
    .then((data)=>{
        let character = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch ((err)=> {
        res.writeHead(500, {"Content-type":"text/plain"})
        res.end(`El personaje cuyo id es ${ID} no fue encontrado`)
    })
}

module.exports= getCharacterBtId;