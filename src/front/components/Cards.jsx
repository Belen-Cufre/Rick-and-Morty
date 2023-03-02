import Card from './Card';
import style from "./Cards.module.css";

function Cards({characters, onClose}) {//hagp directamente el destructuring de lo que me llega por parámetro. Es un [{};{}]
   return (
      <div className={style.divHijo}>
{/*Opcion con destructuring*/}
         {characters.map(({id, name, species, gender, image}) =>{
         return <Card 
         key= {id}
         name= {name}
         species= {species}
         gender= {gender}
         image= {image}
         id={id} //Esta propiedad me la pide más adelante en la tarea de routing
         onClose= {()=>onClose(id)/*le paso el id a onclose pero antes le hago callback para que no se me rrenderice de una. Los que sigue lo hicimos en los primeros ejercicios....() => window.alert('Emulamos que se cierra la card')*/}/> 
      })
      }
      </div>)
}

{/*Opcion sin destructuring*/}
/*return (
   <div>
   { {characters.map((characters) =>{
      return <Card 
      key= {characters.id}
      name= {characters.name}
      species= {characters.species} 
      gender= {characters.gender} 
      image= {characters.image} 
      onClose= {() => window.alert('Emulamos que se cierra la card')}/>
   })}} */



export default Cards;