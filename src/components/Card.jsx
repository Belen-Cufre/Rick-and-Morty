import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({name, species, gender, image, onClose, id}) //hago destructuring de las porpiedades del objeto que recibo en la data
{ return (
      <div className={style.tarjetas}>
         <button className={style.botonCerrar} onClick={onClose}>X</button>
         <Link to={`/detail/${id}}`}>
            <h2 className={style.losH2}>{name}</h2>
         </Link>
         <h2 className={style.losH2}>{species}</h2>
         <h2 className={style.losH2}>{gender}</h2>
         <img className={style.img} src={image} alt={name} />
      </div>
   );
}

export default Card;