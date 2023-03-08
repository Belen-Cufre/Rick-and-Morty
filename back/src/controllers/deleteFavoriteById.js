const {Favorites} = require('../DB_connection')

const deleteFavoriteById= async (id) =>{
    try {
        const favoriteFinded= await Favorites.findByPk(id)

        if(!favoriteFinded) {
            throw new Error ('No se encontró este favorito')
        }
        else { 
            favoriteFinded.destroy();
            return ("Se borró correctamente");
        }

    } catch (error) {
        return {error: error.message}
    }

}

module.exports= deleteFavoriteById;