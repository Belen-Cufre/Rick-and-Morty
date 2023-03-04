import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail= ()=>{
    const {detailId} = useParams();//se llama asi porque es el nombre de la propiedad con el que la construimos al principio . Useparams me devuelve un objeto y una de las propiedades de este objeto se llama como le indicamos en la ruta, lo que cambia es su valor, el cual va a ir cambiando de acuerdo al ID que tomemos.
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);//se cambia por lo que me traigo de params

    return(
        <div>
            <button>
            <Link to="/home">Home</Link>  
            </button>
            <h1>NOMBRE: {character?.name}</h1>
            <hr />
            <ul>
                <li>Estado:{character?.status}</li>
                <li>Especie:{character?.species}</li>
                <li>Género:{character?.gender}</li>
                <li>Origen:{character?.origin?.name}</li>
            </ul>
            <span>
                <img src={character?.image} alt={character?.name} />
            </span>            
        </div>
    )

}

export default Detail;