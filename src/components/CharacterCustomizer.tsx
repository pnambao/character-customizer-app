import react from 'react';
import {character} from '../types/character';

import React, { useState } from 'react';

type CharacterCustomizerProps = {
  character: {
    hairColor: string;
    skinTone: string;
  };
  updateCharacter: (newCharacter: { hairColor: string; skinTone: string }) => void;
};

export const CharacterCustomizer: React.FC<CharacterCustomizerProps> = ({
  character,
  updateCharacter,
}) => {
  // Define available color options
  const hairColors = {
    black: '#000000',
    blonde: '#FFD700',
    brown: '#8B4513',
    red: '#FF4500',
  };

  const skinTones = {
    light: '#F0D5B1',
    medium: '#D2A679',
    dark: '#8B5A2B',
  };

  // Define handlers to update colors
  const handleHairColorChange = (color: string) => {
    updateCharacter({ ...character, hairColor: color });
  };

  const handleSkinToneChange = (tone: string) => {
    updateCharacter({ ...character, skinTone: tone });
  };

  return (
    <div className="character-customizer">
      <h1>Character Customizer</h1>
      <div
        className="character"
        style={{
          width: '150px',
          height: '200px',
          backgroundColor: skinTones[character.skinTone as keyof typeof skinTones],
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <div
          className="hair"
          style={{
            width: '100px',
            height: '40px',
            backgroundColor: hairColors[character.hairColor as keyof typeof hairColors],
            position: 'absolute',
            top: '10px',
            left: '25px',
          }}
        />
      </div>

      <div className="options">
        <h3>Choose Hair Color</h3>
        {Object.keys(hairColors).map((color) => (
          <button
            key={color}
            onClick={() => handleHairColorChange(color)}
            style={{
              backgroundColor: hairColors[color as keyof typeof hairColors],
              color: '#fff',
              border: 'none',
              padding: '10px',
              margin: '5px',
              cursor: 'pointer',
              opacity: character.hairColor === color ? 1 : 0.5,
            }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}

        <h3>Choose Skin Tone</h3>
        {Object.keys(skinTones).map((tone) => (
          <button
            key={tone}
            onClick={() => handleSkinToneChange(tone)}
            style={{
              backgroundColor: skinTones[tone as keyof typeof skinTones],
              color: '#fff',
              border: 'none',
              padding: '10px',
              margin: '5px',
              cursor: 'pointer',
              opacity: character.skinTone === tone ? 1 : 0.5,
            }}
          >
            {tone.charAt(0).toUpperCase() + tone.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};


export default CharacterCustomizer;