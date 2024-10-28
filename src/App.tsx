import React, {useState} from 'react';
import './App.css';
import CharacterCustomizer from './components/CharacterCustomizer';
import CharacterCanvas from './components/CharacterCanvas';
import {character} from './types/character';

const App: React.FC = () =>{
  const [character, setCharacter] = useState<character>({
    hairColor: 'black',
    skinTone: 'light',
    outfit: 'casual',
  });

  const updateCharacter = (newCharacter: { hairColor?: string; skinTone?: string; outfit?: string }) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      ...newCharacter,
    }));
  };

  return(
    <div className = "app">
      <CharacterCustomizer character = {character} updateCharacter={updateCharacter}/>
    </div>
  )
}

export default App;
