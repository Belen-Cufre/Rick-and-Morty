import style from "./SearchBar.module.css";
import { useState } from "react";


function SearchBar({onSearch}) {

   const [character, setCharacter]= useState("");

   const handleChange= (event)=> {//esta funcion es la que recibe como parametro el evento que dispara el onChange de abajo!
      setCharacter(event.target.value)//mi estado va a ser lo que ingrese mi usuario en el input
   }

   return (
      <div className={style.divDeSearch}>
         <input className={style.input} type='search' value={character/*le asigno como valor el estado*/} onChange={handleChange}/>
      <button className={style.botonDelSearch} onClick={()=> onSearch(character) /*llamo a onsearch con callback para que no se ejecute de una y le paso el character como me pide la consigna*/}>Agregar</button>
      </div>
   );
}

export default SearchBar;