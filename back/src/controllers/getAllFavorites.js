const {Favorites} = require ('../DB_connection');

const getAllFavorites= async ()=> {
    try{
        const allFavorites= await Favorites.findAll();

        if(!allFavorites){
            throw new Error('No hay favoritos')
        }
        else {
            return allFavorites;
        }
    }
    catch (error) {
        return {error: error.message}
 
    }
}

module.exports= getCharacterBtId;