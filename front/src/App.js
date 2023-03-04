import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App () {

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
  
  //en la consigna 5 nos pide que pasemos esta funcion al componente Nav (en este mismo archivo!!).Se la paso como propiedad a la etiqueta Nav.

  return (

    <div className='App'  style={{ padding: '25px', background: "image"}}>
      
      <Nav onSearch={onSearch}/>

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
