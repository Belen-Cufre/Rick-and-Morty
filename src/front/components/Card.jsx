import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addPersonaje, deletePersonaje } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Card({name, species, gender, image, onClose, id}) //hago destructuring de las porpiedades del objeto que recibo en la data
{ 
   const [isFav, setIsFav] = useState(false);

   const dispatch= useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite= ()=> {
      if (isFav === true) {
         setIsFav (false);
         dispatch(deletePersonaje(id));
      }
      else {
         setIsFav (true);
         dispatch(addPersonaje({name, species, gender, image, onClose, id}))
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.tarjetas}>
         {isFav ? ( <button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}

         <button className={style.botonCerrar} onClick={onClose}>X</button>
         
         <Link to={`/detail/${id}`}>
            <h2 className={style.losH2}>{name}</h2>
         </Link>
         
         <h2 className={style.losH2}>{species}</h2>
         
         <h2 className={style.losH2}>{gender}</h2>
         
         <img className={style.img} src={image} alt={name} />
      
      </div>
   );
}

// const mapDispatchToProps= (dispatch) => {
//    return{
//       addPersonaje: ()=>{dispatch(addPersonaje())},
//       deletePersonaje: ()=>{dispatch(deletePersonaje())}
//    }
// }

export default (Card);