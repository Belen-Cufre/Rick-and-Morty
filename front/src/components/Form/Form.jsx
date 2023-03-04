import { useState } from "react";
import Validation from "./Validation";

const Form =({login})=>{ //NO TE OLVIDES DE VER SI RECIBE ALGO POR PARÁMETRO!!!!!!!! Aca hice destructuring de una funcion que me pidieron que le agregue como atributo a mi componente FORMMMM

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' });

    const [errors, setErrors] = useState({
        username: '', 
        password: '' });

        
    const handleInputChange= (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,    
        })
        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit= (event)=> {//si tengo un evento SIEMPRE tengo un EVENT! y algo hay que hacer
        event.preventDefault();// esto lo que evita que se nos recargue la página
        login(userData);
    }


    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p style={{color:"red"}}>{errors.username}</p>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

            <button>LogIn</button>
        </form>
    )

}

export default Form;