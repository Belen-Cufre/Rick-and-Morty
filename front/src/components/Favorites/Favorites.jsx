import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";

const Favorites = ()=>{
    const {myFavorites} = useSelector(state => state)
    return(
        <div>
            {
                myFavorites.map((personajes)=> {
                    return(
                        <div>
                            <Link to={`/detail/${personajes.id}`}>
                                <h2 className={style.losH2}>{personajes.name}</h2>
                            </Link>
         
                            <h2 className={style.losH2}>{personajes.species}</h2>
         
                            <h2 className={style.losH2}>{personajes.gender}</h2>
         
                            <img className={style.img} src={personajes.image} alt={personajes.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Favorites;
