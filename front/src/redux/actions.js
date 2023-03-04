import { ADD_PERSONAJE, DELETE_PERSONAJE} from "./types";

export const addPersonaje= (personaje)=> {
    return { type: ADD_PERSONAJE, payload: personaje}
}

export const deletePersonaje= (id)=> {
    return{ type: DELETE_PERSONAJE, payload: id}
}