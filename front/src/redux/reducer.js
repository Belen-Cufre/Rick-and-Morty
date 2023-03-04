import { ADD_PERSONAJE, DELETE_PERSONAJE} from "./types"

const initialState= {
    myFavorites: []
}
const reducer = (state= initialState, action)=> {

    switch(action.type){
        case ADD_PERSONAJE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_PERSONAJE:
            let filtrado= state.myFavorites.filter(personaje => personaje.id !== action.payload)
            return {
                ...state,
                myFavorites: filtrado
            }
        default: 
            return {...state}
    }
}

export default reducer;