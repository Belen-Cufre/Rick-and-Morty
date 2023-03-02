import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import { useState, useEffect } from 'react'
import {  Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from "./components/Favorites"

function App () {

  const location= useLocation();//me tira un objeto del cual me interesa la propiedad pathName nada mas(lo uso en el FORM mas adelante)

  const [characters, setCharacters] = useState([]);//segun las instrucciones, mi estado inicial es un array

  //usamos la funcion que nos cambia el estado
  
  const onSearch= (character)=> {
    // setCharacters(//en un principio decimos que el estado es una copia de todo lo que tenga adentro.
    //   ...characters
    // )

    fetch(`https://rickandmortyapi.com/api/character/${character}`) .then((response) => response.json()) .then((data) => { if (data.name) { setCharacters((oldChars) => [...oldChars, data]); } else { window.alert('No hay personajes con ese ID'); } });
  }

  const onClose= (id)=>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )//como filter me hace una copia del array no necesito hacer ...character. en cada character busco el id del characater que sea distinto al id que me pasan por parametro.
    
  }

  const [access, setAccess]= useState(false);
  const username= "belencufre@hotmail.com"
  const password= "holis123"
  const navigate= useNavigate();

  const login= (userData)=> {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  //en la consigna 5 nos pide que pasemos esta funcion al componente Nav (en este mismo archivo!!).Se la paso como propiedad a la etiqueta Nav.

  return (

    <div className='App'  style={{ padding: '25px', background: "image"}}>
      
    {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
  
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      <hr />
      
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose= {onClose}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/detail/:detailId" element={<Detail />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
      <hr />
      {/* <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}
    </div>
  )
}

export default App;
