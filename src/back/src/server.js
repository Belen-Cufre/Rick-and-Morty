// const http = require("http");
// const characters = require ("./utils/data");
// const getCharacterBtId= require ("./controllers/getCharacterById") 
// const getCharDetail= require ("./controllers/getCharDetail") 


// module.exports=
// http.createServer((req, res)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes("rickandmorty/character")){
//         let id = req.url.split("/").at(-1);
//         let characterFilter= characters.filter((char) => {
//             char.id === Number(id) //todos los datos que vienen de las URL son stings. Hay que parsearlos si o si como está acá. Otra opcion es:
//         // let characterFind= characters.find((char)=> {
//         //     char.id === Number(id)
//         // })
//         })
//         res.writeHead(200, {"Content-type": "application/json"});
//         res.end(JSON.stringify(characterFilter))
        
//     }
//     if (req.url.includes("detail")){
//         let ID = req.url.split("/").at(-1);
//         getCharDetail(res, ID)
//     }
// }).listen(3001, "localhost")

//Ahora con express

const express= require("express");
const app= express();
const axios= require("axios");
const cors = require("cors");

app.use(cors()); //esto se instala para que no te genere errores entre los permisos back y front
app.use(express.json()); //el middleware

app.get("/rickandmorty/character/:id", async (req, res)=>{
    
    try {
        const {id} = req.params;

        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);

        const data= response.data; //acordate que es axios
        
        const infoCharacter= {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }

        res.status(200).json(infoCharacter)        

    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.get("/rickandmorty/detail/:deailId", async (req, res)=> {
    
    try {
        const {detailId} =req.params;

        const response = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data; //si saco la data desde acá, necesito encerrar todo en paréntesis desde await.

        const infoCharacterDetail= {
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            origin: response.origin,
            image: response.image
        }

        res.status(200).json(infoCharacterDetail);

    } catch (error) {
        res.status(404).send(error.message);
    }

})

let fav= []; // esto va a simular ser mi DB. Es let y no const porque lo vamos pisando

app.get("/rickandmorty/fav", (req, res)=> {
    
    res.status(200).json(fav);
})

app.post("/rickandmorty/fav", (req, res)=> {
    
    fav.push(req.body);

    res.status(200).send("Se guardaron los datos correctamente")
})

app.delete("/rickandmorty/fav", (req, res)=> {
    
    const {id}= req.params;

    const favFiltrados = fav.filter((char)=> char.id !== Number(id));

    fav= favFiltrados;

    res.status(200).send("Se eliminó correctamente")
})



module.exports= app;
