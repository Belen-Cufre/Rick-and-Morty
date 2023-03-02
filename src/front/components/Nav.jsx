import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav= ({onSearch})=>{//Como la etiqueta en la app la recibe, aca hay que pasarsela como prop. Las propiedades siempre SE PASAN DEL PADRE AL HIJO. SI LA TIENE EL PADRE SE LA PASA AL HIJO Y DEL HIJO AL NIETO Y asi.
    return(
        <nav>
            <SearchBar onSearch={onSearch}/*este sería el nieto*//>
            <button>
                <Link to="/">LogOut</Link>
            </button>
            <hr />
            <button>
                <Link to="/about">About</Link>
            </button>
            <hr />
            <button>
                <Link to="/home">Home</Link>
            </button>
            <hr />
            <button>
                <Link to="/favorites">Favoritos</Link>
            </button>
        </nav>
    )
}

export default Nav;
