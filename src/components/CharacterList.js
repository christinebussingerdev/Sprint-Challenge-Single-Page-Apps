import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log('whoops: ', err)
      })

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(characters)

  return (
    <div className="profile-case">
      {characters.map(char => {
        return (
          <CharacterCard 
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            image={char.image}
          />
        )
      })}
    </div>
  );
}
