const axios = require("axios");
const { Character }= require("../DB_connection")

const getApiData = async () => {
    try {
        //la logica para traer la cantidad que te piden es muy importante! Tema del PI.
        let i = 1;
        let characters = [];

        while (i < 6) {         
            let apiData = await axios (`https://rickandmortyapi.com/api/character?page=${i}`);

        characters.push(apiData); //estoy pusheando una promesa por cada llamado, y van a estar todas pendientes. Por eso luego hago el promise all.
        i++;
        }

        characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {
            return({ //estas son las propiedades que estableci en mi modelo
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image,
            })
        }))
        //esto es para sacar el arreglo de adentro del arreglo [[]]
        let allCharacters = [];
        characters.map(char => {allCharacters = allCharacters.concat(char)})

    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async ()=> {
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters) //este método me permite pasarele un array de objetos y me los crea a todos juntos en la DB
        return allCharacters;
    } catch (error) {
        return {error: error.message} 
    }
}

module.exports = { saveApiData }